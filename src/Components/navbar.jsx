
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { React, useEffect } from 'react'
import { useState } from 'react';
import "./navbar.css"
function Navbarcomponent() {
    const navigate = useNavigate()
    const [dark, setdark] = useState(true)
    if (dark) {
        document.body.classList = "dark"
    }
    const remove =() => {
        localStorage.removeItem("token")
        navigate("frontend/login")
        var bars = document.getElementById("nav-action");
        var nav = document.getElementById("nav");
        bars.classList.toggle('active');
        nav.classList.toggle('visible');
        // console.log(bars.classList)
    }
    let location = useLocation();
    useEffect(() => {
    }, [location])

    function barClicked() {
        var bars = document.getElementById("nav-action");
        var nav = document.getElementById("nav");
        bars.classList.toggle('active');
        nav.classList.toggle('visible');
        console.log(bars.classList)
    }
    return (
        <div>
            <div onClick={barClicked} class="bars" id="nav-action">
                <span class="bar"> </span>
            </div>

            <nav id="nav">
                <ul>
                {!localStorage.getItem("token") && <li onClick={barClicked} class="shape-circle circle-one"><Link to="/frontend/Signup">signup</Link></li>}
                    {localStorage.getItem("token") &&  <li onClick={remove} class="shape-circle circle-two">logout</li>}
                    {!localStorage.getItem("token") &&   <li onClick={barClicked}  class="shape-circle circle-two"><Link to={"/frontend/login"}>login</Link></li>}
                    {localStorage.getItem("token") &&   <li onClick={barClicked}  class="shape-circle circle-two"><Link to={"/frontend/about"}>about</Link></li>}
                      <li onClick={barClicked} class="shape-circle circle-three"><Link to={"/frontend/home"}>home</Link></li>
                    <li class="shape-circle circle-five"></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbarcomponent;

