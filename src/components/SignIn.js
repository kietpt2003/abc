import React, { useState } from 'react'

export default function SignIn(props) {
    let [countHello, setCountHello] = useState(0);
    let handleIncrease = () => {
        setCountHello(++countHello);
    }
    return (
        <div>
            <p>Count from navbar {props.count}</p>
            <button onClick={() => {
                props.handleIncreaseFromNav()
            }}>Increase by navbar</button>
            <br />
            <p>Count from hello {countHello}</p>
            <button onClick={() => {
                handleIncrease()
            }}>Increase from hello</button>
        </div>
    )
}
