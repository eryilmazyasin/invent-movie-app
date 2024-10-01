import React from "react";

import { Box, Typography } from "@mui/material";
import "./ResultMessage.scss";

interface IProps {
  text: string;
}
const ResultMessage = (props: IProps) => {
  const { text } = props;
  return (
    <Box className="result-message-wrapper">
      <Typography variant="h6">{text}</Typography>
    </Box>
  );
};

export default ResultMessage;
