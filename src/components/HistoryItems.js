import React from "react";

const HistoryItems = ({ hist, loading }) => {
  if (loading) {
    return <h1>loading..</h1>;
  }

  return (
    // <ul className="list-group mb-4">
    //   {/* {hist.map((hist) => {
    //     <li>{hist.title}</li>;
    //   })} */}
    // </ul>
    <h1>hello</h1>
  );
};
export default HistoryItems;
