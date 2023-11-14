import { createContext, useState, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { initialState , CartReducer} from "../Reducer/CartReducer";

export const CartKey = createContext()

const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
    const [state, cartdispatch] = useReducer(CartReducer, initialState)
const removeCart =(id) => {
    const filtereddata = cart.filter((item) => item.id !== id)
    setCart(filtereddata)
}
const {token} = AuthContext()
console.log(token, 'token')
const cartCall = async() =>{

   
  
    try{
        

    const sendreq =await fetch("/api/user/cart",{
        method:"GET",
        headers:{'Accept':'application/json',
    'Content-Type':'application/json',
    authorization : token
}

    })
    const response = await sendreq.json();
    console.log(" token receivedfrom server fr cart",response)
    cartdispatch({type:"SET-CARTDATA",payload:response.cart})
    // setCart(response.cart)
    //console.log(wishlist)}
}
    catch(e){
        // console.log(e)
    }
   }
   useEffect(() =>{cartCall()}  , [])
///////////////


    const addToCart = async(product) => {
        try {
            const passob = {product}
            //const passobj = {authorization: token}

    const sendreq =await fetch("/api/user/cart",{
        method:"POST",
        headers:{'Accept':'application/json',
    'Content-Type':'application/json',
    authorization : token}, body: JSON.stringify(passob) })

    // console.log(sendreq)
     
            // const resp = await fetch("/api/user/wishlist")
            if (sendreq.status === 200 || sendreq.status === 201 ) {
                const finalrespp = await sendreq.json()
                cartdispatch({type:"SET-CARTDATA",payload:finalrespp.cart})
                // setCart(finalrespp.cart)
            }
                
            
        } catch (error) {
            console.log(error)
        }
    }
    const removeProductToCart = async(product) =>{
        try{
          //   console.log("recived item for wshl is",product._id,token)
                    const passobj = {product}
                    console.log(passobj)
                    const sendreq =await fetch(`/api/user/cart/${product._id}`,{
                        method:"DELETE",
                        headers:{'Accept':'application/js`1on',
                    'Content-Type':'application/json',
                    authorization : token}
              
                    })
               
                    console.log("received data  after removing data from wishlost",sendreq)
                    if (sendreq.status === 200 || sendreq.status === 201 ){
                        const response = await sendreq.json();
                        //   console.log("received data  after removing data from wishlost",response)
                        cartdispatch({type:"SET-CARTDATA",payload:response.cart})
                         setCart(response.cart)
                      //   dispatch({type: "REMOVE-FROM-WISHLIST",payload:{product,wishlist:response.wishlist}})
                       
                    }
                    
                }
                catch(e){
                  console.log(e)
                }          
  //d
              }
    const AddCartQuant = async (product, type) => {
        try {
            const requestedBody = {action : {type}}
            const sendreq =await fetch(`/api/user/cart/${product._id}`,{
                method:"POST",
                headers:{'Accept':'application/json',
            'Content-Type':'application/json',
            authorization : token}, body: JSON.stringify(requestedBody) })

            if (sendreq.status ===200 || sendreq.status === 201){
                const response = await sendreq.json()
                console.log(type, 'checktype')
                type === "increment" ?
                cartdispatch({type : "INCREASE-QUANTITY", payload : response?.cart}) : cartdispatch({type : "DECREASE-QUANTITY", payload : response?.cart})
                console.log(response.cart.length, 'responsefor increase')
            }

        } catch (error) {
            
        }
    } 

    // const RemoveCartQuant = async (product, type) => {
    //     try {
    //         const requestedBody = {action : {type}}
    //         const sendreq =await fetch(`/api/user/cart/${product._id}`,{
    //             method:"POST",
    //             headers:{'Accept':'application/json',
    //         'Content-Type':'application/json',
    //         authorization : token}, body: JSON.stringify(requestedBody) })

    //         if (sendreq.status ===200 || sendreq.status === 201){
    //             const response = await sendreq.json()
    //             cartdispatch({type : "DECREASE-QUANTITY", payload : response?.cart})

    //         }

    //     } catch (error) {
            
    //     }
    // } 
    const handleCartCheck = (product) => {
        return state?.cart?.some((item) => item._id === product._id)

    }
    const  valuetobepassed = {addToCart, cart, removeCart, removeProductToCart,AddCartQuant, state, cartdispatch, handleCartCheck}
    return(
        <CartKey.Provider value = {valuetobepassed}>{children}</CartKey.Provider>
    )
}

export default CartContext;