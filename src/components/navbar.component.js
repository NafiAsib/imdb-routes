import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand d-flex align-items-center">
                    <span style={{ marginLeft: '40px', marginRight: '40px' }}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                            width="60"
                            height="50"
                            className="d-inline-block align-top"
                            alt="imdb-logo"
                            style={{ objectFit: 'contain' }}
                        />
                    </span>
                    <button
                        className="btn btn-warning"
                        style={{ marginRight: '10px' }}
                    >
                        All movies
                    </button>
                    <button className="btn btn-outline-warning">
                        Add movie
                    </button>
                </span>
                <span>
                    <button
                        className="btn btn-outline-warning"
                        style={{ marginRight: '10px' }}
                    >
                        Login
                    </button>
                    <button
                        className="btn btn-outline-warning"
                        style={{ marginRight: '40px' }}
                    >
                        Signup
                    </button>
                </span>
            </nav>
        </>
    );
};

export default Navbar;
