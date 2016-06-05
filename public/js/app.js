'use strict';
angular.module('sendmailApp',[])
.controller('MailController',function($scope,$http){
	$scope.loading = false;
	$scope.send = function(mail){
		$scope.loading = true;
		$http.post('/sendmail',{
			from:'Bipin <admin@code9.com',
			to:'vipinswarnkar1989@gmail.com',
			subject:'Message from Bipin',
			text:mail.message
		}).then(res=>{
			$scope.loading = false;
			$scope.serverMessage = 'Email Sent Successfully';
		});
	}
});