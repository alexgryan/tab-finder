module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'tabfinder',
        user: process.env.DB_USER || 'tabfinder',
        password: process.env.DB_PASS || 'tabfinder',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabfinder.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }   
}