import { useState } from "react";
import logo from "../design/assets/logo-siyah.svg";
import Button1 from "../components/button1";
import Icon from "../components/iconManager";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorState, setErrorState] = useState(false);
  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ padding: "60px 0" }}>
            <img src={logo} style={{ width: "140px" }} alt="" />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className={`loginWrapper ${errorState ? `error` : ``}`}>
              <div className="row d-flex" style={{ gap: "10px" }}>
                <div className="col-12 font24 bold">Login</div>
                <div className="col-12 font16 semibold">
                  Email
                  <div className="loginInput mt-2">
                    <input type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="col-12 font16 semibold">
                  Password
                  <div className="loginInput mt-2">
                    <input
                      className="password"
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
                {errorState && (
                  <div className="col-12 semibold errorMsg font14">
                    Wrong email or password, please try again.
                  </div>
                )}
                <div className="col-12 d-flex justify-content-center">
                  <Button1 onClick={()=>setErrorState(!errorState)} className={`login disabled`} label={"Login"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
