import React from 'react'

const Categories = () => {
  const pizzaCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
        <ul>
            {pizzaCategories.map( (name, ind) => (
                <li
                  key={`${name}_${ind}`}
                  className={name === 'Все' ? 'active' : ''}
                >{name}</li>
            ))}
        </ul>
    </div>
  )
} 

export default Categories
