import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const redirectIfAuthenticated = () => {
        if (token) {
            navigate('/posts'); // Redirect to posts page if user is already signed in
        }
    };

    return { redirectIfAuthenticated };
};
