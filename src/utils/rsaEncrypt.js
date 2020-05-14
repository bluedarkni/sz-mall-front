import JSEncrypt from 'jsencrypt/bin/jsencrypt'

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrjqKjgtFZqUiF9nOOwkZXXTKsRXnS0Y0BffUy2tjs2TgYd6sCS3AC1o6Fxf1oVJTppOSAhY1zhT3jNvIUfERGiyMqeGLGyzheTkrbM9XMpY/iu0y9FBWjnzMJg3zlmJug+R0FCcXzEVI0Jk6+SJoqK0K8SRiIWxzf++X3Y98tXwIDAQAB'

const privateKey = 'MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAKuOoqOC0VmpSIX2c47CRlddMqxFedLRjQF99TLa2OzZOBh3qwJLcALWjoXF/WhUlOmk5ICFjXOFPeM28hR8REaLIyp4YsbLOF5OStsz1cylj+K7TL0UFaOfMwmDfOWYm6D5HQUJxfMRUjQmTr5ImiorQrxJGIhbHN/75fdj3y1fAgMBAAECgYEAlEnOOxewbZftoB3O9O7obkuYqV/EVX3cLBX8A+E28EMyQbPulSUvxMRAnVDuIWg671ogSRcnlVrui5/Kz/o56HKd1h3ldOEfUH+au3n1p9JsUSEYS49rGWVTD07HZ1OYnvh4PLMPRSle01n6yyeEpvngaYhZ6lLyFxO2hYivkwECQQDvBsB/uPXeg+9xPeaqp6nOSGPy+6KTCaDsvCKospPDdIYCygFk26jEoe694hZ59p+MfLFdbKYS16Ad8dIN8EQvAkEAt71dOoSjYM9AVt81KAghk0Gx16On+O/Fc668w5871obc/aq8ApHlGqu7C+GD5Y+OPf6bWUWhgpoE8okgh+jt0QJBAL6f2eGCdsMw4UKkpVMwR6H15ZAg0rUFFsv19oYndOSKB14uEBKJg/zdT/MrXdWCtBdsUl85iPC5+j4nXugy140CQFAJiQboqFKPdTNiX8FkaVvADjwk6hKiP5y4zTlZr7MvZCyLpwJnkykfDYeLYO0qr4eJ1Rn6HvTJKsaLvUP2z0ECQQCxkel5zfrzIt4ePgAjwe0qtsexpiZBvnChNX2utzJ0NzKFYaJQEs4KThosGaZ1XqovtEHwAiKukp40ief1QOSh'

// 加密
export function encrypt (txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对需要加密的数据进行加密
}

// 解密
export function decrypt (txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey)
  return encryptor.decrypt(txt)
}
