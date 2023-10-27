import { Box, Button, Container, Typography } from '@mui/material';
import './Splash.css';
import { useRecoilValue } from 'recoil';
import { ThemeName } from '../../theme';

const Splash = () => {
  const theme = useRecoilValue(ThemeName);
  return (
    <main className="hero-section">
      <Container sx={{ width: "60%", alignSelf: "left", margin: "0"}} className="hero-text">
        <Typography sx={{ mb: 1 }} variant="h1" align="left" className="hero-header">
          Headline text
        </Typography>

        <Typography sx={{ mb: 4, overflow: "visible", fontSize: "2rem"}} variant="h2" className="hero-sub">
          Subheader text
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            gridGap: "1rem",
          }}
          className="hero-buttons"
        >
          <Button
            variant={theme === "dark" ? "outlined" : "contained"}
            sx={{ width: "100%", maxWidth: "30rem" }}
            href={`/register`}
          >
            Get Started
          </Button>
          <Button
            variant={theme === "dark" ? "outlined" : "contained"}
            sx={{ width: "100%", maxWidth: "30rem" }}
            href={`/about`}
          >
            About
          </Button>
        </Box>
      </Container>
      <Container sx={{ width: "30%"}}>
          <Typography sx={{ mb: 2}} variant="h1" align="center">
            image goes here
          </Typography>
      </Container>
    </main>
  )
}

export default Splash;