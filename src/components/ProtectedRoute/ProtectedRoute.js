import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({ needRedirect, redirectPath = '/signin', children }) => {
    return (needRedirect ? (<Navigate to={redirectPath} replace/>) : children);
};

export default ProtectedRoute;