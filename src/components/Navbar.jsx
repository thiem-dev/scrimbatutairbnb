import React from "react"
import ABlogo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={ABlogo} alt="logo" className="nav--logo" />
        </nav>
    )
}