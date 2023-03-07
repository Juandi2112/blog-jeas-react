import { Box, Typography } from "@mui/material";
import imag from "../../assets/imga";
import CoverImage from "../../components/CoverImage";
import Footer from "../../components/Footer"
import InterviewList from "../../components/InterviewList";

const TextFl = () => {
  return (
    <Box mt="2rem" mb="2rem">
      <Typography
        variant="h4"
        paragraph
        justifyContent="center"
        textAlign="justify"
        sx={{ width: "66%", mx: "auto" }}
      >
        Con el objetivo de tener un repositorio personal, y que alguna persona
        interesada pueda acceder a ellas, a continuación dejo los enlaces de
        algunas entrevistas y notas donde he compartido ideas acerca de
        movilidad urbana (clic en la imagen respectiva para acceder).
      </Typography>
    </Box>
  );
};

const Index = () => {

  return (
    <Box>
      <CoverImage title="Entrevistas" image={imag.img14} />
      <TextFl />
      <InterviewList
        img={imag.img16}
        link="www.google.com"
        index="1"
      />
      <InterviewList
        img={imag.img14}
        link="www.google.com"
        index="2"
      />
      <InterviewList
        img={imag.img5}
        link="www.google.com"
        index="3"
      />
      <Footer />
    </Box>
  );
};

export default Index;
