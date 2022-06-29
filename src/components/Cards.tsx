import { CardActions, CardMedia, IconButton, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Cards(props: any) {
  let year = () => {
    return new Date().getFullYear() - props.year;
  };
  return (
    <Card sx={{ width: 300, m: 4 }} variant="outlined">
      <CardMedia
        component="img"
        alt={props.title}
        image={props.image}
        height="140"
      />
      <CardContent>
        <Typography py={0.3} variant="h4">
          {props.title}
        </Typography>
        <Typography py={0.3} variant="subtitle1" color="text.secondary">
          {year()} year before.
        </Typography>
        <Typography py={0.3} variant="body1">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Love it!">
          <IconButton aria-label="Love" color="warning">
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Button variant="contained" href={props.link}>
          Go Wikipedia
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
