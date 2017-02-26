Template.search.events({
  	'submit form' ( event, template ) {
    	event.preventDefault();

    	var title = event.target.title.value;
		  var author = event.target.author.value;

		  console.log("title="+ title);
		  console.log("author=" + author);
      Bert.alert( "You got it, Jay", 'danger' );
      var appUUID = Session.get('appUUID');
      Session.setAuth("title", title);
      Session.setAuth("author", author);
      console.log("search:title="+ Session.get('title'));
      console.log("search:author=" + Session.get('author'));

//      var response = Meteor.call ( 'itemSearch', appUUID, title, author);
//      Bert.alert( "got the response from api, Jay" + response, 'danger' );
//      console.log('response =' +  JSON.stringify(response, null, 4));
//      Session.set('itemSearchResponse', response);
//      Router.go('searchResult');

      Meteor.call('itemSearch', appUUID, title, author, function (error, result) {

        if(error) {

          Bert.alert( error, 'danger' );

        } else {
            console.log('response =' +  JSON.stringify(result, null, 4));
            Session.set('itemSearchResponse', result);
            Router.go('searchResult');
        }

     });

//  		Meteor.call( 'itemSearch', title, author, ( error, response ) => {
//            if ( error ) {
//              Bert.alert( error.reason, 'danger' );
//            } else {
//              Bert.alert( 'itemSearch was called', 'success' );
//              console.log('response =' +  JSON.stringify(response, null, 4));
//              Session.set('itemSearchResponse', response);
//            }
//
//            Router.go('searchResult');
//          });
 	 }	
})