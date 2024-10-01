import React from "react";

import { CircularProgress } from "@mui/material";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <CircularProgress />
    </div>
  );
};

export default Loading;
