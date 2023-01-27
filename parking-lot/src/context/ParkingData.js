import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router';


export const ParkingContext = createContext();

export const ParkingProvider = ({children})=>{

    const [lot,setLot] = useState()
    const [parkingLots,setParkingLots] = useState([])
    const [availableLot,setAvailableLot] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        let arr = []
        let available = []
        for(let i=0; i<lot; i++){
            arr.push({
                id : i , 
                parked:false,
                carReg : '',
                timeParked:'',
                cost:''
            })
            available.push(i)
        }
        setParkingLots(arr)
        setAvailableLot([...available])
    },[lot])

    const allocateSpot=(car)=>{

        if(availableLot.length==0){
            alert('No space available')
        }
        else{
            let spotToAllocate = Math.floor((Math.random() * availableLot.length) );
            const newSpot = availableLot[spotToAllocate]
            const newParkingLot =parkingLots.map((lot)=>{
                if(lot.id===newSpot){
                    return {
                        ...lot,
                        parked: true,
                        carReg : car.regNo,
                        timeParked : Date.now(),
                        cost : '$10'
                    }
                }else{
                    return lot
                }  
            })
            const newAvailableLot = availableLot.filter((lot)=>lot!==newSpot)
            setParkingLots(newParkingLot)
            setAvailableLot(newAvailableLot)
        }
    }

    const deAllocateSpot=(id)=>{
        setAvailableLot([...availableLot,id])
        const updatedParkingLot = parkingLots.map((lot)=>{
            if(lot.id==id){
                return{
                    ...lot,
                    parked:false,
                    carReg : '',
                    timeParked:'',
                    cost:''
                }
            }else{
                return lot
            }
        })
        setParkingLots(updatedParkingLot)
        navigate('parking-lot')
        
    }
    


    return (<ParkingContext.Provider value={{lot,setLot,parkingLots,allocateSpot,deAllocateSpot,setParkingLots,availableLot,setAvailableLot}}>
        {children}
    </ParkingContext.Provider>)
}
