import React from "react";
import { useDispatch } from "react-redux";
import { setSnackbar } from "./redux/reducer";
import { Button } from "@material-ui/core";
import Snackbar from "./Snackbar";

const Engineer = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          dispatch(
            setSnackbar(
              true,
              "success",
              "Success!"
            )
          )
        }
      >
        Success message
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          dispatch(
            setSnackbar(
              true,
              "error",
              "There is an error"
            )
          )
        }
      >
        Error message
      </Button>
      <Snackbar/>
    </>
  );
};

export default Engineer;