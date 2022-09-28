import React from "react";

function Details({ status, network, premiered }) {
  return (
    <>
      <div className="details-show">
        <p>
          status: <span>{status}</span>
        </p>
        <p>
          Premiered {premiered} {network ? `on ${network.name}` : null}
        </p>
      </div>
    </>
  );
}

export default Details;
