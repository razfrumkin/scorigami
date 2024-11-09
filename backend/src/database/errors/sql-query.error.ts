export class SQLQueryError extends Error {
    constructor(query: string, reason: string) {
        super(`Query execution failed for query: '${query}'. Reason: ${reason}`)

        Object.setPrototypeOf(this, SQLQueryError.prototype)
    }
}
