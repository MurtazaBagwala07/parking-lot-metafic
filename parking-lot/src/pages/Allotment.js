import React, { useContext,useState } from 'react'
import { TextField,Button } from '@mui/material';
import { ParkingContext } from '../context/ParkingData';
import { useNavigate } from 'react-router';
import { Box } from '@mui/system';

const Allotment = () => {

  const {lot,setLot} = useContext(ParkingContext)
  const [error,setError] = useState(false)
  const navigate= useNavigate()
  const createParkingLot=()=>{
    if(lot.trim().length===0){
      setError(true)
    }else{
      setError(false)
      navigate('/parking-lot')
    }
  }
  
  return (
    <Box sx={{width: '100%',height:'40rem' ,display: 'flex',flexDirection:'column',justifyContent: 'center',alignItems: 'center' , gap:'2rem'}}>
    { error && <Box sx={{color:'red',fontWeight:'bold'}}>Enter Valid Number of Parking Slots</Box> }
    <TextField id="outlined-basic" label="lots" type='number' variant="outlined" 
      InputProps={{ inputProps: { min: 3, max: 100 } }}
      onChange={(e)=>setLot(e.target.value)}
      />
      <Button variant='outlined' onClick={()=>createParkingLot()}>Create a Parking Lot</Button>
    </Box>
  )
}

export default Allotment