import { TextField } from "@mui/material";
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
      <TextField id="outlined-basic" label="Firstname" variant="outlined" />
      <TextField id="outlined-basic" label="Lastname" variant="outlined" />
      <Button> ADD </Button>
    </>
  );
};

export default CreateUser;
