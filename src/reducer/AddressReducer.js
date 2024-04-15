export const initialState =  {
    name: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    phone: ""
}

const dummy = {
    name: "Adarsh balika",
    area: "Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400087",
    phone: "8108272281"
}

const AddressReducer = (state, action) => {
    switch(action.type){
        case "Edit-Info":
            const {name, area, city , state, pincode, phone} = state.payload
            return {...state, name, area , city, state, pincode , phone}

            default:
            return state;
    }
}
