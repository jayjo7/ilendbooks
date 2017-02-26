Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=emailAddress]').val();
        var password = $('[name=password]').val();
		Meteor.loginWithPassword(email, password, function(error){
		    if(error){
		        console.log(error.reason);
		        Bert.alert( error.reason, 'danger' );
		    } else {
		    	Bert.alert( 'Welcome!', 'success' );
		        Router.go("home");
		    }
    	});
	}
});