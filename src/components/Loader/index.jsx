// Custom styled components
import styled from "@emotion/styled";
import {
  BlurBox
} from "../StyledComponents/styledComp";
import {keyframes} from "@emotion/react"

export const AnimCont = () => {
  
  const LoudAnim = keyframes`
    25% {
      transform: scaleY(.6);
    } 
    50% {
      transform: scaleY(.4);
    }
    75% {
      transform: scaleY(.8);
    }
  `;
  const QuietAnim = keyframes`
    25% {
      transform: scaleY(.1);
    },
    50% {
      transform: scaleY(.3);
    },
    75% {
      transform: scaleY(.2);
    }
  `;
  const NormalAnim = keyframes`
    25% {
      transform: scaleY(.5);
    },
    50% {
      transform: scaleY(.3);
    },
    75% {
      transform: scaleY(.6);
    }
  `;



  const Loud = styled.div`
    animation-name: ${LoudAnim};
    width: 0.7rem;
    height: 3rem;
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite; 
    background-color: cyan;
    margin-right: 0.5rem;
    border-radius: 36px;
   `;
  const Normal = styled.div`
    animation-name: ${NormalAnim};
    width: 0.7rem;
    height: 3rem;
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    background-color: cyan;
    margin-right: 0.5rem;
    border-radius: 36px;
  `;
  const Quiet = styled.div`
    animation-name: ${QuietAnim}; 
    width: 0.7rem;
    height: 3rem;
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    background-color: cyan;
    margin-right: 0.5rem;
    border-radius: 36px;
  `;

  return(
    <div
      style={{
        display:"flex",
        flexdirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        height: "fit-content"
      }}
    >
      <Loud/><Quiet/><Normal/><Quiet/><Normal/>
    </div> 
  )
}

export const Loader = () => {
  return(
    <BlurBox>
      <AnimCont />
    </BlurBox>
  )
}
