import {useState} from "react";
import {
  TextField,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Snackbar,
  Alert
} from "@mui/material";
// Custom Styled Componenets
import {Parent} from "../StyledComponents/styledComp.jsx";
import {Modal} from "../Modal";
// custom Components
import {Loader} from "../Loader"
import axios from "axios";

export const SearchBar = () => {
  // State Variables
  const [load, setLoader] = useState(false)
  const [url, setUrl] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [format, setFormat] = useState("mp3");
  const [link, setLink] = useState('');
  const [openWrongInput, setOpenWrongInput] = useState(false);

  const isValidUrl = url1 => {
    try{
      return Boolean(new URL(url1))
    }catch(e){
      return false;
    }
  }
  const handleClick = async(e) =>{
    e.preventDefault();
    setLoader(true)
    if(!isValidUrl(url)){setLoader(false);setOpenWrongInput(true);return;}
    console.log(format);
    var data = JSON.stringify({
      "url": url,
      "format": format
    });
    var config = {
      method: 'post',
      url: 'http://0.0.0.0:8000/download/audio',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    // setTimeout(()=>{
    //   setLoader(false);
    //   setShowModal(true);
    // },2000)
    axios(config)
    .then(function (response) {
      if(response.data['status'] == 200){
        console.log(response.data["file"])
        setLink(response.data["file"])
        setTimeout(()=>{setLoader(false); setShowModal(true);}, 1000)
      }else{
        alert(response.data["error"])
        setLoader(false);
        setShowModal(false);
        window.location.reload();
      }
    })
    .catch(function (error) {
      console.log(error["message"]);
      if(error["message"] == "Network Error"){
        alert("Unable To connect to server! Please Try again Later");
        setTimeout(()=>{window.location.reload();})
      }
    });
  }
  const ButtonsBar = () => {
    const avFormats = ["mp3", "wav", "3gp", "aac", "flv", "m4a", "oog", "webm"]
    return(
      <Box
        sx={{
          width: "50vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "fit-content"
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={async (e)=>{handleClick(e)}}
        >
          Download
        </Button>
        <Select
          value={format}
          variant="standard"
          label="Select Format"
          onChange={(event)=>{console.log(event);setFormat(event.target.value)}}
          sx={{
            input:{
              color: "white",
            }
          }}
        >
          {avFormats.map((format)=>(
            <MenuItem
              value={format}
            >
              {format}
            </MenuItem>
          ))}
        </Select>
      </Box>
    )
  }

  return(
    <Parent>
      {showModal ? 
        <Modal
          link={link}
          format={format}
          setShowModal={setShowModal}
        /> 
        : null}
      {load ? <Loader /> : null}
      <Typography
        variant="h2"
        color="white"
        onChange={(e)=>{setUrl(e.target.value)}}
        sx={{
          fontFamily: "'Roboto Mono', monospace",
          fontWeight: "500",
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        Welcome To rYTAud
      </Typography>
      <TextField
        variant= "standard"
        placeholder="https://youtube.com/Your_Url_Goes_here"
        sx={{
          paddingBottom: "5rem",
          input:{
            fontWeight: "300",
            fontSize: "2.6rem",
            paddingX: "11rem",
            fontFamily: "'Roboto Mono', monospace",
          }
        }}
        autoFocus
        onChange={(event)=>{setUrl(event.target.value)}}
      />
      <ButtonsBar />
      <Snackbar
        open={openWrongInput}
        autoHideDuration={1000}
        onClose={()=>{setOpenWrongInput(false)}}
      >
        <Alert severity="error">Invalid Link</Alert>
      </Snackbar>
    </Parent> 
  );
}
