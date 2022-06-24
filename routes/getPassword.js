

export default async (app) => {
    app.get( '/api/password', getPassword )
} 

function getPassword(req, res) {
    res.send('Hello World!')
}