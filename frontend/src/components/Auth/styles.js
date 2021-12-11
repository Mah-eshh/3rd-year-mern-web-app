import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(-3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundSize: "cover",
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXEvYZCjsBshECJhifAzklgOBmYm-leC2kT-Wl3EsJEP5ghhFWEeAmkG_i_ywwYcat6A&usqp=CAU)",
  },

  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    fontFamily: "Comic Sans MS",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2B65EC",
    height: "40px",
    width: "330px",
    fontSize: "15px",
    color: "#ffff",
    fontFamily: "Verdana",
  },
  googleButton: {
    marginBottom: theme.spacing(5),
    backgroundColor: "#1669F2",
    fontSize: "15px",
    color: "#ffff",
    fontFamily: "Verdana",
  },
  signInUpBtn: {
    color: "#ffff",
    fontSize: "13px",
    fontFamily: "Verdana",
  },
}));
