import React, { useContext, useEffect } from 'react'
import { Box } from '@mui/system';
import {useLocation} from 'react-router-dom';
import { Button } from '@mui/material';
import { ParkingContext } from '../context/ParkingData';

const ParkingSpot = () => {

  const location = useLocation();
  const {deAllocateSpot} = useContext(ParkingContext)
  console.log(location.state)

  const today = new Date(location.state.timeParked);
  const hours = today.getHours();
  let mins = today.getMinutes() + 1; // Months start at 0!
  let secs = today.getSeconds();


  const formattedToday = hours + ':' + mins + ':' + secs;

  // const currentTime = Date.now()

  // const duration = currentTime-location.state.timeParked/1000




  return (
    <Box sx={{display:'flex',flexDirection:'column',justifyContent: 'center',alignItems: 'center',gap:'2rem', padding:'2rem'}}>
      <Box>Parking Spot {location.state.id}</Box>
      {location.state.parked ? <Box sx={{display:'flex',flexDirection:'column',justifyContent: 'center',alignItems: 'start', border:'2px solid blue', padding:'2rem',fontSize:'1.5rem'}}>
        <Box>Car Registration No : {location.state.carReg}</Box>
        <Box>Time Of Parking : {formattedToday}</Box>
        <Box>Duration : </Box>
        <Box>Cost : {location.state.cost}</Box>
      </Box> : 'No car Parked at this spot'}
      {location.state.parked && <Button  onClick={()=>deAllocateSpot(location.state.id)}>Make Payment</Button>}
    </Box>
  )
}

export default ParkingSpot
