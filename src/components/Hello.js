import React, { useState } from 'react'

export default function Hello(props) {
    let [countHello, setCountHello] = useState(0);
    let [secondHello, setSecondHello] = useState(0);
    let handleIncrease = () => {
        setCountHello(++countHello);
        setSecondHello(++secondHello)

        // props.handleIncreaseFromNav();
    }
    let handleIcreNav = () => {
        props.handleIncreaseFromNav();
        setSecondHello(++secondHello)
    }
    return (
        <div>
            <h1>This is hello</h1>
            <p>Count from navbar {secondHello}</p>
            <button onClick={() => {
                handleIcreNav()
            }}>Increase by navbar</button>
            <br />
            <p>Count from hello {countHello}</p>
            <button onClick={() => {
                handleIncrease()
            }}>Increase from hello</button>
        </div>
    )
}
