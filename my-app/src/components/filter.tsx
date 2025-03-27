'use client'
import React from 'react'
const categories = [
    {
        title: "House Plants", number: 33
    },
    {
        title: "Potter Plants", number: 11
    }, {
        title: "Seeds", number: 23
    }, {
        title: "Small Plants", number: 45
    },
]
const Filter = ({ fn }: { fn: (obj: object) => void }) => {


    return (
        <div className='w-48'>
            <p>Filter</p>
            <ul>
                {categories.map((el) => {
                    return <li key={el.number}><button onClick={() => fn({ "categories": el.title })}>{el.title}</button></li>
                })}
            </ul>

        </div>
    )
}

export default Filter