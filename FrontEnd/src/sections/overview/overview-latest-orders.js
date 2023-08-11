import { format } from "date-fns";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";
import { useCallback, useMemo, useState, useEffect } from "react";

const statusMap = {
  "in transit": "primary",
  dispatched: "warning",
  "out for delivery": "error",
  delivered: "success",
  refunded: "error",
};
// "primary", "secondary", "error", "info", "warning", "success";
export const OverviewLatestOrders = (props) => {
  const { filter, orders = [], sx, searchQuery } = props;
  const orderElements = [];
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    if (
      order.load.toString().includes(searchQuery) ||
      order.shipper.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.consignee.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.carrier.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery.length === 0
    ) {
      if (filter == "booked" || order.status.toLowerCase().includes(filter)) {
        // order.o_state = 8;
        let a = order.o_state + ", " + order.o_country;
        let b = order.r_state + ", " + order.r_country;
        orderElements.push(
          <TableRow hover key={order.load}>
            <TableCell>{order.load}</TableCell>
            <TableCell>{order.date.toString().slice(0, 10)}</TableCell>
            <Tooltip title={a} arrow followCursor>
              <TableCell>{order.shipper}</TableCell>
            </Tooltip>
            <Tooltip title={b} arrow followCursor>
              <TableCell>{order.consignee}</TableCell>
            </Tooltip>
            <TableCell>{order.weight}</TableCell>
            <TableCell>{order.carrier}</TableCell>
            <TableCell>
              <SeverityPill color={statusMap[order.status.toLowerCase()]}>
                {order.status}
              </SeverityPill>
            </TableCell>
          </TableRow>
        );
      }
    }
  }
  // Render the order elements in your component

  return (
    <Card sx={sx}>
      <CardHeader title="All shipments" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Load No</TableCell>
                <TableCell>Ship date</TableCell>
                <TableCell sortDirection="desc">Shipper</TableCell>
                <TableCell>Consignee</TableCell>
                <TableCell>Weight</TableCell>
                <TableCell>Carrier</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{orderElements}</TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};
