import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const correctInfo = {
    username: 'admin',
    password: 'admin',
};

export const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Replace with actual login logic
        if (username === correctInfo.username && password === correctInfo.password) {
            navigate('/');
        }
        else {
            setError('Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">
                        <span>
                            Username:
                        </span>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        <span>
                            Password:
                        </span>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
