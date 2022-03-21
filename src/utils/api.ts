const url = 'http://localhost:3009';
const loginEndpoint = '';
const signUpEndpoint = '';
const validationEndpoint = '';

export function logIn(password: string, emailOrPhone: string, value: string) {
    return fetch(`${url}/${loginEndpoint}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            password,
            [emailOrPhone]: value,
        }),
    }).then((res) => res.json());
}

export function signUp(
    password: string,
    email: string,
    name: string,
    phone: string,
    photo: string
) {
    return fetch(`${url}/${signUpEndpoint}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            password,
            email,
            fullName: name,
            phone,
            photo,
            status: '',
        }),
    }).then((res) => res.json());
}

export function validate() {
    return fetch(`${url}/${validationEndpoint}`, {
        method: 'GET',
        headers: {
            authorization:
                !window.localStorage.token ||
                window.localStorage.token === 'undefined'
                    ? null
                    : window.localStorage.token,
        },
    });
}