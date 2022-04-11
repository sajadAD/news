import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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
    color: "#fff",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#f44336",
    fontWeight: 800,
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
      <Box>
        <AntTabs variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="ABOUT" />
          <AntTab label="CONNECT" />
          <AntTab label="RESOURCES" />
          <AntTab label="GIVE" />
          <AntTab label="CONTACT" />
        </AntTabs>
      </Box>
    </Box>
  );
}