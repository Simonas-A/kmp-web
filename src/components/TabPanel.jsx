import TabPanelProps from "./TabPanelProps.interface";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel (props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        // hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >

          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
      </div>
    );
  }

  export default TabPanel