import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", m: 2 }}>
      <Typography variant="body1" color="text.secondary">
        Made with ❤️ by{" Xnor "}
        <br />
        copyright © {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

export default Footer;
