import React, { useState } from 'react'
import SignIn from './SignIn';
import SignOut from './SignOut';
import Hello from './Hello';

export default function NavigationBar() {
    let [email, setEmail] = useState('tuan a');
    let handleInput = (e) => {
        setEmail(e.target.value)
    }
    let [count, setCount] = useState(0);
    let handleIncrease = () => {
        setCount(++count);
    }
    return (
        <div>
            {/* Your email: <input value={email} onChange={(e) => { handleInput(e) }} /> */}
            {/* <SignIn email={email} count={count} handleIncreaseFromNav={handleIncrease} />
            <SignOut email={email} count={count} handleIncreaseFromNav={handleIncrease} /> */}
            <h1>This is navbar</h1>
            <p>my count number: {count}</p>
            <button onClick={() => {
                handleIncrease()
            }}>Increase</button>
            <Hello email={email} count={count} handleIncreaseFromNav={handleIncrease} />
        </div>
    )
}
