import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, needRedirect, redirectPath = '/sign-in', ...props }) => {
    return (needRedirect ? (<Navigate to={redirectPath} replace />) : (<Component {...props} />));
};

export default ProtectedRoute;