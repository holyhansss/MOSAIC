import * as React from 'react';
import {Box, Tab, Container} from '@mui/material';
import {TabList, TabPanel, TabContext} from '@mui/lab';

//components
import ReportContents from '../components/Report/ReportContents';
import Winner from '../components/Report/Winner';

export default function ReportDetail({user}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <p />
      <TabContext value={value}>
        <Container maxWidth="md">
          <Box sx={{  borderColor: 'divider', position: "relative", left:"35%"}} >
            <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{justifyContent: 'center'}}>
              
              <Tab label="주간이슈" value="1" />
              <Tab label="Winner & Loser" value="2" />
            
            </TabList>
          </Box> 
        </Container>
        <p/>
        <TabPanel value="1"><ReportContents user={user}/></TabPanel>
        <TabPanel value="2"><Winner /></TabPanel>
      </TabContext>


    </div>

  );
}
