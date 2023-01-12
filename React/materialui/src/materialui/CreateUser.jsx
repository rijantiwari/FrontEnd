import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const CreateUser = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const handleFirstname = ({ target: { value } }) => {
    setFirstName(value);
  };
  const handleLastname = ({ target: { value } }) => {
    setLastName(value);
  };
  return (
    <>
      <Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Firstname" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Lastname" variant="outlined" />
        </Grid>
        <Grid item>
          <Button>ADD</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CreateUser;
