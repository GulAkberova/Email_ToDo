import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { inputContext } from "../context/InputContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { NavLink, useParams } from "react-router-dom";
function View() {
  const storedAllEmail = localStorage.getItem("allEmail");
  const parsedAllEmail = JSON.parse(storedAllEmail);
  console.log(parsedAllEmail, "pars");

  const [view, setView] = useState({});
  const { id } = useParams();
  //   console.log(id, "id");

  useEffect(() => {
    let viewdetail = parsedAllEmail.filter((element) => element.id == id);
    setView(viewdetail[0]); // `setView`-ə yeni dəyəri təyin etmək
  }, []);
  console.log(view.name);
  return (
    <>
      <form>
        <TextField disabled value={view.name} fullWidth margin="normal" />
        <TextField disabled value={view.template} fullWidth margin="normal" />
        <TextField disabled value={view.to} fullWidth margin="normal" />
        <NavLink to={"/"}>
          {" "}
          <Button>Go Back</Button>
        </NavLink>

        {/* <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="multi-select-options">Select Options</InputLabel>
          <Select
            multiple
            value={to}
            onChange={(e) => setTo(e.target.value)}
            input={<Input id="multi-select-options" />}
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button> */}
      </form>
    </>
  );
}

export default View;
