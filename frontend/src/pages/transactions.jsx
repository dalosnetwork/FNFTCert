// SidebarLayout.jsx
import React, { useState } from "react";

const Transactions = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((c) => !c);
  const [tab, setTab] = useState();

  return (
    <div className={`layout ${collapsed ? "collapsed" : ""}`}>
      tRANSACTİONS
    </div>
  );
};

export default Transactions;
