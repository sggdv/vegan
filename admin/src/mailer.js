import nodemailer from 'nodemailer';

const TO_DEFAULT = '331599158@qq.com';
const FROM_DEFAULT = 'sggdv2015@163.com';
const CONF = {
  service: '163',
  auth: {
    user: 'sggdv2015@163.com',
    pass: 'etpnxtlrevghccuj'
  }
};

function printResult(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info.response);
  }
}

export default class Mailer {

  send({ to = TO_DEFAULT, subject, html }, callback = printResult) {
    nodemailer.createTransport(CONF)
      .sendMail({to, subject, html, from: FROM_DEFAULT}, callback);
  }

}
