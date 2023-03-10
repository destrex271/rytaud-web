import styled from "@emotion/styled";
import {
  Box,
  Typography
} from "@mui/material";

export const MainBox = styled(Box)({
  background: "radial-gradient(circle, #000000, #010715, #020212, #000000)",
  width: "inherit",
  height: "88vh",
  backgroundSize: "400% 400%",
  animation: "moveBg ease-in-out 10s infinite",
  "@keyframes moveBg" : {
    "0%":{
      "backgroundPosition" : "0% 50%"
    },
    "50%":{
      "backgroundPosition" : "100% 50%"
    },
    "100%":{
      "backgroundPosition" : "0% 50%"
    }
  }
})

export const Navbox = styled(Box)({
  bacgrundColor: "transaprent",
  width: "50%",
  height: "inherit",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
})

export const ParentNav = styled(Box)({
  backgroundColor: "#2a1bef",
  width: "inherit",
  height: "12vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
})

export const NavItem = styled(Typography)({
  color: "#ffffffa2",
  fontSize: "1.4rem",
  "&:hover":{
    color: "white",
    textDecoration: "underline",
    transition: "color ease-in 0.3s",
    cursor: "pointer"
  }
})

export const Parent = styled(Box)({
    width: "inherit",
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
})

export const BlurBox = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: 1,
  transition: "backdrop-filter 3s",
  backdropFilter: "blur(10px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

export const ModalBox = styled(Box)({
  position: "relative",
  zIndex: 2,
  backgroundColor: "#2b2b2b99",
  borderRadius: "20px",
  width: "60%",
  height: "80vh",
  display: "flex",
  flexDirection: "row"
})

export const QRBox = styled(Box)({
  width: "50%",
  height: "inherit",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
})
