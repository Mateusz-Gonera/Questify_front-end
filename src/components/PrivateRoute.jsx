import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/hooks/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/landing' }) => {
    const { isLoggedIn,isRefreshing} = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};