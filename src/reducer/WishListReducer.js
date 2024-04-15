 export const initialState = {
    wish:[] 

}
export const WishListReducer = (value, action) => {
    
        switch (action.type){
            case "INCREASE-QUANTITY":
                return {...value,wish:action.payload}
            case "DECREASE-QUANTITY":
                return {...value,wish:action.payload}
            case "SET-WISHDATA":
                    return {...value,wish:action.payload}
            case "ADD-ADDRESS" :
                console.log(value, 'after address')
    
                return {...value, address : [...value.address, action.payload]}
                    default:
                        
            return value
        }
    
}
