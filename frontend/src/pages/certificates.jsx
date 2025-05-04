// SidebarLayout.jsx
import React, { useState } from "react";

const Certificates= () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((c) => !c);
  const [tab, setTab] = useState();

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      Certificates
    </div>
  );
};

export default Certificates;
