
Template.registerHelper('getSearchResult', function()
{
	var appUUID = Session.get('appUUID');
	var title = Session.get('title');
    var author = Session.get('author');
    console.log('appUUID=' + appUUID);
	console.log('title=' + title);
	console.log('author=' + author);
	//var result = SearchResult.findOne();
	var result = SearchResult.findOne({$and : [{appUUID: appUUID}, {title:title}, {author:author}]});

	//var result = SearchResult.findOne({$and : [{appUUID: appUUID}, {title:title}, {author:author}, {results : {"$exists" : true, "$ne" : ""}}]});
	console.log('result='+ result);
	for (resultKey in result)
	{
		console.log(result[resultKey]);
	}
	Session.set('SearchResult', result);
	return result;
});