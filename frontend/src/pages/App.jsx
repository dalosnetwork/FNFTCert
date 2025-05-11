import React, { useState } from "react";
import Home from "./home.jsx";
import Certificates from "./certificates.jsx";
import Transactions from "./transactions.jsx";
import Icon from "../components/iconManager.jsx";
import logo from "../design/assets/logo-siyah.svg"

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((c) => !c);
  const [tab, setTab] = useState("home");

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      <aside className="sidebar">
        <div className="menu">
          <img src={logo} style={{width:"140px"}} className="mb-5" alt="" />
          <div className="d-flex justify-content-end">
            <button className="toggle-btn" onClick={toggle}>
              <Icon name={"collapse"} />
            </button>
          </div>
          <div
            className={`pointer font18 ${tab === "home" ? `bold` : ``}`}
            onClick={() => setTab("home")}
          >
            Home
          </div>
          <div
            className={`pointer font18 ${tab === "certificates" ? `bold` : ``}`}
            onClick={() => setTab("certificates")}
          >
            Certificates
          </div>
          <div
            className={`pointer font18 ${tab === "transactions" ? `bold` : ``}`}
            onClick={() => setTab("transactions")}
          >
            Transactions
          </div>
        </div>
        <div className="text-center mb-5">
          <div className="bold text-nowrap font18">
            <Icon name={"profile"} className="me-1" />
            email@email.com
          </div>
          <div className="mt-5 text-nowrap font12">version 2.282.392</div>
        </div>
      </aside>

      <main className="main">
        <button className="toggle-btn position-absolute" style={{top:"0"}} onClick={toggle}>
          <Icon name={"collapse"} />
        </button>
        <div className="header inner font24 bold py-1" style={{lineHeight:"1.25"}}>
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </div>
        {tab === "home" && <Home />}
        {tab === "certificates" && <Certificates />}
        {tab === "transactions" && <Transactions />}
      </main>
    </div>
  );
};

export default App;
