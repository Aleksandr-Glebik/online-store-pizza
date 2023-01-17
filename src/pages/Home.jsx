import React, {useState, useEffect} from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components/index'

function Home() {
  const [pizzas, setPizzas] = useState([])

  useEffect( () => {
    fetch('http://localhost:3000/db.json')
      .then( (resp) => resp.json())
      .then(json => {setPizzas(json.pizzas)})
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {
              pizzas.map( (item) => (
                <PizzaBlock
                  key={item.id}
                  {...item}
                />
              ))
            }
        </div>
    </div>
  )
}

export default Home