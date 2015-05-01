module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here


    // Check if new user
    app.get('/examples/account-management/new-user-check', function (req, res) {

      switch (req.query['new-user']){
      	case 'no'	: 	res.redirect('examples/account-management/create-account');
      	case 'yes'	:  	res.redirect('examples/account-management/sign-in');
      	default		:   res.render('examples/account-management/new-user-check');
      }

    });


    // Create account using email, mobile or username
    app.get('/examples/account-management/create-account-2', function (req, res) {

      switch (req.query['sign-in']){
        case 'email'  :   res.redirect('examples/account-management/create-account-email');
        case 'mobile' :   res.redirect('examples/account-management/create-account-mobile');
        case 'neither':   res.redirect('examples/account-management/create-account-username');
        default       :   res.render('examples/account-management/create-account-2');
      }

    });



  }
};
