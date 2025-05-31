import { useEffect, useRef, useState } from "react";
import logo from "../design/assets/logo-siyah.svg";
import Button1 from "../components/button1";
import Icon from "../components/iconManager";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../services/api";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    twofa: "",
  });
  const loginButtonRef = useRef(null);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginButtonRef.current) {
      loginButtonRef.current.focus();
    }
    console.log("Form submitted", loginData);
    handleLogin();
  };

  const handleLogin = async () => {
    try {
      const data = await loginUser(loginData.username, loginData.password, loginData.twofa);
      console.log("LOGIN DATA", data.status);
      if (data.status == 400 || data.status == 500 || data.status == 422) {
        setErrorState(true);
      } else if (data.status == 200) {
        console.log("BAŞARILI")
        sessionStorage.setItem("token", data.data.access_token);
        navigate("/panel")
      } else {
        setErrorState(true);
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ padding: "60px 0" }}>
            <img src={logo} style={{ width: "140px" }} alt="" />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className={`loginWrapper ${errorState ? `error` : ``}`}>
              <form onSubmit={handleSubmit}>
                <div className="row d-flex" style={{ gap: "10px" }}>
                  <div className="col-12 font24 bold">Login</div>
                  <div className="col-12 font16 semibold">
                    Username
                    <div className="loginInput mt-2">
                      <input
                        type="text"
                        name="username"
                        value={loginData.email}
                        onChange={handleChange}
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="col-12 font16 semibold">
                    Password
                    <div className="loginInput mt-2">
                      <input
                        className="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        type={showPassword ? `text` : `password`}
                        placeholder="Password"
                      />
                      <span
                        className="pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon
                          name={showPassword ? `passwordShow` : `passwordHide`}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col-12 font16 semibold">
                    2FA Code
                    <div className="loginInput mt-2">
                      <input
                        type="text"
                        name="twofa"
                        value={loginData.twofa}
                        onChange={handleChange}
                        placeholder="2FA Code"
                      />
                    </div>
                  </div>
                  {errorState && (
                    <div className="col-12 semibold errorMsg font14">
                      Wrong email or password, please try again.
                    </div>
                  )}
                  <div className="col-12 d-flex justify-content-center">
                    <Button1
                      className={`login disabled`}
                      label={"Login"}
                      ref={loginButtonRef}
                      type="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
