import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Jobs from '../pages/admin/Jobs';
// import JobApplications from '../pages/admin/JobApplication';
import JobListing from '../pages/User/JobListing';
import { TextField, Typography } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import { debounce } from 'lodash';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  // const [searchValue, setSearchValue] = React.useState('');

  // const handleSearchChange = debounce((event) => {
  //   setSearchValue(event.target.value);
  // }, 300);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
          {/* <Typography>
            <TextField
              label="Search Jobs"
              variant="outlined"
              fullWidth
              // onChange={handleSearchChange}
            />
          </Typography> */}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ViewJobs() {
  const [value, setValue] = React.useState(0);
  const premiumJobType = "premium";
  const freeJobType = "free";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Premium ⭐" {...a11yProps(0)} />
          <Tab label="Free" {...a11yProps(1)} />
        </Tabs>
        {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
          {value === 1 && (
            <TextField
              label="Search Jobs"
              variant="outlined"
              size="small"
              onChange={handleChange}
            />
          )}
        </Box> */}
      </Box>
      <CustomTabPanel value={value} index={0}>
        <JobListing jobType={premiumJobType} />

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <JobListing jobType={freeJobType} />
        {/* <JobApplications/> */}
      </CustomTabPanel>
    </Box>
  );
}
