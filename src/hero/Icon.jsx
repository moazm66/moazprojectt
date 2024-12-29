import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
const Icon = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default Icon;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subTitle }) => {
  return (
    <Box
      sx={{
        bgcolor: "#151515",
        width: 250,
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        color: "white",

        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)")
          ? "center"
          : "center",
      }}
    >
      {icon}

      <Box>
        <Typography sx={{ fontWeight: 300 }} variant="body1">
          {title}
        </Typography>
        <Typography sx={{ fontWeight: 300, color: "white" }} variant="body1">
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
