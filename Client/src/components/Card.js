import {
  Card,
  CardContent,
  // CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const InfoCard = (props) => {
  return (
    <Card sx={{ maxWidth: 300, minWidth: 250 }} raised>
      <CardActionArea>
        {/* <CardMedia component="img" height="140" image={props.image} /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={props.url} style={{ textDecoration: "none" }}>
          <Button size="small" color="primary">
            {props.btnText}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
