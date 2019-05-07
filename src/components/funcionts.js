import axios from 'axios';

export const register = newUser => {
    return axios.post('http://localhost:5000/users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    .then((result) => {
        console.log(result, 'register');
        
    }).catch((err) => {
        console.log(err, 'error');
        
    });
}

export const login = user => {
    return axios.post('http://localhost:5000/users/login', {email: user.email, password: user.password})
    .then((response) => {
        localStorage.setItem('userToken', response.data)
        return response.data
    }).catch((err) => {
        console.log(err);
    });
}


