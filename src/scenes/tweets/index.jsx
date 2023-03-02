import { Box, Grid, Typography, useTheme } from "@mui/material";
import imag from "../../assets/imga";
import CoverImage from "../../components/CoverImage";

const InfoContainer = () => {
  const theme = useTheme();

  const containerStyle = {
    padding: theme.spacing(4),
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "40rem",
  };

  const textStyle = {
    width: "100%",
  };

  return (
    <Box style={containerStyle} marginTop="20px">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src={imag.img7} style={imageStyle} alt="Imagen" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box style={textStyle}>
            <Typography variant="h1">
              Juan Esteban Aristizábal Salazar
            </Typography>
            <Typography variant="h4" marginTop="5rem">
              Investigador en Movilidad Urbana
            </Typography>
            <Typography variant="h4" marginTop="20px">
              Maestrando en Ingeniería - Infraestructura y Sistemas de
              Transporte
            </Typography>
            <Typography variant="h4" marginTop="20px">
              Ingeniero Civil Universidad Nacional de Colombia
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const Tweets = () => {
  return (
    <Box>
      <CoverImage title="Consignas" image={imag.img7}/>
      <Box>
        <InfoContainer />
      </Box>
    </Box>
  );
};

export default Tweets;
