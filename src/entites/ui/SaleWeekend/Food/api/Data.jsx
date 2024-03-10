import { useEffect, useState } from "react";
import CartEnt from "../Card/CardEnt";
export default function Data () { 
    const [dishes,setDishes] = useState([]);
    
    useEffect(() => { 
        fetch('https://65e5f152d7f0758a76e7cd26.mockapi.io/dishes')
        .then(res => res.json())
        .then(data => setDishes(data))
    }, []);

    return ( 
        <CartEnt dishes={dishes}/>
    )
}


