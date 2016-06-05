var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
var sgTransport= require('nodemailer-sendgrid-transport');

router.get('/',function(req,res){
	res.render('index',{title:'Send Mail Using NodeMailer'});
});

router.post('/sendmail',function(req,res){
	var options = {
			auth:{
				api_key:'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'
			}
	               }
	var mailer = nodemailer.createTransport(sgTransport(options));
	mailer.sendMail(req.body,function(error,info){
		if(error){
			res.status('401').json({err:info});
		}
		else{
			res.status('200').json({success:true});
		}
	});
});

module.exports = router;