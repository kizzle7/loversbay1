import { useState } from "react";
import { Input } from "../../Components/Input/Index";
import { Button } from "../../Components/Button/Index";
import { useForm, Controller } from "react-hook-form";
import { notification } from "antd";
import { useHistory } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import axios from "axios"
import config from "../../config"
import PhoneInput from "react-phone-input-2";
import "./index.css";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, seteye] = useState(false);
  const [phone, setPhone] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [load, setLoad] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const Login = async () => {
    setLoad(true);
    setDisabled(true);
    const data = {
      countryCode: "234",
      phoneNumber: phone?.replace("234", ""),
    };
    axios
      .post(`${config.baseUrl}/auth/initiate-login-otp`, data)
      .then((res) => {
        setLoad(false);
        setDisabled(false);
        if (res.status === 200) {
          history?.push(`/authenticate-account?mode=login&phone=${phone}`);
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
                  Find & Match Your Love
                </h1>
                <div className="text-center" style={{ fontSize: "20px" }}>
                  ❤️
                </div>
                <div className="mb-3">
                  <label className="text-white">Phone Number</label>
                  <Controller
                    name="phone"
                    control={control}
                    {...register("phone", {
                      required: "Registred Phone Number is required!",
                    })}
                    render={({ field }) => (
                      <PhoneInput
                        preferredCountries={["ng"]}
                        inputClass="input-phone-select"
                        buttonClass="dropdown-btn-phone"
                        placeholder="Phone Number"
                        name="phone"
                        value={phone}
                        onChange={(phone, i, d) => {
                          setValue("phone", phone);
                          setPhone(phone);
                        }}
                      />
                    )}
                  />

                  {errors.phone && (
                    <span className="validate-error">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div>
                  <Button
                    className="dark-bg"
                    text="Login"
                    onClick={handleSubmit(Login)}
                    isDisabled={disabled}
                    loading={load}
                  ></Button>
                  <br />
                  <Button
                    className="dark-bg-outline mt-3"
                    text="Don't have Account? Create Now"
                    onClick={() => {
                      history?.push("/create-account");
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

export default Login;
