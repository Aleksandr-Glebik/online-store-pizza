import React, { useEffect} from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components/index'

import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../redux/slices/pizzaSlice'
import SkeletonLoadingPizza from '../components/SkeletonLoadingPizza'
import { addCart } from '../redux/slices/cartSlice'

function Home() {
  const dispatch = useDispatch()
  const pizzas = useSelector( (state) => state.pizzas.pizzas)
  const { category, sortBy } = useSelector( ({ filters }) => filters)
  const isLoaded = useSelector( (state) => state.pizzas.isLoaded)
  const cartItems = useSelector(({ cart }) => cart.items)

  useEffect( () => {
    dispatch(fetchPizzas({category, sortBy}))
  }, [dispatch, category, sortBy])

  const handlerAddPizzaToCart = (obj) => {
    dispatch(addCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoaded
             ? Array(10).fill(0).map( (_, ind) => <SkeletonLoadingPizza key={ind} />)
             : pizzas.map( (pizza) => (
              <PizzaBlock
                key={pizza.id}
                onClickAddPizza={handlerAddPizzaToCart}
                addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}
                {...pizza}
              />))
          }
        </div>
    </div>
  )
}

export default Home