var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = process.env.HASHING_SECRET

function encrypt(text){
    console.log('asd', text, password)
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  console.log(crypted)
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

    module.exports = {
        encrypt: encrypt,
        decrypt: decrypt
    }