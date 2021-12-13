export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}

export const updateUser = async (user) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify(user)
    });
    const result = await response.json();
    return result;
}

export const addUser = async (user) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    const result = await response.json();
    return result;
}

export const deleteUser = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    return result;
}