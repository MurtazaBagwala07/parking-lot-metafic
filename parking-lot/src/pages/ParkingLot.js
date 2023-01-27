import React,{useContext,useState} from 'react'
import Lot from '../components/Lot'
import { ParkingContext } from '../context/ParkingData'
import { Box } from '@mui/system';
import { TextField,Button } from '@mui/material';

const ParkingLot = () => {
  const {parkingLots,allocateSpot} = useContext(ParkingContext)
  const [error,setError] = useState(false)
  const [car,setCar] = useState({
    regNo:'',
    time:''
  })

  const handleAllocation =()=>{
    if(car.regNo.trim().length==0){
      setError(true)
    }else{
      setError(false)
      allocateSpot(car)
      setCar({
        regNo:'',
        time:''
      })
    }
    
  }

  return (
    <Box sx={{display:'flex' , flexDirection:'column', width:"96vw"  , justifyContent:'center',padding:'1rem' ,alignItems: 'center' , gap:'2rem'}}>
      <Box sx={{fontSize:'2rem' , fontWeight:'bold'}}>Parking Lot</Box>
      <Box sx={{display:'flex' , flexDirection:'row' , alignItems: 'center', justifyContent:'center'}}>
        <TextField id="outlined-basic" label="Car Reg No" variant="outlined"
          value={car.regNo} 
          onChange={(e)=>setCar({...car,regNo:e.target.value})}
        ></TextField>
        <Button onClick={()=>handleAllocation()}>Allocate Location</Button>
      </Box>
      {error && <Box sx={{color:'red',fontWeight:'bold'}}>Registration Number cannot be empty</Box>}
      <Box sx={{display:'flex', flexDirection:'row' , flexWrap:'wrap', gap:'2rem'}}>
        {parkingLots.map((lot)=><Lot lot={lot} key={lot.id}/>)}
      </Box>
    </Box>

  )
}

export default ParkingLot