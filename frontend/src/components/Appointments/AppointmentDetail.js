import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import AppointmentPage from './AppointmentPage';

const AppointmentDetail = () => {
  const { appointmentList } = useSelector((state) => state.appointments);
  return (
    <Box
      sx={{ flexGrow: 1 }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{
          height: '100vh',
          overflow: 'auto',
        }}
      >
        {appointmentList.map((appointment) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={appointment.id}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AppointmentPage
              reason={appointment.reason}
              date={appointment.date}
              time={appointment.time}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default AppointmentDetail;
