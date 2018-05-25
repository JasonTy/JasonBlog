const _ = require('lodash');

const auth = (ctx) => {
    if(_.isEmpty(ctx.request.body)) {
        throw {"message": '参数不能为空', code: 25004};
    }
    
    return Promise.resolve("dsad");
};

module.exports = auth;