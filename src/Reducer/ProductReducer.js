const ProductReducer =  (state, action) => {
    switch (action.type) {
        case "SEARCH" :
            return {...state , search : action.payload}
        case "GETDATA" :
            return {...state , products : action.payload}
            case "SORT" :
            return {...state , sort : action.payload}
            case "CATEGORY" :
            return {...state , categoryName : action.payload}
            case "DISPLAY-ALL" :
                return {...state, all : action.payload }
            case "GENRE" :
                
             return state.genre.includes(action.payload) ? {...state, genre : state.genre.filter((item) => item !== action.payload) }: {...state,  genre : [...state.genre, action.payload] }

            case "CLEAR-FILTER" :

     
                return {...state, 
                    search : "",
                    sort : "",
                    checkbox : "",
                    categoryName : "all",
                    genre : [], 
                    all : true}
            default :
            return state
    }
}
export default ProductReducer;

