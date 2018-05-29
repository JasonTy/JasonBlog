/**
 * Created by tangyitangyi on 2018/5/22.
 */
const crypto = require('crypto');

exports.crypto_ty = ({temptime, secret, koken}) => {
    const hash  = crypto.createHash('md5')
    hash.update(new Buffer(`${temptime}${secret}${koken}`))
    return hash.digest('hex');
}