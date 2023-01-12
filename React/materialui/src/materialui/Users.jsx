import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useEffect } from "react";
import { CircularProgress, Pagination } from "@mui/material";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loadingusers, setLoadingUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const getUserData = () => {
    setLoadingUsers(true);
    fetch("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoadingUsers(false);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);
  console.log(users);
  const handleChangePage = (event, newPage) => {
    console.log(newPage, "new page");
    setPage(newPage);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sn.</TableCell>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
            </TableRow>
          </TableHead>
          {loadingusers ? (
            <CircularProgress />
          ) : (
            <TableBody>
              {users
                .slice(page * rowsPerPage - rowsPerPage, rowsPerPage * page)
                .map((user) => {
                  return (
                    <TableRow
                      key={user.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {user.id}
                      </TableCell>
                      <TableCell>{user.firstname}</TableCell>
                      <TableCell>{user.lastname}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          )}
        </Table>
      </TableContainer>

      <Pagination
        count={Math.ceil(users?.length / rowsPerPage)}
        onChange={handleChangePage}
        color="primary"
      />
    </>
  );
}
