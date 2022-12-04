import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    id: "890875",
    name: "John Snow",
    interactionId: "123456",
  },
  {
    id: "890775",
    name: "John summer",
    interactionId: "123456",
  },
  {
    id: "890575",
    name: "John spring",
    interactionId: "123456",
  },
  {
    id: "891575",
    name: "Ron Mark",
    interactionId: "123456",
  },
  {
    id: "791575",
    name: "Ron Roger",
    interactionId: "123456",
  },
  {
    id: "791565",
    name: "John Roger",
    interactionId: "123456",
  },
  {
    id: "791564",
    name: "King Roger",
    interactionId: "123456",
  },
  {
    id: "691565",
    name: "Mark Roger",
    interactionId: "123456",
  },
  {
    id: "691565",
    name: "Rock jojo",
    interactionId: "123456",
  },
];

function DataTable() {
  const navigate = useNavigate();

  const navigateToCertificate = name => {
    navigate(`/certificate/${name.replaceAll(" ", "_")}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Candidate ID</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">Interaction ID/Response&nbsp;</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">Certificate&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.interactionId}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  onClick={() => navigateToCertificate(row.name.replaceAll(" ", "_"))}
                >
                  View Certificate
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { DataTable };
