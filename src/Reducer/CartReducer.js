export const initialState = {
    cart:[],
    totalprice:0,
    address:[{
        name:"Adarsh Balika",
            area:"Bandra West",
            city:"Mumbai",
        state:"Maharashtra",
        pincode:"400010",
        phone:"0999099900"
    
    }, {
        name:"SHubham Karmokar",
        area:"Mira road West",
        city:"Mumbai",
        state:"Maharashtra",
        pincode:"400010",
        phone:"5467676"
    
    } ]
}
 export const CartReducer = (value, action) => {
    switch (action.type){
        case "INCREASE-QUANTITY":
            return {...value,cart:action.payload}
        case "DECREASE-QUANTITY":
            return {...value,cart:action.payload}
        case "SET-CARTDATA":
                return {...value,cart:action.payload}
        case "ADD-ADDRESS" :
            console.log(value, 'after address')

            return {...value, address : [...value.address, action.payload]}
                default:
                    
        return value
    }
}

