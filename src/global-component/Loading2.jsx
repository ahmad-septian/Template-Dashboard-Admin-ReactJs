import * as React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LoadingIcon from "@/assets/lottiefiles-icon/loading2.json";
import { Box } from "@mui/material";

function Loading2() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // Ini akan membuat elemen berada di tengah vertikal
        }}
      >
        <Player
          autoplay
          loop
          src={LoadingIcon}
          style={{
            height: "40vh",
            width: "40vw",
          }}
        ></Player>
      </Box>
    </>
  );
}

export default Loading2;
