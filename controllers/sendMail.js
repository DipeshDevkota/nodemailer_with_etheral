const nodemailer = require("nodemailer");


const sendMail= async(req,res)=>{

    let testAccount =await nodemailer.createTestAccount();
     

    //connect with smtp
    let transporter = await nodemailer.createTransport({
     
        host:"smtp.ethereal.email",
        port:587,
        auth:{
               user: 'ebony.trantow@ethereal.email',
        pass: 'XGBYA34A8PtxpVkTPM'
        },

    });

    let info = await transporter.sendMail({

           from :'"Dipesh Devkota" <dipes@gmail.com>',//sender address
           to:"sujan@gmail.com",//list of receivers
           subject:"Hello bro",//  subject line
           text:"hello bro don",// plain text body
           html:"<b>Hello bro</b>",// html body


    });


    console.log("Message sent:%s",info.messageId)


    res.json(info)
};




module.exports= sendMail;