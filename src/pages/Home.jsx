import React from 'react';
import { useEffect, useState } from "react";
import Categories from "../components/Categories";

import PizzaBlock from "../components/PizzaBlock/index";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = () => {
  const [items,setItems]= useState([])
  const [isLoading,setIsLoading]=useState(true);
  const[categoryId,setCategoryId]=useState(0);
  const [sortType,setSortType] = useState({
    name:'популярности', 
    sortProperty: 'rating',
  });

  
  
  useEffect(() => {
    setIsLoading(true)
    fetch(
    `https://6495c1d2b08e17c91792a2cd.mockapi.io/items?${
      categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sortType.sortProperty}$order=desc`
    )
  .then((res) => 
     res.json())
  
  .then((arr) =>{
    setItems(arr);
    setIsLoading(false);
    
  })
  window.scrollTo(0,0)
  },[categoryId,sortType])
  return (
    <div className="container">
     <div className="content__top"> 
            <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
            <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {
              isLoading ? [...new Array(6)].map((_,index) => <Skeleton key={index}/>)
              : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
            } 
            
          </div>
    </div>
  )
}

export default Home
