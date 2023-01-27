import React from 'react'
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';



const Lot = ({lot}) => {
  const navigate = useNavigate();

  return (
    <Box 
    onClick={()=>navigate(`/parking/${lot.id}`,{state:lot})}
    sx={{
      width:'8rem',
      height:'5rem',
      border : '3px solid',
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      cursor: 'pointer',
      backgroundColor: lot.parked==true ? '#8ee8ac' : '#ed7a72',
      borderColor:lot.parked==true ? 'green' : 'red',
    }}>
      Parking Spot {lot.id}
    </Box>
  )
}

export default Lot