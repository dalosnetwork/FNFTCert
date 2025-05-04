// SidebarLayout.jsx
import React, { useState } from "react";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((c) => !c);
  const [tab, setTab] = useState();

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      HOME
    </div>
  );
};

export default Home;
