// Stat.jsx
import PropTypes from "prop-types";
import Icon from "./iconManager";
import { useState } from "react";
import Button1 from "./button1";

const List = ({ data, isCertificate, sortBy, sortOrder, handleFilter }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  function truncateString(str, maxLength) {
    if (typeof str !== "string") return "";
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + "…";
  }

  const plusCertificate = (data) => {
    const certs = data || [];
    return certs.length > 1 ? ` +${certs.length - 1}` : "";
  };

  const [openCertsId, setOpenCertsId] = useState(null);

  const handleOpen = (id) => {
    setOpenCertsId(id);
  };

  const handleClose = () => {
    setOpenCertsId(null);
  };

  console.log(openCertsId);

  return (
    <table class="custom-table">
      <thead>
        <tr>
          <th
            className="font18 bold pointer"
            onClick={() => handleFilter("id")}
          >
            {sortBy === "id" ? (
              sortOrder === "asc" ? (
                <>
                  <Icon name="sort" className="me-1" />{" "}
                </>
              ) : (
                <>
                  <Icon name="sortReverse" className="me-1" />{" "}
                </>
              )
            ) : (
              <span style={{ opacity: "30%" }}>
                <Icon name="sort" className="me-1" />
              </span>
            )}
            ID
          </th>
          <th
            className="font18 bold pointer"
            onClick={() => handleFilter("date")}
          >
            {sortBy === "date" ? (
              sortOrder === "asc" ? (
                <>
                  <Icon name="sort" className="me-1" />{" "}
                </>
              ) : (
                <>
                  <Icon name="sortReverse" className="me-1" />{" "}
                </>
              )
            ) : (
              <span style={{ opacity: "30%" }}>
                <Icon name="sort" className="me-1" />
              </span>
            )}
            Date
          </th>
          <th
            className="font18 bold pointer"
            onClick={() => handleFilter("gram")}
          >
            {sortBy === "gram" ? (
              sortOrder === "asc" ? (
                <>
                  <Icon name="sort" className="me-1" />{" "}
                </>
              ) : (
                <>
                  <Icon name="sortReverse" className="me-1" />{" "}
                </>
              )
            ) : (
              <span style={{ opacity: "30%" }}>
                <Icon name="sort" className="me-1" />
              </span>
            )}
            Grams
          </th>
          {isCertificate ? (
            <>
              <th className="font18 bold">ERC20</th>
              <th className="font18 bold">NFT ID</th>
            </>
          ) : (
            <>
              <th className="font18 bold">ERC20</th>
              <th className="font18 bold">TX</th>
              <th className="font18 bold">Customer ID</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((tx, index) => (
            <tr key={index}>
              <td className="font18">
                <span className="bold">{index + 1}. </span>
                {tx.id}
              </td>
              <td className="font18">{formatDate(tx.date)}</td>
              <td className="font18">{tx.gram}</td>
              {isCertificate ? (
                <>
                  <td className="font18">{tx.erc20_address}</td>
                  <td className="font18">{tx.nft_id}</td>
                </>
              ) : (
                <>
                  <td
                    className="font18 pointer underline"
                    onClick={() =>
                      tx.certificate.length > 0 && handleOpen(tx.id)
                    }
                  >
                    {truncateString(tx.certificate[0], 15) +
                      plusCertificate(tx.certificate)}

                    {openCertsId && openCertsId === tx.id && (
                      <div
                        className="modal-overlay"
                        key={`modal-${tx.id}`}
                        onClick={handleClose}
                      >
                        <div
                          className="modal-content"
                          onClick={(e) => e.stopPropagation()} // ✅ Stop click from reaching <td>
                        >
                          <h2 className="modal-title font24 semibold">ERC20</h2>
                          <ul className="modal-list">
                            {tx.certificate.map((cert, idx) => (
                              <li key={idx} className="modal-item font24">
                                {cert}
                              </li>
                            ))}
                          </ul>
                          <Button1
                            className="teal m-auto"
                            style={{width:"100px" }}
                            onClick={handleClose}
                            label={"Close"}
                          />
                        </div>
                      </div>
                    )}
                  </td>

                  <td
                    className="font18 underline pointer"
                    onClick={() => handleOpen(tx.tx_id)}
                  >
                    {truncateString(tx.tx_id, 15)}

                    {openCertsId && openCertsId === tx.tx_id && (
                      <div
                        className="modal-overlay"
                        key={`modal-${tx.tx_id}`}
                        onClick={handleClose}
                      >
                        <div
                          className="modal-content"
                          onClick={(e) => e.stopPropagation()} // ✅ Stop click from reaching <td>
                        >
                          <h2 className="modal-title font24 semibold">Transaction ID</h2>
                          <ul className="modal-list">
                            <li className="modal-item font24">
                              {tx.tx_id}
                            </li>
                          </ul>
                          <Button1
                            className="teal m-auto"
                            style={{width:"100px" }}
                            onClick={handleClose}
                            label={"Close"}
                          />
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="font18">{tx.customer_id}</td>
                </>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  isCertificate: PropTypes.bool,
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default List;
