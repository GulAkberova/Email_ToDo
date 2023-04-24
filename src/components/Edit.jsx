import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
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
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
const Edit = ({ setOpen }) => {
  let {
    name,
    setName,
    template,
    setTemplate,
    to,
    setTo,
    check,
    setCheck,
    allEmail,
    setAllEmail,
  } = useContext(inputContext);
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  const { id } = useParams();
  const storedAllEmail = localStorage.getItem("allEmail");
  const parsedAllEmail = JSON.parse(storedAllEmail);
  console.log(parsedAllEmail, "pars");

  const [view, setView] = useState({});
  useEffect(() => {
    let viewdetail = parsedAllEmail.filter((element) => element.id == id);
    setView(viewdetail[0]); // `setView`-ə yeni dəyəri təyin etmək
  }, []);
  console.log(view.name);

  const handleSubmit = (e) => {
    if (!name || !template || to.length === 0) {
      // Eğer gerekli alanlardan biri boş ise, kullanıcıya bir hata mesajı gösterebilirsiniz.
      alert("Lütfen tüm alanları doldurun!");
      return;
    } else {
      setOpen(false);
      Swal.fire({
        title: "Elave etmek  istədiyinizdən əminsinizmi ?",
        text: "Bu əməliyyat geri alına bilməz.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Bəli",
        cancelButtonText: "Xeyr",
      }).then((result) => {
        let newId = uuidv4();
        if (result.isConfirmed) {
          e.preventDefault();
          let newEmail = {
            id: newId,
            check: true,
            name: name,
            template: template,
            to: to,
          };
          setAllEmail([...allEmail, newEmail]);
          localStorage.setItem(
            "allEmail",
            JSON.stringify([...allEmail, newEmail])
          );

          setName("");
          setTemplate(" ");
          setTo([]);
          console.log(allEmail);
          Swal.fire("Elave olundu", "Mail elave olundu", "success");
        } else {
          e.preventDefault();
          let newEmail = {
            id: newId,
            check: false,
            name: name,
            template: template,
            to: to,
          };
          setAllEmail([...allEmail, newEmail]);
          localStorage.setItem(
            "allEmail",
            JSON.stringify([...allEmail, newEmail])
          );
          setName("");
          setTemplate(" ");
          setTo([]);
          console.log(allEmail);
        }
      });
    }
  };
  console.log(name, "name");
  return (
    <form>
      {/* <TextField
        label="Name"
        value={view.name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="select-option">Select Option</InputLabel>
        <Select
          value={view.template}
          onChange={(e) => setTemplate(e.target.value)}
          inputProps={{ id: "select-option" }}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="multi-select-options">Select Options</InputLabel>
        <Select
          multiple
          value={view.to}
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
      </FormControl> */}

      {/* <Button
        variant="contained"
        color="primary"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </Button> */}
    </form>
  );
};

export default Edit;
