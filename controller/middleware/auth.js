const _ = require('lodash');
const securityHelper = require('../../lib/_securityHelper');
const App = require('../../model/orm/app');

const auth = async (ctx) => {
    const body = ctx.request.body;
    if(_.isEmpty(body)) {
        throw {"message": '参数不能为空', code: 25004};
    }

    if(!body.appKey) {
        throw {"message": 'appKey不能为空', code: 25005};
    }
    
    const appInfo = await App.findAll({
        where: {
            appKey: body.appKey
        }
    });
    
    const secret = _.get(appInfo, '[0].appSecret', '');
    if(!secret) {
        throw {"message": 'appKey不合法', code: 25006};
    }
    
    const sign = securityHelper.crypto_ty({
        temptime: body.temptime,
        secret,
        token: body.appKey
    });
    return Promise.resolve();
};

module.exports = auth;