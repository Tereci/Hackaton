// Copyright (C) 2007-2014, GoodData(R) Corporation. All rights reserved.

$(function() {
    // Enter your js code here. We take care of token handling and login,
    // so you can assume you are already logged in. You probably want
    // to start getting the bootstrap data. Open https://developer.gooddata.com/api
    // to consult the API documentation.

//    gooddata.xhr.get('/gdc/app/account/bootstrap').then(function(response) {
//        var bootstrapResource = response.bootstrapResource;
//    });

	// gdLabs.load().done(function(content) {
// 		console.log(content.project.uri);
// 	
// 		console.log("starting polling for model JSON");
// 		gooddata.xhr.get(content.project.uri + '/model/view/').then(function(response) {
// 	//        var bootstrapResource = response.bootstrapResource;
// 			console.log(response);
// 		});
// 		
// 	});
	
	console.log("bellow polling");
	var vis = d3.select("#ldm").append("svg");
	
	var w = 900,
	    h = 400;
	
	vis.attr("width", w)
	   .attr("height", h);
	   
    vis.text("Our Graph")
       .select("#ldm")
	   
	   
    var nodes = [{x: 60, y: 110},
                 {x: 90, y: 80},
                 {x: 120, y: 120}]
	var links = [
	   {source: nodes[0], target: nodes[1]},
	   {source: nodes[2], target: nodes[1]}
	]		

	var node = vis.selectAll("circle.node")
	.data(nodes)
	.enter().append("g")
	.attr("class", "node")

	node.append("svg:circle")
	.attr("cx", function(d) { return d.x; })
	.attr("cy", function(d) { return d.y; })
	.attr("r", "10px")
	.attr("fill", "black");


	vis.selectAll("circle.nodes")
	.data(nodes)
	.enter()
	.append("svg:circle")
	.attr("cx", function(d) { return d.x; })
	.attr("cy", function(d) { return d.y; })
	
	vis.selectAll(".line")
	   .data(links)
	   .enter()
	   .append("line")
	   .attr("x1", function(d) { return d.source.x })
	   .attr("y1", function(d) { return d.source.y })
	   .attr("x2", function(d) { return d.target.x })
	   .attr("y2", function(d) { return d.target.y })
	   .style("stroke", "rgb(6,120,155)");
	
	console.log("bellow svg");
	
});