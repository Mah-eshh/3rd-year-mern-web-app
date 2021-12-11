import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: "#98AFC7",
  },
  blogTopic: {
    fontWeight: 50,
    fontSize: 20,
    fontFamily: "Trebuchet MS",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },

  blogForm: {
    backgroundColor: "#77BFC7",
  },
  titleInput: {
    backgroundColor: "#D3D3D3",
  },
  blogWordsInput: {
    backgroundColor: "#D3D3D3",
  },
  fileInput: {
    backgroundColor: "#C6AEC7",
  },

  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#2B65EC",
    fontWeight: 600,
    fontSize: 15,
    fontFamily: "Microsoft YaHei",
  },
  buttonClear: {
    backgroundColor: "#FF1493",
    fontWeight: 700,
    fontSize: 15,
  },
}));
