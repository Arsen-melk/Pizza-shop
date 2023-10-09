import React from "react";

const Categories = ({value,onChangeCategory}) => {
  
  
  const categories = ["Все","Мясные","Вегетарянская","Гриль","Острые"];

  
  return (
    <div>
      <div className="categories">
              <ul>
                {categories.map((categoryName,i) => (
                  <li
                  key={i} 
                  onClick={() => onChangeCategory(i)} 
                  className={value===i ? "active" : '' }>
                  {categoryName}
                  </li>
                )
                )}
              </ul>
            </div>
    </div>
  )
}

export default Categories;
