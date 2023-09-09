import React, { useState } from 'react'
import "./Item.css"

const Item = ({ product, clearItems, deleteItems, packedItem, sortItems }) => {
    return (
        <div className='lists'>

            <div className='row'>
                {product.map((item, intx) => (
                    <List props={item} key={intx} deleteItems={deleteItems} packedItem={packedItem} />
                ))}
            </div>

            <div className='clear'>
                <button className="clear_all">
                    <select className='sort' onChange={(e) => sortItems(e.target.value)}>
                        <option value>Sort By Descripition </option>
                        <option value>Sort By Packed status</option>
                    </select>
                </button>
                <button onClick={clearItems} >ClearAll</button>
            </div>
        </div >

    )
}

const List = ({ props, deleteItems, packedItem }) => {
    // const [dd, setit] = useState();
    // console.log(dd);
    return (
        <div className='list'>
            <input type="checkbox" onChange={(e) => packedItem(props.id, e.target.checked)} checked={props.packed}></input>

            {<span className={props.packed ? "line" : ""}>
                {props.descripition}
                {props.quantity}
            </span>}


            <button className="close" onClick={() => deleteItems(props.id)}>&times;</button>
        </div>
    )
}

export default Item;

