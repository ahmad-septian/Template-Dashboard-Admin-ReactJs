import * as React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LoadingIcon from "@/assets/lottiefiles-icon/loading.json";
import { Box } from "@mui/material";

function Loading() {
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
            height: "35vh",
            width: "35vw",
          }}
        ></Player>
      </Box>
    </>
  );
}

export default Loading;
