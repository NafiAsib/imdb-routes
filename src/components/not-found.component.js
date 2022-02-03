import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-1">404</h1>
            <h1 className="display-4">
                The page you're looking for doesn't exists
            </h1>
            <Link to="/" className="btn">
                <h1 className="display-4">Go Home</h1>
            </Link>
        </div>
    );
};

export default NotFound;
