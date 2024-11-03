export const configuration = () => ({
    port: parseInt(process.env.PORT) || 3000,
    apiPrefix: process.env.API_PREFIX,
    requestBodySizeLimit: process.env.REQUEST_BODY_SIZE_LIMIT,
    adminPassword: process.env.ADMIN_PASSWORD,
    database: {
        connectionString: process.env.CONNECTION_STRING,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT) || 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME
    }
})
