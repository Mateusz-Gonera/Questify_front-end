import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../redux/api/questifyApi';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';


export const LoginForm = () => {

    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = async evt => {
        const form = evt.target;
        const {
            email: { value: email },
            password: { value: password },
        } = form;

        const credentials = { email, password };
        evt.preventDefault();
        await login(credentials)
            .unwrap()
            .then(({ accessToken,
                sid,
                refreshToken,
                userData: { email, id, cards }, }) => localStorage.setItem('token', accessToken))
            .catch(() => {
                toast.warn('Please check your email address or password', {
                    icon: "🦄", theme: "dark"
                });
            });

        const token = localStorage.getItem('token');
        dispatch(login(token))
        navigate('/');

        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="current-password">
            <div >Please Log In</div>
            <input
               placeholder="Email"
                type="email"
                name="email"
                //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                
            />
            <label >
            </label>
            <label>
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                   
                />
            </label>
            <button  type="submit">LOG IN</button>
        </form>
    );
};