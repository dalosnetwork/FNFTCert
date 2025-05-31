// Stat.jsx
import PropTypes from "prop-types";
import Icon from "./iconManager";

const List = ({ number }) => {
  const recentTransactions = [
    {
      id: "8173929",
      date: "12.04.2025",
      grams: "38",
      certificate: "8173929",
      nft: "nftlink.com",
      tx: "txlink.com",
      customerId: "8173929",
    },
    {
      id: "8173929",
      date: "12.04.2025",
      grams: "38",
      certificate: "8173929",
      nft: "nftlink.com",
      tx: "txlink.com",
      customerId: "8173929",
    },
    {
      id: "8173929",
      date: "12.04.2025",
      grams: "38",
      certificate: "8173929",
      nft: "nftlink.com",
      tx: "txlink.com",
      customerId: "8173929",
    },
    {
      id: "8173929",
      date: "12.04.2025",
      grams: "38",
      certificate: "8173929",
      nft: "nftlink.com",
      tx: "txlink.com",
      customerId: "8173929",
    },
    {
      id: "8173929",
      date: "12.04.2025",
      grams: "38",
      certificate: "8173929",
      nft: "nftlink.com",
      tx: "txlink.com",
      customerId: "8173929",
    },
    {
      id: "8173929",
      date: "12.04.2025",
      grams: "38",
      certificate: "8173929",
      nft: "nftlink.com",
      tx: "txlink.com",
      customerId: "8173929",
    },
    {
      id: "8173929",
      date: "12.04.2025",
      grams: "38",
      certificate: "8173929",
      nft: "nftlink.com",
      tx: "txlink.com",
      customerId: "8173929",
    },
  ];
  return (
    <table class="custom-table">
      <thead>
        <tr>
          <th className="font18 bold">
            <Icon name="sort" className="me-1" /> ID
          </th>
          <th className="font18 bold">
            <Icon name="sort" className="me-1" /> Date
          </th>
          <th className="font18 bold">
            <Icon name="sort" className="me-1" /> Grams
          </th>
          <th className="font18 bold">Certificate</th>
          <th className="font18 bold">NFT</th>
          <th className="font18 bold">TX</th>
          <th className="font18 bold">Customer ID</th>
        </tr>
      </thead>
      <tbody>
        {recentTransactions.map((tx, index) => (
          <tr key={index}>
            <td className="font18">
              <span className="bold">{index + 1}. </span>
              {tx.id}
            </td>
            <td className="font18">{tx.date}</td>
            <td className="font18">{tx.grams}</td>
            <td className="font18">{tx.certificate}</td>
            <td className="font18 underline">{tx.nft}</td>
            <td className="font18 underline">{tx.tx}</td>
            <td className="font18">{tx.customerId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

List.propTypes = {
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  text: PropTypes.string,
};

export default List;
