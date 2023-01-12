import React, { useState } from 'react'

const Categories = () => {
  const pizzaCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const [active, setActive] = useState('Все')
  // console.log('active', active);

  return (
    <div className="categories">
        <ul>
            {pizzaCategories && pizzaCategories.map( (name, ind) => (
                <li
                  onClick={() => setActive(name)}
                  key={`${name}_${ind}`}
                  className={name === active ? 'active' : ''}
                >{name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Categories
