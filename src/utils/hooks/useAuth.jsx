import { useSelector } from 'react-redux';
import { selectIsRefreshing, selectUser, selectIsLoggedIn } from '../../redux/selectors';


export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};