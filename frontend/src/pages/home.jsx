import Stat from "../components/stat";
import Icon from "../components/iconManager.jsx";
import List from "../components/list.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatData } from "../store/features/statdata/statSlice.js";
import { getTransactionData } from "../store/features/transactiondata/transactionSlice.js";

const Home = () => {
  const { stat } = useSelector((state) => state.stat);
  const { transaction } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();
  const filter = {
    page: 1,
    per_page: 5,
  };



  useEffect(() => {
    dispatch(getTransactionData(filter));
    dispatch(getStatData());
  }, []);

  const formatNumberShort = (num) => {
  if (num === null || num === undefined || isNaN(num)) return "0";

  const units = ["", "K", "M", "B", "T", "P", "E"];
  const tier = Math.log10(Math.abs(num)) / 3 | 0;

  if (tier === 0) return num.toString();

  const suffix = units[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;

  return scaled.toFixed(scaled < 10 ? 1 : 0) + suffix;
};


  const formatTitle = (key) => {
    return key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="">
      <div className="row inner">
        <div className="col-12 my-4 font18 bold">Stats</div>
      </div>
      <div
        className="row d-flex justify-content-center inner"
        style={{ gap: "10px" }}
      >
        {stat &&
          Object.entries(stat).map(([key, value]) => (
            <div key={key} className="col-auto p-0">
              <Stat number={formatNumberShort(value)} text={formatTitle(key)} />
            </div>
          ))}
      </div>
      <div className="row inner">
        <div className="col-12 my-4 font18 bold">Recent Transactions</div>
      </div>
      <div className="row">
        <div className="col-12">
          <List data={transaction.data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
