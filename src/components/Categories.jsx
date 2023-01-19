import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/slices/filterSlice'

const pizzaCategories = [
  {name: 'Все', category: 0},
  {name: 'Мясные', category: 1},
  {name: 'Вегетарианские', category: 2},
  {name: 'Гриль', category: 3},
  {name: 'Острые', category: 4},
  {name: 'Закрытые', category: 5},
]

const Categories = () => {
  const dispatch = useDispatch()
  const actionCategory = useSelector( (state) => state.filters.category)

  return (
    <div className="categories">
        <ul>
            {pizzaCategories && pizzaCategories.map( (item, ind) => (
                <li
                  onClick={() => dispatch(setCategory(ind))}
                  key={`${item.name}_${ind}`}
                  className={ind === actionCategory ? 'active' : ''}
                >{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Categories
