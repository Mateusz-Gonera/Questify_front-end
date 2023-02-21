import { useDispatch } from 'react-redux';

//import { useAuth } from '../../utils/hooks/useAuth';
import { useLogoutMutation } from '../../redux/api/questifyApi';

export const UserMenu = () => {
    const dispatch = useDispatch();
    //const { user } = useAuth();
    const [logout] = useLogoutMutation();

    return (
        <div>
            <p>user name</p>
            <button type="button" onClick={() => dispatch(logout())}>
                logout icon
            </button>
        </div>
    );
};