import React from "react";
import { makeStyles } from "@material-ui/core";
export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: "0",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    border: "1px solid red",
    transition: "all 0.5s ease",
    color: "white",
    hover: {
      "&:hover": {
        backgroundColor: "#e9f5f5",
        transform: "scale(1.1)",
      },
    },
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});
