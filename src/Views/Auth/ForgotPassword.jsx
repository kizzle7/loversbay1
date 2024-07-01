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
function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, seteye] = useState(false);
  const [phone,setPhone] = useState("")
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
      history?.push('/authenticate-account?mode=forgotPassword')
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
                  Forgot Password, Lets Get Your Account Back
                </h1>
                <div className="text-center" style={{ fontSize: "20px" }}>
                  ❤️
                </div>
                <div className="mb-3">
                  <label className="text-white">Registered Phone Number</label>
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
                          setPhone(phone)
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
                    text="Proceed"
                    onClick={handleSubmit(Login)}
                    isDisabled={disabled}
                    loading={load}
                  ></Button>
                  <br />
                  <Button
                    className="dark-bg-outline mt-3"
                    text="Don't have Account? Create Now"
                    onClick={() => {
                      history?.push('/create-account')
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

export default ForgotPassword;
