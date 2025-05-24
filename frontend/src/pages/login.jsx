import { useState } from "react";
import logo from "../design/assets/logo-siyah.svg"
import Button1 from "../components/button1";
import Icon from "../components/iconManager";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{padding:"60px 0"}}>
            <img src={logo} style={{width:"140px"}} alt="" />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="loginWrapper">
              <div className="row d-flex" style={{gap:"10px"}}>
                <div className="col-12 font24 bold">
                  Login
                </div>
                <div className="col-12 font16 semibold">
                  Email
                  <div className="loginInput">
                    <input type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="col-12 font16 semibold">
                  Password
                  <div className="loginInput">
                    <input className="password" type="text" placeholder="Password" />
                    <Icon name="passwordHide"/>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <Button1 className={`login disabled`} label={"Login"}/>
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
