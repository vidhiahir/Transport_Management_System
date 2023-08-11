import PropTypes from "prop-types";
import ComputerDesktopIcon from "@heroicons/react/24/solid/ComputerDesktopIcon";
import DeviceTabletIcon from "@heroicons/react/24/solid/DeviceTabletIcon";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Chart } from "src/components/chart";
import { padding } from "@mui/system";

const useChartOptions = (labels) => {
  const theme = useTheme();

  return {
    chart: {
      background: "transparent",
    },
    colors: [
      theme.palette.warning.main,
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.success.main,
    ],
    dataLabels: {
      enabled: false,
    },
    labels,
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    states: {
      active: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      fillSeriesColor: false,
    },
  };
};

const iconMap = {
  Desktop: (
    <SvgIcon>
      <ComputerDesktopIcon />
    </SvgIcon>
  ),
  Tablet: (
    <SvgIcon>
      <DeviceTabletIcon />
    </SvgIcon>
  ),
  Phone: (
    <SvgIcon>
      <PhoneIcon />
    </SvgIcon>
  ),
};

export const OverviewTraffic = (props) => {
  const theme = useTheme();
  const { chartSeries, labels, sx } = props;
  // const chartSeries = [1, 2, 3, 4];
  // const labels = ["abc", "lol", "temp", "demo"];
  const chartOptions = useChartOptions(labels);
  // console.log(chartSeries);
  return (
    <Card sx={sx}>
      <CardHeader title="Shipment count" />
      <CardContent>
        <Chart height={300} options={chartOptions} series={chartSeries} type="donut" width="100%" />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          {/* {chartSeries.map((item, index) => { */}
          {/* const label = labels[index]; return ( */}
          <Box
            // key={label}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* {iconMap[label]} */}
            <Box>
              <Typography
                color={theme.palette.warning.main}
                sx={{ my: 1, justifyContent: "center", padding: 5, fontWeight: 600 }}
                variant="h7"
              >
                Dispatched
              </Typography>
              <Typography
                color={theme.palette.primary.main}
                sx={{ my: 1, justifyContent: "center", padding: 5, fontWeight: 600 }}
                variant="h7"
              >
                In Transit
              </Typography>
            </Box>
            <br></br>
            <Box>
              <Typography
                color={theme.palette.info.main}
                sx={{ my: 1, justifyContent: "center", padding: 5, fontWeight: 600 }}
                variant="h7"
              >
                Out for delivery
              </Typography>
              <Typography
                color={theme.palette.success.main}
                sx={{ my: 1, justifyContent: "center", padding: 5, fontWeight: 600 }}
                variant="h7"
              >
                Delivered
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTraffic.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
