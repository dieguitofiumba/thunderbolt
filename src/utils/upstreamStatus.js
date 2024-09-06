const upstreamStatus = [
    {
        message: "Bad request",
        code: 400,
        error: "API side Bad request, check the send data"

    },
    {
        message: "Unauthorized",
        code: 401,
        error: "API Side Unathorized, check the requirements and check the request endpoint"
    },
    {
        message: "Forbidden",
        code: 403,
        error: "API Side Forbidden, check the requirements and check the request endpoint"
    },
    {
        message: "Not Found",
        code: 404,
        error: "API Side returned 404 status code, check the requested endpoint"
    },
    {
        message: "Internal Server Error",
        code: 502,
        error: "API side Internal error, check the status"
    }
]

module.exports = upstreamStatus