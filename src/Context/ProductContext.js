import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../Reducer/ProductReducer";

export const ProductKey = createContext();

const ProductContext = ({ children }) => {
  const initialstate = {
    products: [],
    search: "",
    sort: "",
    checkbox: "",
    categoryName: "",
    genre: [],
    all: false,
  };

  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      const finalres = await res.json();
      dispatch({ type: "GETDATA", payload: finalres.products });
      //setData(finalres.products)
      //console.log(finalres.products)
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const [state, dispatch] = useReducer(ProductReducer, initialstate);
  const setInputText = (e) => {};
  const filteredSearchData =
    state?.search.length > 0
      ? state?.products.filter((item) =>
          item.title.toLowerCase().includes(state?.search.toLowerCase())
        )
      : state?.products;

  const filteredSortData =
    state?.sort.length > 0
      ? filteredSearchData.sort((a, b) =>
          state?.sort === "lowtohigh" ? a.price - b.price : b.price - a.price
        )
      : filteredSearchData;

  const filteredCategoryData =
    state?.categoryName.length > 0
      ? state.categoryName !== "all"
        ? filteredSearchData.filter(
            (item) =>
              item.categoryName.toLowerCase() ===
              state.categoryName.toLowerCase()
          )
        : filteredSearchData
      : filteredSortData;

  const filteredDataGenre =
    state?.genre.length > 0
      ? filteredCategoryData.filter((item) => state?.genre.includes(item.genre))
      : filteredCategoryData;

  //console.log(filteredDataGenre, 'genre')

  //const filteredData = state.all ? state.products : filteredDataGenre

  const valuetobepassed = {
    setInputText,
    dispatch,
    state,
    filteredSearchData,
    filteredCategoryData,
    state,
    filteredDataGenre,
  };
  return (
    <ProductKey.Provider value={valuetobepassed}>
      {children}
    </ProductKey.Provider>
  );
};

export default ProductContext;
export const CartState = () => useContext(ProductKey);
