import { Box, Typography, useTheme } from "@mui/material";
import imag from "../../assets/imga";
import { useRef, useEffect } from "react";

const CoverImage = () => {
  const theme = useTheme();
  const imageSrc =
    "https://images.unsplash.com/photo-1519681393784-d120267933ba";

  const textStyle = {
    position: "absolute",
    textAlign: "center",
  };

  const containerStyle = {
    backgroundImage: `url(${imageSrc})`,
    opacity: 0.8,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "rgb(153,102,153)",
  };

  return (
    <Box>
      <Box style={containerStyle}>
        <Typography variant="h1" style={textStyle}>
          Acerca de mi
        </Typography>
      </Box>
    </Box>
  );
};

const InfoContainer = () => {
  const theme = useTheme();
  const imageSrc =
    "https://images.unsplash.com/photo-1519681393784-d120267933ba";

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  };

  const imageStyle = {
    width: "40%",
    marginRight: theme.spacing(4),
  };

  const textStyle = {
    width: "60%",
  };

  return (
    <Box style={containerStyle}>
      <img src={imageSrc} style={imageStyle} alt="Imagen" />
      <div style={textStyle}>
        <Typography variant="h4" gutterBottom>
          Título de la sección
        </Typography>
        <Typography variant="body1" component="div">
          <p>Texto de ejemplo</p>
        </Typography>
      </div>
    </Box>
  );
};

const About = () => {
  return (
    <div>
      <CoverImage />
      <div>
        <InfoContainer />
      </div>
    </div>
  );
};

export default About;
