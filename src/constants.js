export const ROUTES = {
    root: '/React-router',
    alboms: (userId) => userId ? `/albums/${userId}` : 'albums/:userId'
}

export const REQUEST_URL = {
    users: 'https://jsonplaceholder.typicode.com/users',
    alboms: 'https://jsonplaceholder.typicode.com/albums',
    photo: 'https://jsonplaceholder.typicode.com/photos'
}

    