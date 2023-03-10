import React from "react";
import {
  Box, Typography
} from "@mui/material";
import styled from "@emotion/styled";

export const Header = () => {
  const HeadBox = styled(Box)({
    display: "flex",
    fontFamily: "'Righteous', cursive",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "2rem",
    height: "fit-content",
    width: "inherit",
  });
  return(
    <>
      <HeadBox>
        <Typography
          variant="h1"
        >
        </Typography>
      </HeadBox>
    </>
  );
}
