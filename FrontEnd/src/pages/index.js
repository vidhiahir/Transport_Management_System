import Head from "next/head";

import { useCallback, useMemo, useState, useEffect, useRef } from "react";
import { subDays, subHours } from "date-fns";
import axios, { AxiosResponse } from "axios";
import {
  Box,
  Stack,
  Typography,
  Button,
  SvgIcon,
  Container,
  Unstable_Grid2 as Grid,
  Tooltip,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTotalProfit2 } from "src/sections/overview/overview-total-profit2";
import { OverviewTotalProfit3 } from "src/sections/overview/overview-total-profit3";
import { OverviewTotalProfit4 } from "src/sections/overview/overview-total-profit4";
import { OverviewTotalProfit5 } from "src/sections/overview/overview-total-profit5";
import { useRouter } from "next/router";

import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import { CustomersTable } from "src/sections/customer/customers-table";
import { applyPagination } from "src/utils/apply-pagination";
import { useSelection } from "src/hooks/use-selection";
import { CustomersSearch } from "src/sections/customer/customers-search";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { sendError } from "next/dist/server/api-utils";

var userName = "none";
const Page = () => {
  const limit = 10000;
  const [data, setData] = useState([]);
  const [elem, setElem] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [demo, setDemo] = useState("");
  const [sCount, setSCount] = useState([0, 0, 0, 0, 0]);
  const [chartSeries, setChartSeries] = useState([]);
  const [labels, setLabels] = useState([]);
  const targetRef = useRef(null);
  const router = useRouter();
  userName = router.query.userName;
  // fetched username but cant use it in the layout component
  // not working
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3003/shipments");
      const jsonData = await response.data;

      setData(jsonData);

      const counts = await axios.get("http://localhost:3003/shipmentCounts");
      const countsData = await counts.data;
      // console.log(counts.data);
      setSCount(counts.data);
      setChartSeries([counts.data[1], counts.data[2], counts.data[3], counts.data[4]]);
    } catch (error) {
      console.error(error);
    }
  };
  const [toggleState, setToggleState] = useState([true, false, false, false, false]);

  useEffect(() => {
    fetchData();
  }, []);
  const [showShipments, setShowShipments] = useState("booked");
  const handleClick1 = () => {
    setShowShipments("booked");
    setToggleState([1, 0, 0, 0, 0]);
  };
  const handleClick2 = () => {
    setShowShipments("dispatched");
    setToggleState([0, 1, 0, 0, 0]);
  };
  const handleClick3 = () => {
    setShowShipments("in transit");
    setToggleState([0, 0, 1, 0, 0]);
  };
  const handleClick4 = () => {
    setShowShipments("out for delivery");
    setToggleState([0, 0, 0, 1, 0]);
  };
  const handleClick5 = () => {
    setShowShipments("delivered");
    setToggleState([0, 0, 0, 0, 1]);
  };

  const handleClick = () => {
    setToggleState(!toggleState);
  };

  return (
    <>
      <Head>
        <title>Overview | SAAS</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h3" component="h3">
            Current Credit Limit : ${limit}
          </Typography>
          <br></br>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={2.4}>
              <Button onClick={handleClick1} variant={toggleState[0] ? "outlined" : "container"}>
                <OverviewTotalProfit sx={{ height: "100%" }} value={sCount[0]} />
              </Button>
            </Grid>
            <Grid xs={12} sm={6} lg={2.4}>
              <Button onClick={handleClick2} variant={toggleState[1] ? "outlined" : "container"}>
                <OverviewTotalProfit2 sx={{ height: "100%" }} value={sCount[1]} />
              </Button>
            </Grid>
            <Grid xs={12} sm={6} lg={2.4}>
              <Button onClick={handleClick3} variant={toggleState[2] ? "outlined" : "container"}>
                <OverviewTotalProfit3 sx={{ height: "100%" }} value={sCount[2]} />
              </Button>
            </Grid>
            <Grid xs={12} sm={6} lg={2.4}>
              <Button onClick={handleClick4} variant={toggleState[3] ? "outlined" : "container"}>
                <OverviewTotalProfit4 sx={{ height: "100%" }} value={sCount[3]} />
              </Button>
            </Grid>
            <Grid xs={12} sm={6} lg={2.4}>
              <Button onClick={handleClick5} variant={toggleState[4] ? "outlined" : "container"}>
                <OverviewTotalProfit5 sx={{ height: "100%" }} value={sCount[4]} />
              </Button>
            </Grid>
            <Grid xs={12} lg={8}>
              <OverviewSales
                chartSeries={[
                  {
                    name: "This year",
                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                  },
                  {
                    name: "Last year",
                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewTraffic
                chartSeries={chartSeries}
                labels={["Dispatched", "In Transit", "Out for delivery", "Delivered"]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Container maxWidth="xl">
              <Stack spacing={3}>
                <CustomersSearch searchQuery={setDemo} />

                <OverviewLatestOrders
                  filter={showShipments}
                  orders={data}
                  searchQuery={demo}
                  sx={{ height: "100%" }}
                />
              </Stack>
            </Container>

            {/* <Grid xs={12} md={6} lg={4}>
              <OverviewTraffic
                chartSeries={[63, 15, 22]}
                labels={["Desktop", "Tablet", "Phone"]}
                sx={{ height: "100%" }}
              />
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout userName={userName}>{page}</DashboardLayout>;

export default Page;
