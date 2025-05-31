import Stat from "../components/stat";
import Icon from "../components/iconManager.jsx";
import List from "../components/list.jsx";

const Home = () => {

  
  
  return (
    <div className="">
      <div className="row inner">
        <div className="col-12 my-4 font18 bold">Stats</div>
      </div>
      <div className="row d-flex justify-content-center inner" style={{gap:"10px"}}>
        <div className="col-auto p-0">
          <Stat number="18" text="Active Certificates" />
        </div>
        <div className="col-auto p-0">
          <Stat number="28" text="Total Certificates" />
        </div>
        <div className="col-auto p-0">
          <Stat number="8" text="Remaining Grams" />
        </div>
        <div className="col-auto p-0">
          <Stat number="32" text="Total Grams Added" />
        </div>
        <div className="col-auto p-0">
          <Stat number="12" text="Total Grams Given" />
        </div>
        <div className="col-auto p-0">
          <Stat number="12" text="Total Transactions" />
        </div>
        <div className="col-auto p-0">
          <Stat number="5" text="Total Customers" />
        </div>
        <div className="col-auto p-0">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto p-0">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto p-0">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto p-0">
          <Stat number="42" text="Projects Completed" />
        </div>
        <div className="col-auto p-0">
          <Stat number="42" text="Projects Completed" />
        </div>
      </div>
      <div className="row inner">
        <div className="col-12 my-4 font18 bold">Recent Transactions</div>
      </div>
      <div className="row">
        <div className="col-12">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
