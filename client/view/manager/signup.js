Template.signup.events({
  'submit form' ( event, template ) {
    event.preventDefault();
    
    let user = {
      email: template.find( '[name="emailAddress"]' ).value,
      password: template.find( '[name="password"]' ).value
    };
    console.log('Email Address = ' + user.email);
    console.log('password= ' + user.password);
    Accounts.createUser( user, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        Meteor.call( 'sendVerificationLink', ( error, response ) => {
          if ( error ) {
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Welcome!', 'success' );
          }
        });
      }
    });
  }
});

Template.signup.helpers({

    getCurrentUserId: function() {
        return Meteor.user().emails[0].address;
  }
});