import { Box, useTheme, Typography } from "@mui/material";
import imag from "../../assets/imga";
import { useRef, useEffect } from "react";
import { tokens } from "../../theme";


const Index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: `url(${imag.img7})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          opacity:"0.3"
   
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography
          variant="h2"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              opacity:""
            }}
          >
            Inicio
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          height: '50vh',
          marginTop: '-4rem',
          paddingTop: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={imag.img5}
            alt="imagen"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
        <Box
          style={{
            marginLeft: '1rem',
          }}
        >
          <Typography
            style={{
              fontSize: '1.5rem',
              textAlign: 'left',
              fontWeight: 'bold',
            }}
          >
            Inicio
          </Typography>
          <Typography
            style={{
              fontSize: '1rem',
              textAlign: 'left',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare leo in blandit malesuada. Praesent ultricies tortor et eros consequat, vel dignissim nisi ullamcorper.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
