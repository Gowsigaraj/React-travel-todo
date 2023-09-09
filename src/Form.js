import React, { useState } from 'react'
import "./Form.css"

const Form = ({ onAddItems }) => {
    const [descripition, setDescripition] = useState("");
    const [quantity, setQuantity] = useState(1);


    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { descripition, quantity, checked: false, id: Date.now() }
        onAddItems(newItem)
        setDescripition("")
        setQuantity(1)

    }
    return (
        <div>
            <form className='add_form' onSubmit={handleSubmit}>
                <div className='form_container'>


                    <p>What do you need for your trip?</p>

                    <select className='select_option' value={quantity} onChange={(e) => {
                        setQuantity(Number(e.target.value))
                    }}>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                            <option value={num}>
                                {num}
                            </option>
                        )
                        )}
                    </select>

                    <input type="text" id="fname" name="form_input" className='form_input' placeholder='item...' value={descripition} onChange={(e) => setDescripition(e.target.value)}
                    ></input>

                    <button className='btn'>ADD</button>




                </div>
            </form>
        </div>
    )
}

export default Form