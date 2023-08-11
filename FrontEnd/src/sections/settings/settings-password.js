import { useCallback, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
} from "@mui/material";
import { maxHeaderSize } from "http";
import { maxHeight } from "@mui/system";

export const SettingsPassword = () => {
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader title="Shipper Name" />

        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField
              fullWidth
              label="Name"
              name="confirm"
              onChange={handleChange}
              type="text"
              value={values.confirm}
            />
          </Stack>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-end" }}></CardActions>
        <CardHeader title="Shipper Location" />

        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField
              fullWidth
              label="Country"
              name="confirm"
              onChange={handleChange}
              type="text"
              value={values.confirm}
            />
            <TextField
              fullWidth
              label="state"
              name="password"
              onChange={handleChange}
              type="text"
              value={values.password}
            />
            <TextField
              fullWidth
              label="Postal Code"
              name="password"
              onChange={handleChange}
              type="text"
              value={values.password}
            />
          </Stack>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Update</Button>
        </CardActions>
      </Card>
      <Divider />
      <br></br>
      <Card>
        <CardHeader title="Consignee Name" />

        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField
              fullWidth
              label="Name"
              name="confirm"
              onChange={handleChange}
              type="text"
              value={values.confirm}
            />
          </Stack>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-end" }}></CardActions>
        <CardHeader title="Consignee Location" />

        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField
              fullWidth
              label="Country"
              name="confirm"
              onChange={handleChange}
              type="text"
              value={values.confirm}
            />
            <TextField
              fullWidth
              label="state"
              name="password"
              onChange={handleChange}
              type="text"
              value={values.password}
            />
            <TextField
              fullWidth
              label="Postal Code"
              name="password"
              onChange={handleChange}
              type="text"
              value={values.password}
            />
          </Stack>
        </CardContent>

        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Update</Button>
        </CardActions>
      </Card>
    </form>
  );
};
