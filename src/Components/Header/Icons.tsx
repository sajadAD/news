import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: "#fffbfb",
  "&:hover": {
    color: "#f44336",
    opacity: 1,
  },
}));

interface StyledTabProps {
  label: any;
}

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ bgcolor: "transparent" }}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label={<TwitterIcon/>} />
          <AntTab label={<FacebookIcon/>} />
          <AntTab label={<InstagramIcon/>} />
        </AntTabs>
      </Box>
    </Box>
  );
}