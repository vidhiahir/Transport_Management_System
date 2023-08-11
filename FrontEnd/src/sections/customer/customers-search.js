import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";
import { useCallback, useMemo, useState, useEffect } from "react";
import { Box, Stack, Typography, Button, Container, Unstable_Grid2 as Grid } from "@mui/material";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
export const CustomersSearch = (props) => {
  const { searchQuery } = props; // searchQuery is setDemo
  const [searchTerm, setSearchTerm] = useState("");
  searchQuery(searchTerm);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const router = useRouter();
  const pathname = usePathname();
  const addShipmentHandler = (event) => {
    router.push("/addShipment");
  };
  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" spacing={80}>
        <OutlinedInput
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          placeholder="Search by Name / Load No."
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon color="action" fontSize="small">
                <MagnifyingGlassIcon />
              </SvgIcon>
            </InputAdornment>
          }
          sx={{ maxWidth: 500 }}
        />

        <Button
          onClick={addShipmentHandler}
          // path="/addShipment"
          fullWidth
          startIcon={
            <SvgIcon fontSize="small">
              <PlusIcon />
            </SvgIcon>
          }
          variant="contained"
        >
          Add Shipment
        </Button>
      </Stack>
    </Card>
  );
};
