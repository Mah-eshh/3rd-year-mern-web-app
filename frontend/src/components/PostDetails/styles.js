import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "10px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "280px",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "10px",
    margin: "10px",
    flex: 1,
    backgroundColor: "#A0CFEC",
    backgroundImage:
      "url(https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png)",
    backgroundSize: "cover",
  },
  imageSection: {
    marginLeft: "12px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    marginTop: "10px",
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
    height: "39vh",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  commentsInnerContainer: {
    height: "180px",
    overflowY: "auto",
    marginRight: "40px",
  },
  comment: {
    backgroundColor: "#E2E4E1",
    width: "350px",
    height: "100px",
  },
  commentBtn: {
    backgroundColor: "blue",
    width: "350px",
  },
}));
