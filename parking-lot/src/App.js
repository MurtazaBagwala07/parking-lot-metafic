import React from 'react'
import { Route, Routes } from 'react-router'
import Allotment from './pages/Allotment'
import ParkingSpot from './pages/ParkingSpot'
import ParkingLot from './pages/ParkingLot'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Allotment/>}/>
        <Route path='/parking-lot' element={<ParkingLot/>}/>
        <Route path='/parking/:id' element={<ParkingSpot/>}/>
      </Routes>
    </div>
  )
}

export default App