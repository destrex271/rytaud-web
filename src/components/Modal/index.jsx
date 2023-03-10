import {useEffect} from "react"
import QRCode from "react-qr-code"
// Mui Components
import { Button, Typography } from "@mui/material"
// Custom Styled Components
import {
  BlurBox, 
  QRBox,
  ModalBox,
  NavItem
} from "../StyledComponents/styledComp"

export const Modal = ({setShowModal, format, link}) => {

  return(
    <BlurBox>
      <ModalBox id="modal">
        <QRBox>
          <QRCode
            // size={256}
            style={{
              height: "auto",
              maxWidth: "95%",
              width: "95%"
            }}
            value={link}
            // viewBox={`0 0 256 256`}
          />
        </QRBox>
        <QRBox>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Roboto Mono', monospace",
              color: "white",
              textAlign: "center",
              paddingBottom: "3rem",
              paddingRight: "1rem"
            }}
          >
            Your file has been converted successfully!
          </Typography>
          <Button
            variant="contained"
            color="primary"
          >
            <a
              href={link}
              target="_blank"
            >
              Download {format} file
            </a>
          </Button>
          <NavItem
            sx={{
              marginTop: "3rem"
            }}
            onClick={()=>{setShowModal(false)}}
          >
            Close
          </NavItem>
        </QRBox>
      </ModalBox>
    </BlurBox>
  )
}
