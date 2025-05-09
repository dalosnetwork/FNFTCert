// SidebarLayout.jsx
import React, { useState } from "react";
import Stat from "../components/stat";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((c) => !c);
  const [tab, setTab] = useState();

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      <div className="header">Home</div>
      <div className="row">
        <div className="col-12">Stats</div>
        <div className="col-12">
          <Stat number="42" text="Projects Completed" />
          <Stat number="42" text="Projects Completed" />
          <Stat number="42" text="Projects Completed" />
          <Stat number="42" text="Projects Completed" />
        </div>
      </div>
    </div>
  );
};

export default Home;
