import type { NextPage } from "next";
import Container from "../components/Container";
import { useGetAllUser } from "../hooks/useGetAllUser";
import Loading from "../components/Loading";
import {
  TableContainer,
  TableHead,
  Table,
  TableBody,
  TableRow,
  TableCell,
  ListItemIcon,
  Avatar,
  Button,
  Paper,
  Typography,
  // Box,
  // Modal,
  Grid,
  //Stack,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Orders: NextPage = () => {
  const { getAllUser, loadingUser } = useGetAllUser();
  debugger
  console.log("dataorder", getAllUser);

  return (

    <Container title="Orders">

      {loadingUser ? (
        <Loading />
      ) : <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Contact No</StyledTableCell>
                <StyledTableCell>IsValid</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getAllUser.map((user: any) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.userName}
                  </StyledTableCell>
                  <StyledTableCell>{user.email}</StyledTableCell>
                  <StyledTableCell>{user.contactNo}</StyledTableCell>
                  <StyledTableCell>{user.isValid === true ? <p>TRUE</p> : <p>FALSE</p>}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      }
    </Container >
  );
};

export default Orders;
