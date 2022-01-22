import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { menuList } from '../utils/nav-menu';
import styled from 'styled-components'
import logo from '../images/logo.png'

const Navbar = () => {

    const location = useLocation()

    return (
        <Wrapper>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="No More Pandemics" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
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
        }
       
        ul{
            
            li{
                text-transform:capitalize;
                display:inline-block;
                padding:5px 15px;
                text-align:center;
                &:hover a{
                    transition:var(--transition);
                    border-bottom:1px solid #000;
                }
                a{
                    color:#0e0e0e;

                }
            }
        }

        .active{
            a{
                border-bottom:1px solid #000;
            }
        }
    }
`
export default Navbar;
