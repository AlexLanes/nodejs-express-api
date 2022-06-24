
export function configure(app) {
    app.get('/api/password', getPassword)
}
export function getPassword(request, response) {
    response.send('Hello World!')
}