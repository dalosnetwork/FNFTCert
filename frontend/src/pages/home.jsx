import Stat from "../components/stat";
import Icon from "../components/iconManager.jsx";
import List from "../components/list.jsx";

const Home = () => {

  
  
  return (
    <div className="">
      <div className="row inner">
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
