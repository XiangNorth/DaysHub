import { Box, Paper, Typography } from "@mui/material";

function Header() {
  return (
    <Box sx={{ textAlign: "center", my: 10, p: 0 }}>
      <Typography variant="h1">
        <span style={{ color: "red" }}>Days</span>Hub
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        Learn about festival, holidays & celebration.
      </Typography>
      <Paper
        sx={{
          p: 3,
          mt: 3,
          width: 1 / 2,
          textAlign: "center",
          display: "inline-block",
        }}
        variant="outlined"
      >
        <Typography
          variant="body1"
          sx={{ textAlign: "center", display: "inline-block" }}
        >
          📫 Contact to me:{" "}
          <a href="mailto:i@xiangnorth.com">i@xiangnorth.com</a>.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Header;
