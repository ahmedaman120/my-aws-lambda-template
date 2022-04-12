const APIRESPONSE = {
    createResponse(status_code = 500, body = {}, header = {}) {
        return {
            Headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                ...header,
            },
            statusCode: status_code,
            body: JSON.stringify(body),
        };
    },
    ok(data = {}, headers = {}) {
        return this.createResponse(200, data, headers);
    },
    notFound(data = {}, headers = {}) {
        return this.createResponse(404, data, headers);
    },
    badRequest(data = {}, headers = {}) {
        return this.createResponse(400, data, headers);
    },
};

module.exports = APIRESPONSE