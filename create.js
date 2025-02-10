import fs from 'fs'
import path from 'path';
import {
    fileURLToPath
} from 'url';
import ini from 'ini'
import CryptoJS from 'crypto-js'

function md5(encryptString) {
    return CryptoJS.MD5(encryptString.toString()).toString()
}
for (let i =0;i<6;i++) {
    let script=md5(i.toString())
    let code = `
// new Env('test${script}')
// 2 2 * * *  jd_${script}.js
// cron: 1 1 * * *
import path from 'path';
import {
    fileURLToPath
} from 'url';
!(async () => {
    console.log("test")
})().catch((e) => {
    console.log(e.message)
})`
    fs.writeFile(`${script}.js`, code, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`🐯‍❄️ 写入 ${script}`)
    })
}
