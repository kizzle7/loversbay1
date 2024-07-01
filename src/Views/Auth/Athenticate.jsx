import { useState } from "react";
import { Button } from "../../Components/Button/Index";
import { useForm, Controller } from "react-hook-form";
import { notification } from "antd";
import { useHistory } from "react-router-dom";
import authService from "../../services/auth-service";
import "./index.css";
import PinInput from "react-pin-input";
import axios from "axios";
import config from "../../config";
import { useEffect } from "react";
function Authenticate() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, seteye] = useState(false);
  const [phone, setPhone] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [otp, setOtp] = useState("");
  const [load, setLoad] = useState(false);

  const [modeType, setModeType] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const otpInput = watch("otp");

  const CompleteAthentication = () => {
    if (otpInput) {
      if (modeType === "login") {
        validateOTp();
      } else {
        validateOTp();
      }
    } else {
      Notification("error", "Error", "OTP is required");
    }
  };

  useEffect(() => {
    var urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get("mode");
    if (type !== "login") {
      initiateOTP();
    }
  }, []);

  const initiateOTP = async () => {
    var urlParams = new URLSearchParams(window.location.search);
    const phoneNumber = urlParams.get("phone");
    const data = {
      countryCode: "234",
      phoneNumber: phoneNumber?.replace("234", ""),
    };
    axios
      .post(`${config.baseUrl}/auth/initiate-login-otp`, data)
      .then((res) => {
        setLoad(false);
      })
      .catch((err) => {
        Notification("error", "Error", err?.response?.data?.message);
      });
  };

  const validateOTp = async () => {
    var urlParams = new URLSearchParams(window.location.search);
    const phoneNumber = urlParams.get("phone");
    const data = {
      countryCode: "234",
      phoneNumber: phoneNumber?.replace("234", ""),
      otp: otpInput,
    };
    setLoad(true);
    setDisabled(true);
    axios
      .post(`${config.baseUrl}/auth/verify-phone-number`, data)
      .then((res) => {
        setLoad(false);
        setDisabled(false);
        if (res.status === 200) {
          Notification("success", "Success", "Verification Confirmed!");
          onLogin();
        }
      })
      .catch((err) => {
        setLoad(false);
        setDisabled(false);
        Notification("error", "Error", err?.response?.data?.message);
      });
  };

  const onLogin = async () => {
    var urlParams = new URLSearchParams(window.location.search);
    const phoneNumber = urlParams.get("phone");
    const data = {
      countryCode: "234",
      username: phoneNumber?.replace("234", ""),
      password: otpInput,
      deviceIdentifier: "abcd1234",
    };
    setLoad(true);
    setDisabled(true);
    axios
      .post(`${config.baseUrl}/login`, data)
      .then((res) => {
        setLoad(false);
        setDisabled(false);
        if (res.status === 200) {
          Notification("success", "Success", "Login Successful!");
          setTimeout(() => {
            history?.push("/dashboard");
          }, 900);
        }
      })
      .catch((err) => {
        setLoad(false);
        setDisabled(false);
        Notification("error", "Error", err?.response?.data?.message);
      });
  };

  const Notification = (type, msgType, msg) => {
    notification[type]({
      message: msgType,
      description: msg,
    });
  };

  return (
    <div className="login-form-bg text-white">
      <div className="login-face">
        <div className="row">
          <div className="col-12">
            <div className="">
              <div className="login-form">
                <h1 className="mb-4 cabinet-font-txt font-weight-bold text-center">
                  Verify Your Account
                </h1>
                <div className="text-center" style={{ fontSize: "20px" }}>
                  ❤️
                </div>
                <h4 className="text-center py-3">
                  Input OTP sent to 070XXXXXXXXX
                </h4>
                <br />
                <div className="mb-3 d-flex justify-content-center align-items">
                  <Controller
                    name="otp"
                    control={control}
                    {...register("otp", {
                      required: "OTP is required!",
                    })}
                    render={({ field }) => (
                      <PinInput
                        length={4}
                        initialValue={otp}
                        onChange={(value, index) => setValue("otp", value)}
                        type="numeric"
                        inputMode="number"
                        style={{ padding: "10px" }}
                        inputStyle={{
                          borderColor: "#F44336",
                          color: "white",
                          fontSize: "23px",
                        }}
                        inputFocusStyle={{ borderColor: "white" }}
                        onComplete={(value, index) => {}}
                        autoSelect={true}
                        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                      />
                    )}
                  />
                </div>

                <br />
                <div>
                  <Button
                    className="dark-bg"
                    text="Submit"
                    onClick={CompleteAthentication}
                    isDisabled={disabled}
                    loading={load}
                  ></Button>

                  <Button
                    className="dark-bg-outline mt-3"
                    text="Already have an Account? Login"
                    onClick={() => {
                      history?.push("/login");
                    }}
                  ></Button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;
