/* eslint-disable camelcase */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const AppointmentPage = ({
  reason, date, time,
}) => {
  const newDate = new Date(date).toLocaleDateString();
  const splitReason = reason.split('+');
  const newChange = splitReason.shift();
  const photoImg = splitReason.join('');
  const nextChange = newChange.split('*');
  const reasoned = nextChange.shift();
  const doctorName = nextChange.join('');
  const changed = new Date(time).toLocaleTimeString();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={photoImg}
        alt="doctor image"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          style={{
            textAlign: 'center',
          }}
        >
          You have an appointment with Dr.
          {' '}
          {doctorName}
        </Typography>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          style={{
            textAlign: 'center',
          }}
        >
          Reason:
          {' '}
          {reasoned}
        </Typography>
      </CardContent>
      <CardActions style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Button size="small">
          Date:
          {newDate}
        </Button>
        <Button size="small">
          Time:
          {changed}
        </Button>
      </CardActions>
    </Card>
  );
};
AppointmentPage.propTypes = {
  reason: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default AppointmentPage;
