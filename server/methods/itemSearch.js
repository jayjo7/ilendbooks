var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "AKIAJM537YQDVUA3ENVQ",
  awsSecret: "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",
  awsTag: "ilendbooks-20"
});

Meteor.methods({
  	itemSearch(title, author) {
  		var result 	= {};
  		console.log("title:" + title);
  		console.log("author:" + author);
		client.itemSearch({
		  	title: title,
		  	author: author,
		  	searchIndex: 'Books',		 	
		  	responseGroup: 'ItemAttributes,Offers,Images,Small'
		}).then(function(results){
		  //console.log(results);
		  	console.log('result returned on item search api call:')
		    //console.log('Stringified error object' + JSON.stringify(results, null, 4));
		    result.results = results;
		    console.log('Stringified result object' + JSON.stringify(result, null, 4));
	     	return result;

		}).catch(function(err){
		  	//console.log(err);

		  	console.log('error returned on item search api call:')
		  	console.log('Stringified error object' + JSON.stringify(err, null, 4));
		  	result.error = err;
		    console.log('Stringified error object' + JSON.stringify(result, null, 4));
	     	return result;
 
	   	});

  	}
});