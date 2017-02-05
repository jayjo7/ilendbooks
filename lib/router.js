Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {

	name:      'home',
	template:  'home'
});

Router.route('/signup', {

	name:      'signup',
	template:  'signup'
});

Router.route('/verify-email/:token', {
	name: 'verify-email',
	action(){
		console.log('this.params.token=' + this.params.token);
		Accounts.verifyEmail(this.params.token, (error) => {
			if(error) {
				Bert.alert (error.reason, 'danger');
				Router.go('/emailVerificationFail')
			}
			else {
				Router.go('/emailVerified')
				Bert.alert( 'Email verified! Thanks!', 'success' );
			}

		});
	}
});

Router.route('/emailVerified', {

	name:      'emailVerified',
	template:  'emailVerified'
});

Router.route('/emailVerificationFail', {

	name:      'emailVerificationFail',
	template:  'emailVerificationFail'
});

Router.route('/login', {

	name:      'login',
	template:  'login'
});

Router.route('/search', {

	name:      'search',
	template:  'search'
});

Router.route('/searchResult', {

	name:      'searchResult',
	template:  'searchResult'
});

Router.route('/aboutUs', {

	name:      'aboutUs',
	template:  'aboutUs'
});

Router.route('/borrow', {

	name:      'borrow',
	template:  'borrow'
});

Router.route('/lend', {

	name:      'lend',
	template:  'lend'
});

