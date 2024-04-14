import { useState } from "react";
import { CartState } from "../../context/ProductContext";
import "./Filter.css";

export default function Filter() {
  const {
    dispatch,
    state: { categoryName, sort, genre },
  } = CartState();

  const categoriesArray = [
    { id: 1, name: "gender", value: "all", text: "All" },
    { id: 2, name: "gender", value: "men", text: "Men" },
    { id: 3, name: "gender", value: "women", text: "Women" },
    { id: 4, name: "gender", value: "kids", text: "Kids" },
  ];

  const genreArray = [
    { id: 1, name: "sports", value: "sports", text: "Sports" },
    { id: 2, name: "casual", value: "casual", text: "Casual" },
    { id: 3, name: "formal", value: "formal", text: "Formal" },
  ];

  const sortArray = [
    { id: 1, name: "sort", value: "lowtohigh", text: "Low" },
    { id: 2, name: "sort", value: "hightolow", text: "High" },
  ];

  console.log(genre, "test");
  const [states, setState] = useState("");
  const setInputText = (e) => {
    setState(e.target.value);
    dispatch({ type: "SEARCH", payload: states });
  };
  const setSort = (e) => {
    dispatch({ type: "SORT", payload: e.target.value });
  };
  const setCategory = (e) => {
    dispatch({ type: "CATEGORY", payload: e.target.value });
  };

  const allProducts = (e) => {
    dispatch({ type: "DISPLAY-ALL", payload: e.target.checked });
  };
  const filteredDataonCheck = (e) => {
    dispatch({ type: "GENRE", payload: e.target.value });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR-FILTER" });
  };
  return (
    <div className="filter-parent-container">

      {/* search section of filter */}
      <div className="filter-search">
        <input
          type="text"
          onChange={setInputText}
          name="myInput"
          placeholder="Search Products"
        />
      </div>


 {/* //category section of filter */}

    
      <span className="tags">Category </span>
      <div className="filter-category">

        {
            categoriesArray?.map((category)=><div className="input-div">
                 <input
            type="radio"
            className="radio"
            name={category?.name}
            value={category?.value}
            onChange={setCategory}
            checked={
              categoryName?.length > 0 && categoryName === category?.value
                ? true
                : false
            }
          />
          {category?.text}
          </div>)
        }
     
      </div>


      {/* sort section of filter */}

        <span  className="tags">Sort  </span>
        <div className="filter-category">
        {sortArray?.map((item) => (
          <div  className="input-div">
            {" "}
            <input
              type="radio"
              className="radio"
              name={item?.name}
              value={item?.value}
              onChange={setSort}
              checked={sort?.length > 0 && sort === item.value ? true : false}
            />{" "}
            {item.text}
          </div>
        ))}
      
      </div>

      {/* genre section of filter */}
     
        <span className="tags" >Genre </span >
        <div className="filter-category">
        {genreArray?.map((gen) => (
          <div  className="input-div" key={gen?.id}>
            <input
              type="checkbox"
              className="radio"
              value={gen?.value}
              name={gen?.name}
              onChange={filteredDataonCheck}
              checked={genre?.includes(gen?.name) ? true : false}
            />
            {gen?.text}
          </div>
        ))}
      </div>

      {/* clear button section of genre */}
      <div className="filter-clear">
   
          <button className="clear-btn" type="button" onClick={handleClear}>
            Clear Filter{" "}
          </button>
      
      </div>
    </div>
  );
}
