import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { menuList } from '../utils/nav-menu';
import styled from 'styled-components'


const Navbar = () => {
    const [open,setOpen] = useState(false)

    const location = useLocation()

    const handleChange = () =>{
        setOpen(!open)
    }
    return (
        <Wrapper>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       {open ? <i className="fas fa-close fa-2x" onClick={handleChange}></i> : <span className="navbar-toggler-icon"  onClick={handleChange}></span>} 
                         
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                menuList.map((menu, idx) => {
                                    return <li key={idx} className={menu.url === location.pathname ? 'active' : ''}>
                                        <Link to={menu.url}>{menu.title}</Link>
                                    </li>
                                })
                            }

                        </ul>

                    </div>
                </div>
            </nav>
        </Wrapper>
    )
};


const Wrapper = styled.section`
    nav{
        min-height:10vh;
        padding:5px;
     
        .navbar-toggler,
        .navbar-toggler:focus,
        .navbar-toggler:active,
        .navbar-toggler-icon:focus {
            outline: none;
            box-shadow: none;
            border: transparent;
        }
        img{
            height:60px;
            width:60px;
            border: 1px solid #000;
            border-radius:50%;
            text-align:center;
            padding: 5px;
        }
       
        ul{
            li {
             margin: 0 20px;
             display: inline-block;
             text-align:center;
            }
  /* Underline styles */
        a {
        display: inline-block;
        position: relative;
        padding: 0.2em 0;
       color:#000;
        }

        /* Fade in */
        a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: red;
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
        }

        a:hover::after,
        a:focus::after {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
        }

        /* Slide in */
        li a {
        overflow: hidden;
        }

        li a::after {
            opacity 1;
            transform: translate3d(-100%, 0, 0);
        }

        li a:hover::after,
            li a:focus::after{
            transform: translate3d(0, 0, 0);
            }

/* Scale from center */
/* li:nth-child(3) a::after {
  opacity 1;
  transform: scale(0);
  transform-origin: center;
} */

/* li:nth-child(3) a:hover::after,
li:nth-child(3) a:focus::after{
  transform: scale(1);
} */
        }

        .active{
            a{
                border-bottom:2px solid red;
            }
        }
    }
`
export default Navbar;
