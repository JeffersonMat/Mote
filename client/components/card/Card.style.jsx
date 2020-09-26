import { makeStyles } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"


export const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    // height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "50px auto",
    maxWidth: 600,
  },
}))
