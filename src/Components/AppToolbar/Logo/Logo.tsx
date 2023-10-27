import { Typography, TypographyProps } from "@mui/material";

export function Logo(props: TypographyProps): JSX.Element {
  const { sx, ...other } = props;

  return (
    <Typography
      sx={{
        ...sx,
        display: "flex",
        alignItems: "center",
        fontSize: "1.5rem",
        fontWeight: 500,
        fontFamily: "Poppins",
      }}
      variant="h2"
      {...other}
    >
      Turing Tracker
    </Typography>
  );
}

export default Logo;