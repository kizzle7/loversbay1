import { useState } from "react";
import { Input } from "../../Components/Input/Index";
import { Button } from "../../Components/Button/Index";
import { useForm, Controller } from "react-hook-form";
import { notification } from "antd";
import { useHistory } from "react-router-dom";
import authService from "../../services/auth-service";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "./index.css";
function ResetPassword() {
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
      userName: email,
      password: password,
    };
    try {
      const result = await authService.onLogin(data);
      if (result) {
        setLoad(false);
        setDisabled(false);
        localStorage.setItem("user-token", JSON.stringify(result?.token));
        localStorage.setItem("user-details", JSON.stringify(result));
        Notification("success", "Success", "Login Successful!");
        // history.push("/dashboard");
      }
    } catch (err) {
      setLoad(false);
      setDisabled(false);
      Notification("error", "Error", err?.response?.data?.message);
    }
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
                  Reset Your Password
                </h1>
                <div className="text-center" style={{ fontSize: "20px" }}>
                  ❤️
                </div>
                <div className="mb-3">
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your passsword"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/i,
                        message:
                          "Invalid Password Format, must contain 1 Capital letters, number, and special character",
                      },

                      onChange: (e) => setPassword(e.target?.value),
                    })}
                  />

                  {errors.password && (
                    <span className="validate-error">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Enter confirm passsword"
                    {...register("cpassword", {
                      required: "Confirm Password is required",
                      onChange: (e) => setPassword(e.target?.value),
                      validate: (value) =>
                        value === password || "The passwords do not match",
                    })}
                  />
                  {errors.cpassword && (
                    <span className="validate-error">
                      {errors.cpassword.message}
                    </span>
                  )}
                 
                </div>
                <div>
                  <Button
                    className="dark-bg"
                    text="Submit"
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

export default ResetPassword;
