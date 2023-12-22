import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', {
            replace: true
        })

    }

    return (
        <div>
            <h1 className='m-3'>Login</h1>
            <hr />

            <button className="btn btn-primary m-3"
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    )
};
