Template.searchResult.helpers({

	getSearchAuthor: function() {

		var searchResult = Session.get('SearchResult');
		console.log("getSearchAuthor:searchResult="+searchResult);
		return searchResult.author;

	},

	getSearchResults:function() {

		var searchResult = Session.get('SearchResult');
		return searchResult.result.results;

	},

	getAuthor: function (ItemAttributes){

		return ItemAttributes[0].Author[0];
	},

	getBinding: function (ItemAttributes){

		return ItemAttributes[0].Binding[0];
	},
	getEAN: function (ItemAttributes){

		return ItemAttributes[0].EAN[0];
	},
	getEdition: function (ItemAttributes){

		return ItemAttributes[0].Edition[0];
	},
	getISBN: function (ItemAttributes){

		return ItemAttributes[0].ISBN[0];
	},
	getManufacturer: function (ItemAttributes){

		return ItemAttributes[0].Manufacturer[0];
	},
	getNumberOfPages: function (ItemAttributes){

		return ItemAttributes[0].NumberOfPages[0];
	},
	getPublicationDate: function (ItemAttributes){

		return ItemAttributes[0].PublicationDate[0];
	},
	getPublisher: function (ItemAttributes){

		return ItemAttributes[0].Publisher[0];
	},
	getTitle: function (ItemAttributes){

		return ItemAttributes[0].Title[0];
	},

	getSmallImage: function (SmallImage){
		//console.log('getSmallImage:URL=' + SmallImage[0].URL[0]);
		return SmallImage[0].URL[0];
	},
	getMediumImage: function (MediumImage){
		//console.log('getMediumImage:URL=' + MediumImage[0].URL[0]);
		return MediumImage[0].URL[0];
	},
	getLargeImage: function (LargeImage){
		//console.log('getLargeImage:URL=' + LargeImage[0].URL[0]);
		return LargeImage[0].URL[0];
	},

});