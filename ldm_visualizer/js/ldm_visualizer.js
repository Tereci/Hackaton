// Copyright (C) 2007-2014, GoodData(R) Corporation. All rights reserved.

// Those first two modules are workaround to the sdk bug. Will be removed
// when it is fixed.
define('xhr-on-window', ['xhr'], function(xhr) {
   return window.xhr = xhr;
});

define('sdk-on-window', ['sdk'], function(sdk) {
   return window.sdk = sdk;
});

define('init', [], function() {
	
});

require(['labs', 'ember', 'templates'], function() {
   window.LdmVisualizer = Em.Application.create({
       rootElement: '#ember_root'
   });
	
   	// Your sweet js goes here
	LdmVisualizer.Application = Ember.Object.extend({});
	// the controller
	
	LdmVisualizer.ApplicationRoute = Ember.Route.extend({
		//model function, setup controller function
		model: function() {
			return (xhr.ajax({
   	        	url: "/gdc/projects/lfvx7acq8c9wabty3l7rzylznni4cbgg/model/view/d530ddb8eb6698c9371a6ce5ec35d4890000014474eb97510000000e",
				type: 'GET'
   	    	}).then(function( data ) {
				console.log(data);
				return LdmVisualizer.Application.create({
					test: data["projectModelView"]
				})		
			}));
		}
		// polling http://yoranbrondsema.com/live-polling-system-ember-js/
	
	});
	// 
	// LdmVisualizer.ApplicationController = Ember.ObjectController.extend({
	// })
});

