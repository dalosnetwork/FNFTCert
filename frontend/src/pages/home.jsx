// SidebarLayout.jsx
import React, { useState } from "react";
import Stat from "../components/stat";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed((c) => !c);
  const [tab, setTab] = useState();

  return (
    <div className="inner">
      <div className="row">
        <div className="col-12 my-4 font18 bold">Stats</div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-auto">
          <Stat number="18" text="Total Grams Added" />
        </div>
        <div className="col-auto">
          <Stat number="999" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto">
          <Stat number="42" text="Projects Completed" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 my-4 font18 bold">Recent Transactions</div>
      </div>
    </div>
  );
};

export default Home;
