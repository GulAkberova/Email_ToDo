import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { inputContext } from "../context/InputContext";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

// function createData(name, type, count, createdby, date, action) {
//   return { name, type, count, createdby, date, action };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];
function Campaign() {
  const storedAllEmail = localStorage.getItem("allEmail");
  const parsedAllEmail = JSON.parse(storedAllEmail);
  console.log(parsedAllEmail, "pars");

  let { allEmail, setAllEmail } = useContext(inputContext);

  const handleDraft = (item) => {
    console.log("dsd");
    Swal.fire({
      title: "Silmek istədiyinizdən əminsinizmi ?",
      text: "Bu əməliyyat geri alına bilməz.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr",
    }).then((result) => {
      if (result.isConfirmed) {
        let filteredAllEmail = parsedAllEmail.filter(
          (element) => element.id !== item
        );
        localStorage.setItem("allEmail", JSON.stringify(filteredAllEmail));
        setAllEmail(filteredAllEmail);
        Swal.fire("Silindi", "Element silindi", "success");
      }
    });
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Type</TableCell>
              {/* <TableCell align="right">Count</TableCell>
              <TableCell align="right">Created by</TableCell>
              <TableCell align="right">Date</TableCell> */}
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parsedAllEmail.map((row, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.check ? (
                    ""
                  ) : (
                    <Button onClick={() => handleDraft(row.id)}>Draft</Button>
                  )}{" "}
                  {row.name}
                </TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">
                  {row.check ? (
                    <Button>
                      <NavLink to={"/view/" + row.id}>View</NavLink>{" "}
                    </Button>
                  ) : (
                    <Button>
                      {" "}
                      <NavLink to={"/edit/" + row.id}>Edit</NavLink>{" "}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Campaign;
