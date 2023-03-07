import { Box, Typography } from "@mui/material";

const CoverImage = ({ image, title }) => {
  const containerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    opacity: 0.3,
  };

  const textStyle = {
    position: "absolute",
    textAlign: "center",
    fontSize: "3.2rem",
    fontWeight: "bold",
  };

  return (
    <Box>
      <Box style={containerStyle}>
        <Box style={imageStyle} />
        <Typography variant="h2" style={textStyle}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CoverImage;
