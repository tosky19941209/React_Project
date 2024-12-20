import { Navigate, useLocation } from 'react-router-dom';
import { useUtilContext } from '../../hooks';
// import { useAuth } from './authContext'; // Custom hook to get auth status

const RequireAuth = ({ children }: any) => {
    const { user } = useUtilContext(); // Get user authentication status
    const location = useLocation(); // Get current location

    if (user === "") {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children; // Render children if authenticated
}

export default RequireAuth