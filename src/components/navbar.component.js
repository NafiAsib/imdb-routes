import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const currentPath = useLocation().pathname;

    const getClassName = (path) => {
        if (path === currentPath) return 'btn btn-warning';
        else return 'btn btn-outline-warning';
    };

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand d-flex align-items-center">
                    <Link
                        to="/"
                        style={{ marginLeft: '40px', marginRight: '40px' }}
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                            width="60"
                            height="50"
                            className="d-inline-block align-top"
                            alt="imdb-logo"
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                    <Link
                        to="/movies"
                        className={getClassName('/movies')}
                        style={{ marginRight: '10px' }}
                    >
                        All movies
                    </Link>
                    <Link
                        to="/add-movie"
                        className={getClassName('/add-movie')}
                    >
                        Add movie
                    </Link>
                </span>
                <span>
                    <Link
                        to="/login"
                        className={getClassName('/login')}
                        style={{ marginRight: '10px' }}
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className={getClassName('/signup')}
                        style={{ marginRight: '40px' }}
                    >
                        Signup
                    </Link>
                </span>
            </nav>
        </>
    );
};

export default Navbar;
