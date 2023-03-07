import { Box, IconButton, useTheme } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";

const ContactInfo = () => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      height="8rem"
    >
      <IconButton href="https://twitter.com/je_aristizabal" target="_blank">
        <TwitterIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/juan-esteban-aristizabal-salazar/"
        target="_blank"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://scholar.google.com/citations?user=zetwXcYAAAAJ&hl=es&oi=sra"
        target="_blank"
      >
        <SchoolIcon fontSize="large" />
      </IconButton>
      <IconButton href="mailto:jaristizabals@unal.edu.co" target="_blank">
        <EmailIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ContactInfo;
