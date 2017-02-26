var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "AKIAJM537YQDVUA3ENVQ",
  awsSecret: "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",
  awsTag: "ilendbooks-20"
});

Meteor.methods({
  	itemSearch(appUUID, title, author) {
  		var result 	= {};
  		console.log(appUUID + ":appUUID=" + appUUID);
  		console.log(appUUID + ":title="  + title);
  		console.log(appUUID + ":author="  + author);
  		result.search = {
  			appUUID: appUUID,
  			title: title,
  			author:author
  		}
		client.itemSearch({
		  	title: title,
		  	author: author,
		  	searchIndex: 'Books',		 	
		  	responseGroup: 'ItemAttributes,Images'
		}).then(function(results){
		  	console.log(appUUID + ':result returned on item search api call:')
		    result.results = results;
		    //console.log('Stringified result object' + JSON.stringify(result, null, 4));
		    for(key in result.results) {
		     	delete result.results[key].ItemLinks;
		     	for(smallImageKey in result.results[key].SmallImage) {
		     		delete result.results[key].SmallImage[smallImageKey].Height;
		     		delete result.results[key].SmallImage[smallImageKey].Width;
		     	}
		     	for(mediumImageKey in result.results[key].MediumImage) {
		     		delete result.results[key].MediumImage[mediumImageKey].Height;
		     		delete result.results[key].MediumImage[mediumImageKey].Width;
		     	}
		    	for(largeImageKey in result.results[key].LargeImage) {
		     		delete result.results[key].LargeImage[largeImageKey].Height;
		     		delete result.results[key].LargeImage[largeImageKey].Width;
		     	}
		     	delete result.results[key].ImageSets;
		     	for(itemAttributesKey in result.results[key].ItemAttributes) {
		     		delete result.results[key].ItemAttributes[itemAttributesKey].ItemDimensions;
		     		delete result.results[key].ItemAttributes[itemAttributesKey].PackageDimensions;
		     	}
		    }
		    stringifiedResult = JSON.stringify(result, null, 4);

		    //var emailResult = Meteor.call('sendEmail', "jayjo7@hotmail.com", "admin@ilendbooks.com" , "itemSearch - result", stringifiedResult);
		    var emailResult = Email.send({
  				to: "jayjo7@hotmail.com",
 				from: "admin@ilendbooks.com",
  				subject: "itemSearch - result",
  				text: stringifiedResult
			});
			console.log(appUUID + ':Email sent')
			//console('emailResult=' + emailResult);
			//results = results.replace('$', 'jay')
		   	var upsertResult = SearchResult.upsert(
			    {
			    	appUUID: appUUID,
			    	title: title,
			  	    author: author,
			    },    
			    { 
			    	$set: { result: result }
	    		}
    		);
    		for(upsertResultKey in upsertResult) {
    			console.log(appUUID + ':upsertResult='+ upsertResult[upsertResultKey]);
    		}
		}).catch(function(err){
		  	//console.log(err);

		  	console.log('error returned on item search api call:')
		  	result.error = err;
		    console.log('Stringified error object' + JSON.stringify(result, null, 4));
		    SearchResult.upsert(
			    {
			    	appUUID: appUUID,
			    	title: title,
			  	    author: author,
			    },    
			    { 
			    	$set: { result: result }
	    		}
    		);
	   	});
  	}
});