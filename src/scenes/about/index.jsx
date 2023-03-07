import { Box, Typography } from "@mui/material";
import imag from "../../assets/imga";
import CoverImage from "../../components/CoverImage";
import Footer from "../../components/Footer";
import SeparatorBar from "../../components/SeparatorBar";
import PdfViewer from "../../components/PdfViewer";

const TextFl = () => {
  return (
    <Box mt="2rem" mb="2rem">
      <Typography
        variant="h4"
        paragraph
        justifyContent="center"
        textAlign="justify"
        sx={{ width: "80%", mx: "auto" }}
      >
        Investigador en movilidad urbana de la Universidad Nacional de Colombia.
        Estudiante de Maestría en Ingeniería - Infraestructura y Sistemas de
        Transporte. Ingeniero civil y a espera de grado como Especialista en
        Vías y Transporte (plan de estudios finalizado).
      </Typography>
      <Typography
        variant="h4"
        paragraph
        justifyContent="center"
        textAlign="justify"
        sx={{ width: "80%", mx: "auto" }}
      >
        Estudio las ciudades mediante la investigación científica, aplicando
        modelación del transporte y ciencia de datos espaciales.
      </Typography>
      <Typography
        variant="h4"
        justifyContent="center"
        textAlign="justify"
        sx={{ width: "80%", mx: "auto" }}
      >
        Tengo conocimiento investigativo, técnico y ciudadano en temas de
        movilidad y planificación urbana. He trabajado en estudios y diseños de
        infraestructura urbana del transporte. También he trabajado en el sector
        público en materia de movilidad y transporte. Actualmente tengo un
        artículo científico publicado en una revista internacional indexada y me
        encuentro trabajando en otras investigaciones.
      </Typography>
    </Box>
  );
};

const About = () => {
  return (
    <Box>
      <CoverImage title="Acerca de mí" image={imag.img7} />
      <TextFl />
      <SeparatorBar title="Hoja de vida" />
      <PdfViewer />
      <Footer />
    </Box>
  );
};

export default About;
