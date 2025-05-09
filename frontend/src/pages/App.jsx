import React, { useState } from "react";
import Home from "./home.jsx";
import Certificates from "./certificates.jsx";
import Transactions from "./transactions.jsx";
import Icon from "../components/iconManager.jsx";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((c) => !c);
  const [tab, setTab] = useState("home");

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      <aside className="sidebar">
        <button className="toggle-btn" onClick={toggle}>
          <Icon name={"collapse"}/>
        </button>
        <nav className="menu">
          <ul>
            <li onClick={() => setTab("home")}>Home</li>
            <li onClick={() => setTab("certificates")}>Certificates</li>
            <li onClick={() => setTab("transactions")}>Transactions</li>
          </ul>
        </nav>
        <div className="">
          email
        </div>
      </aside>

      <main className="main">
        {tab === "home" && <Home />}
        {tab === "certificates" && <Certificates />}
        {tab === "transactions" && <Transactions />}
      </main>
    </div>
  );
};

export default App;
