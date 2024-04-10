import React, { useState } from 'react'
// import logo from '../../assets/images/h_logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../../Redux/Action';
import { Link } from 'react-router-dom'
import s from './Navbar.module.css'
import '../../../src/App.css'
import Navbar_Li from './Navbar_Li';
import logo from '../../assets/img2.jpg'

const nav_list = [
    { link: "/movie", title: "Movie" },
    { link: "/list", title: "List" },
    { link: "/details", title: "Details" }
];

const Navbar = () => {

    const dispatch = useDispatch();
    const handleSearch = (e) => {
        const query = e.target.value;
        dispatch(searchMovies(query));
    };


    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id={s.header} className='px-5 py-3 mt-3'>
            <nav className={`py-3 px-4 navbar navbar-expand-xl navbar-light bg-light rounded-4`}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                        <img className={`${s.nav_logo_img}`} src={logo} />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {nav_list.map((item, index) => (
                                <Navbar_Li key={index} link={item.link} li_title={item.title} />
                            ))}
                            <li className='ms-2'>
                                <Link className='text-decoration-none text-dark' to='/list'>
                                    <div className="search-box col">
                                        <form className="flex items-center" >
                                            <div className="searchbars position-relative">
                                                <input type="text" name="search" onChange={handleSearch} placeholder="Search Movie" id="" className="searchbar font-poppins" />
                                                <div className="icons">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
