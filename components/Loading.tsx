import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Loading = () => {
  return <div className="loading">{<FadeLoader color={"#FE0000"} />}</div>;
};

export default Loading;
