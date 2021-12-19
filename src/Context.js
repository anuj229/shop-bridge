import React, { useContext, useState } from "react";

const AppContext  = React.createContext();

const AppProvider = ({children}) => {

    const [items, setItems] = useState([
      {
        id: 1,
        name: "Sony TV",
        description:
          "Sony X80J 65 inch 4K Ultra HD HDR LED Smart Google TV with Dolby Vision & Atmos (KD65X80J)",
        price: "$400",
      },
      {
        id: 2,
        name: "MacBook Pro",
        description:
          "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID",
        price: "$2000",
      },
      {
        id: 3,
        name: "DSLR camera",
        description:
          "Canon EOS Rebel T100 / 4000D DSLR Camera Bundle + 2pc SanDisk Memory Cards + Accessory Kit (18-55MM + 64GB)",
        price: "$1000",
      },
    ]);
    return (
        <AppContext.Provider value={{items,setItems}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider}


