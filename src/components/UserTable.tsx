import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { getUserInitials, formatUserName } from "../utils/utils";

const UserTable = ({ users }: any) => {
  const handleEdit = (user: any) => {
    alert("Editing user: " + formatUserName(user)); // ❗ formatUserName is broken
  };

  const handleDelete = (id: any) => {
    console.log("Delete user with id: " + id);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Initials</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Zip Code</TableCell>
            <TableCell>Website</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user: any) => (
            <TableRow key={user.uuid}>
              {" "}
              {/* ❗ uuid doesn't exist */}
              <TableCell>{formatUserName(user)}</TableCell>{" "}
              {/* ❗ broken formatting */}
              <TableCell>{getUserInitials(user.name)}</TableCell>{" "}
              {/* ❗ assumes full name */}
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>{" "}
              {/* ❗ should be phone */}
              <TableCell>{user.location?.city}</TableCell>{" "}
              {/* ❗ should be address.city */}
              <TableCell>{user.companyName}</TableCell>{" "}
              {/* ❗ should be company.name */}
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.address.zip}</TableCell>{" "}
              {/* ❗ should be zipcode */}
              <TableCell>{user.web}</TableCell> {/* ❗ should be website */}
              <TableCell>
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(user.uuid)} // ❗ uuid again
                  >
                    Delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
