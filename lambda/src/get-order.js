const APIRESPONSE = require('./util/apiResponse');
const ORDERS = {
    1: { name: "ahmed", total: 120 },
    2: { name: "mohamed", total: 120 },
    3: { name: "mahros", total: 120 },
    4: { name: "ayman", total: 120 },
    5: { name: "lok", total: 120 },
};


module.exports.handler = (event, ctx, cb) => {
    const { pathParameters } = event;
    if (!pathParameters.id) {
        return cb(null, APIRESPONSE.badRequest({ message: "missing order id" }));
    }
    const { id } = pathParameters;

    if (!ORDERS[id]) {
        return cb(null,
            APIRESPONSE.notFound({ message: "order not found" })
        );

    }
    return cb(null, APIRESPONSE.ok({ message: "succes", order: ORDERS[id] }))

}