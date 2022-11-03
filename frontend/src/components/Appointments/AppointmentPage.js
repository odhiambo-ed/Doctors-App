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
  reason, date, photo,
}) => {
  const theDate = new Date(Date.parse(date));
  const newDate = theDate.toLocaleString();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={photo}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            textAlign: 'center',
          }}
        >
          {reason}
        </Typography>
      </CardContent>
      <CardActions style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Button size="small">{newDate}</Button>
      </CardActions>
    </Card>
  );
};
AppointmentPage.propTypes = {
  reason: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
export default AppointmentPage;
