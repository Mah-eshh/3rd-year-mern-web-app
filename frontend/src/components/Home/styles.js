import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 5,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    backgroundColor: "#98AFC7",
  },
  pagination: {
    borderRadius: 50,
    padding: "16px",
    marginLeft: "780px",
    marginBottom: "10px",
    backgroundImage: "url(https://wallpaperaccess.com/full/1567834.jpg)",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
    // backgroundColor: "#372580",
  },
  inputBar: {
    backgroundColor: "#F08080",
  },
  searchMemo: {
    backgroundColor: "#D3D3D3",
  },

  searchTag: {
    backgroundColor: "#D3D3D3",
  },

  searchButton: {
    backgroundColor: "#157DEC",
    fontFamily: "Malgun Gothic",
    fontWeight: 900,
    fontSize: 15,
  },
}));
