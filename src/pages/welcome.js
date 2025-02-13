import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './css/details.css'
import '../index.css'
import { ChildComponent01 } from './ChildComponent01'

const Welcome= ()=> {
    let [value, setValue] = useState('Default value');
    return (
    <div>
        <div class='pageHead'><h1>Welcome</h1></div>
        <div class='pageBody'>
            <div class='anchorButton'>
                <Link to='/login' class='linkText'>Login</Link>
            </div>
            <div class='anchorButton'>
                <Link to='/register' class='linkText'>Register</Link>
            </div>
        </div>
        <ChildComponent01 data={value}/>
        <div class='anchorButton'>
                <Link to='/details' class='linkText'>Details</Link>
        </div>
        <div class='detailsContainer'><Outlet/></div>
    </div>
    )
}

export default Welcome;