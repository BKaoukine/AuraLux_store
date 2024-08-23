import { createContext } from "react";

import All_Products from "../Components/Assets/All_Products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    const contextValue = {All_Products};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;