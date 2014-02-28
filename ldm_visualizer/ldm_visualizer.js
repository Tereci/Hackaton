// Copyright (C) 2007-2014, GoodData(R) Corporation. All rights reserved.

$(function() {
    // Enter your js code here. We take care of token handling and login,
    // so you can assume you are already logged in. You probably want
    // to start getting the bootstrap data. Open https://developer.gooddata.com/api
    // to consult the API documentation.

//    gooddata.xhr.get('/gdc/app/account/bootstrap').then(function(response) {
//        var bootstrapResource = response.bootstrapResource;
//    });

	gdLabs.load().done(function(content) {
		console.log(content.project.uri);
	
	
		gooddata.xhr.get(content.project.uri + '/model/view/').then(function(response) {
	//        var bootstrapResource = response.bootstrapResource;
			console.log(response);
		});
	});
	
});