import { Box, Typography, useTheme } from "@mui/material";
import imag from "../../assets/imga";

const CoverImage = () => {
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
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "rgb(153,102,153)",
  };

  return (
    <Box>
      <Box sx={containerStyle}>
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
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    gap: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr auto",
    },
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "40rem",
    height: "auto",
    justifySelf: "start",
    order: theme.breakpoints.down("sm") ? 2 : 1,
  };

  const textStyle = {
    display: "flex",
    flexDirection: "column",
    order: theme.breakpoints.down("sm") ? 1 : 2,
  };

  return (
    <Box sx={containerStyle}>
      <img src={imageSrc} style={imageStyle} alt="Imagen" />
      <div style={textStyle}>
        <Typography variant="h4">Título de la sección</Typography>
        <Typography>
          <p>Texto de ejemplo</p>
        </Typography>
      </div>
    </Box>
  );
};

const Interview = () => {
  return (
    <div>
      <CoverImage />
      <div>
        <InfoContainer />
      </div>
    </div>
  );
};

export default Interview;
