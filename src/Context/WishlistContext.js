import { createContext, useState, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { WishListReducer } from "../Reducer/WishListReducer";
import { initialState } from "../Reducer/WishListReducer";

export const WishKey = createContext()

const WishlistContext = ({children}) => {
    const [wishlist, setWishlist] = useState([])
    const [state, wishdispatch] = useReducer(WishListReducer, initialState)

const removeWishlist =(id) => {
    const filtereddata = wishlist.filter((item) => item.id !== id)
    setWishlist(filtereddata)
}
const {token} = AuthContext()
// console.log(token, 'token')
const wishListCall = async() =>{

   
  
    try{
        

    const sendreq =await fetch("/api/user/wishlist",{
        method:"GET",
        headers:{'Accept':'application/json',
    'Content-Type':'application/json',
    authorization : token
}

    })
    // console.log(sendreq)
    if (sendreq.status === 200 || sendreq.status === 201 ) {
        const response = await sendreq.json();
    // console.log("received token from server fr wishlist",response)
    //dispatch({type:"GET-CART",payload:response.cart})
    // console.log(response)
    wishdispatch({type : "SET-WISHDATA" , payload : response.wishlist})
    //setWishlist(response.wishlist)
    //console.log(wishlist)}
    }
    
}
    catch(e){
        console.log(e)
    }
   }
   useEffect(() =>{wishListCall()}  , [])
///////////////
    const addToWishlist = async(product) => {
        try {
            const passob = {product}
            //const passobj = {authorization: token}

    const sendreq =await fetch("/api/user/wishlist",{
        method:"POST",
        headers:{'Accept':'application/json',
    'Content-Type':'application/json',
    authorization : token}, body: JSON.stringify(passob) })

    // console.log(sendreq)
     
            // const resp = await fetch("/api/user/wishlist")
            if (sendreq.status === 200 || sendreq.status === 201 ) {const finalrespp = await sendreq.json()
                // console.log(finalrespp)
                wishdispatch({type : "SET-WISHDATA" , payload : finalrespp.wishlist})

                //setWishlist(finalrespp.wishlist)
                // console.log(wishlist)
            }
                
            
        } catch (error) {
            console.log(error)
        }
    }
    const removeProductToWishList = async(product) =>{
        try{
          //   console.log("recived item for wshl is",product._id,token)
                    const passobj = {product}
                    //console.log(passobj)
                    const sendreq =await fetch(`/api/user/wishlist/${product._id}`,{
                        method:"DELETE",
                        headers:{'Accept':'application/json',
                    'Content-Type':'application/json',
                    authorization : token}
              
                    })
               
                    //console.log("received data  after removing data from wishlost",sendreq)
                    if (sendreq.status === 200 || sendreq.status === 201 ){
                        const response = await sendreq.json();
                        //   console.log("received data  after removing data from wishlost",response)
                        wishdispatch({type : "SET-WISHDATA" , payload : response.wishlist})

                         //setWishlist(response.wishlist)
                      //   dispatch({type: "REMOVE-FROM-WISHLIST",payload:{product,wishlist:response.wishlist}})
                       
                    }
                    
                }
                catch(e){
                  console.log(e)
                }          
  
              }
        const handleWishListCheck = (product) => {
            return state?.wish?.some((item) => item._id === product._id)

        }
    const  valuetobepassed = {addToWishlist, wishlist, removeWishlist, removeProductToWishList, state, handleWishListCheck}
    return(
        <WishKey.Provider value = {valuetobepassed}>{children}</WishKey.Provider>
    )
}

export default WishlistContext;