# angular-slimScroll
Angular JS implementation of jQuery-slimScroll without JQuery Dependencies

#### ngSlimscroll
AngularJS implementation of slimScroll

Originally developed by Piotr Rochala ([http://rocha.la](http://rocha.la))
[jQuery version](https://github.com/rochal/jQuery-slimScroll)

Install
-------

#### With bower:

    $ bower install angular-slimScroll --save

#### With npm

    $ npm install angular-slimScroll

#### Example Configuration (bower)
```html
<!DOCTYPE html>
<html ng-app="app">
<body ng-controller="Ctrl as ctrl">

  <div ng-slimscroll>long content ... </div>

  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js"></script>
  <script type="text/javascript" src="bower_components/ngSlimscroll/src/js/ngSlimscroll.js"></script>
  <script type="text/javascript">
    var app = angular.module('app', ['ngSlimScroll']);
    app.controller('Ctrl', [function() {
	  var self = this;
    }]);
</script>
</body>
</html>
```


