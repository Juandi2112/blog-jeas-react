import {
  Box,
  IconButton,
  useTheme,
  Typography,
  AppBar,
  Toolbar,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkmModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import MenuIcon from "@mui/icons-material/Menu";
import imag from "../../assets/imga";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={imag.img38} width="25px" />
          </Box>
          <Typography
            variant="h4"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: colors.grey[100],
              textDecoration: "none",
              marginLeft: "15px",
            }}
          >
            Juan Esteban Aristizábal S
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={colors.greenAccent[500]}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                component={Link}
                to="/"
                key="index"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/about"
                key="about"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Acerca de mí</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/interview"
                key="interview"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Entrevistas</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/tweets"
                key="tweets"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Consignas</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={imag.img38} width="22px" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,

              fontWeight: 700,
              color: colors.grey[100],
              textDecoration: "none",
            }}
          >
            Juan Esteban Aristizábal
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                gap: "15px",
                padding: "0 0 0 12px ",
              },
            }}
          >
            <Button
              component={Link}
              key="index"
              onClick={handleCloseNavMenu}
              to="/"
              sx={{
                my: 2,
                color: colors.grey[100],
                "&:hover": {
                  color: "#868dfb !important",
                  textDecoration: "underline 1.5px",
                },
                fontSize: "13px",
              }}
            >
              Inicio
            </Button>

            <Button
              component={Link}
              key="acerca de mí"
              onClick={handleCloseNavMenu}
              to="/about"
              sx={{
                my: 2,
                color: colors.grey[100],
                "&:hover": {
                  color: "#868dfb !important",
                  textDecoration: "underline 1.5px",
                },
                fontSize: "13px",
              }}
            >
              Acerca de mí
            </Button>

            <Button
              component={Link}
              key="entrevistas"
              onClick={handleCloseNavMenu}
              to="/interview"
              sx={{
                my: 2,
                color: colors.grey[100],

                "&:hover": {
                  color: "#868dfb !important",
                  textDecoration: "underline 1.5px",
                },
                fontSize: "13px",
              }}
            >
              Entrevistas
            </Button>

            <Button
              component={Link}
              key="Consignas"
              onClick={handleCloseNavMenu}
              to="/tweets"
              sx={{
                my: 2,
                color: colors.grey[100],

                "&:hover": {
                  color: "#868dfb !important",
                  textDecoration: "underline 1.5px",
                },
                fontSize: "13px",
              }}
            >
              Consignas
            </Button>
          </Box>
          <Box
            sx={{ flexGrow: 0 }}
            backgroundColor={colors.primary[900]}
            borderRadius="3px"
          >
            <IconButton
              onClick={colorMode.toggleColorMode}
              sx={{ "&:hover": { borderRadius: 0 } }}
            >
              {theme.palette.mode === "dark" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkmModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Topbar;
