const Home = () => {
    return (
        <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: '80vh' }}
        >
            <div className="card text-center w-50 border border-warning">
                <div className="card-body">
                    <h5 className="card-title">IMDb with Routing</h5>

                    <p className="card-text">Simple example of React Router</p>
                    <div>
                        <h5 className="card-title">Tools</h5>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="react-log"
                            height={40}
                            width={'auto'}
                            className="m-2"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                            alt="react-log"
                            height={40}
                            width={'auto'}
                            className="m-2"
                        />
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="react-log"
                            height={40}
                            width={'auto'}
                            className="m-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
