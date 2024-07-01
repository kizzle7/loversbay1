import { useState } from "react";
import { Input } from "../../Components/Input/Index";
import { Button } from "../../Components/Button/Index";
import { useForm, Controller } from "react-hook-form";
import { notification } from "antd";
import { useHistory } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import config from "../../config";
import PhoneInput from "react-phone-input-2";
function Register() {
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

  const onRegister = async (data) => {
    setLoad(true);
    setDisabled(true);
    const datra = {
      firstName: data?.fname,
      lastName: data?.lname,
      emailAddress: data?.nick,
      countryCode: "234",
      phoneNumber: data?.phone?.replace("234", ""),
      deviceIdentifier: "abcd1234",
      referralCode: "",
    };
    axios
      .post(
        `${config.baseUrl}/auth/sign-up`, datra
      )
      .then((res) => {
        setLoad(false);
        if (res.status === 201) {
          setLoad(false);
          setDisabled(false);
          history?.push(`/authenticate-account?mode=register&phone=${phone}`);
        } else {
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
                  Complete Details
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
                <div className="mb-3">
                  <Input
                    label="First Name"
                    type="text"
                    placeholder="Enter your First Name"
                    {...register("fname", {
                      required: "First Name is required",
                    })}
                  />

                  {errors.fname && (
                    <span className="validate-error">
                      {errors.fname.message}
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <Input
                    label="Last Name"
                    type="text"
                    placeholder="Enter your Last Name"
                    {...register("lname", {
                      required: "Last Name is required",
                    })}
                  />

                  {errors.lname && (
                    <span className="validate-error">
                      {errors.lname.message}
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <Input
                    label="Nick Name"
                    type="text"
                    placeholder="Enter your nick name"
                    {...register("nick", {
                      required: "Nick Name is required",
                    })}
                  />

                  {errors.nick && (
                    <span className="validate-error">
                      {errors.nick.message}
                    </span>
                  )}
                </div>

                <div>
                  <Button
                    className="dark-bg"
                    text="Register"
                    onClick={handleSubmit(onRegister)}
                    isDisabled={disabled}
                    loading={load}
                  ></Button>
                  <br />
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

export default Register;
