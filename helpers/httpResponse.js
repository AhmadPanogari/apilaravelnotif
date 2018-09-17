/**
 * 
 * @param {Http Response} res 
 * @param {int} code 
 * @param {string} msg 
 * @param {string} data 
 */
const send = async(res,code,msg,data)=>{
    return res.json({code:code,message:msg,data:data});
}

module.exports = {
    send
}