import { useState } from "react"
import { CartState } from "../Context/ProductContext"

export default function Filter() {
const {dispatch, state : {categoryName, sort, genre}} = CartState()
console.log(genre , 'test')
    const [states, setState] = useState("") 
    const setInputText = (e) => {
        setState(e.target.value)
        dispatch ({type : "SEARCH", payload : states})
    }
    const setSort = (e) => {
        dispatch ({type : "SORT", payload : e.target.value})
    }
    const setCategory = (e) => {
        dispatch ({type : "CATEGORY" , payload : e.target.value})
    }

    const allProducts = (e) => {
        dispatch ({type : "DISPLAY-ALL" , payload : e.target.checked})
    }
    const filteredDataonCheck = (e) => {
        dispatch ({type : "GENRE" , payload : e.target.value})
    }

    const handleClear = () => {
        
        dispatch ({type:"CLEAR-FILTER"})
    }
    return (
        <div>
                    <h1>This is filter </h1>
<input type = "text" onChange={ setInputText} name = "myInput"/>
<input type = "radio" name = "gender" value = "all" onChange={ setCategory} checked = {categoryName?.length>0 && categoryName==="all"?true:false} /> All
<input type = "radio" name = "gender" value = "men" onChange={ setCategory} checked = {categoryName?.length>0 && categoryName==="men"?true:false} /> Men's
<input type = "radio" name = "gender" value = "women" onChange={ setCategory} checked = {categoryName?.length>0 && categoryName==="women"?true:false} /> Women's
<input type = "radio" name = "gender" value = "kids" onChange={ setCategory}  checked = {categoryName?.length>0 && categoryName==="kids"?true:false} /> Kid's
<input type = "radio" name = "sort" value = "lowtohigh" onChange={ setSort} checked = {sort?.length>0 && sort==="lowtohigh"?true:false} /> Low
<input type = "radio" name = "sort" value = "hightolow" onChange={ setSort} checked = {sort?.length>0 && sort==="hightolow"?true:false} /> High

<input type = "checkbox" value = "sports" name = "sports" onChange={filteredDataonCheck} checked = {genre?.includes("sports")?true:false} /> Sport

<input type = "checkbox" value = "casual" name = "casual" onChange={filteredDataonCheck} checked = {genre?.includes("casual")?true:false}  /> Casual

<input type = "checkbox" value = "formal" name = "formal" onChange={filteredDataonCheck} checked = {genre?.includes("formal")?true:false} /> Formal

<button type = "button" onClick={handleClear}>Clear Filter </button>
        </div>

        

    )
}