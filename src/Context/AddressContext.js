import { createContext, useContext } from "react";

export const AddressKey =  createContext();

const AddressProvider = ({children}) => {

    const valuetobepassed = {}
    return (
        <AddressKey.Provider value = {valuetobepassed}> {children}</AddressKey.Provider>
    )
}

export default AddressKey;
export const AddressContext = () => useContext(AddressProvider)