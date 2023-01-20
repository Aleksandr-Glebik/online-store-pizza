import React, { useEffect} from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components/index'
// import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
// import { getAllPizzas } from '../redux/slices/pizzaSlice'
import { fetchPizzas } from '../redux/slices/pizzaSlice'

function Home() {
  const dispatch = useDispatch()
  const pizzas = useSelector( (state) => state.pizzas.pizzas)
  const { category, sortBy } = useSelector( ({ filters }) => filters)

  // useEffect( () => {
  //   if (!pizzas.length) {
  //     axios.get('http://localhost:3000/db.json')
  //     .then(( { data } ) => {
  //       dispatch(getAllPizzas(data.pizzas))
  //     })
  //   }
  // }, [dispatch, pizzas.length])

  useEffect( () => {
    dispatch(fetchPizzas({category, sortBy}))
  }, [dispatch, category, sortBy])

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {pizzas && pizzas.map( (item) => (
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