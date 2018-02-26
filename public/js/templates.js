angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\n  <div class="panel">\n    <div class="panel-heading">\n      <h3 class="panel-title">Contact Form</h3>\n    </div>\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="sendContactForm()" class="form-horizontal">\n        <div class="form-group">\n          <label for="name" class="col-sm-2">Name</label>\n          <div class="col-sm-8">\n            <input type="text" name="name" id="name" class="form-control" ng-model="contact.name" autofocus>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="email" class="col-sm-2">Email</label>\n          <div class="col-sm-8">\n            <input type="email" name="email" id="email" class="form-control" ng-model="contact.email">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="message" class="col-sm-2">Body</label>\n          <div class="col-sm-8">\n            <textarea name="message" id="message" rows="7" class="form-control" ng-model="contact.message"></textarea>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-2 col-sm-8">\n            <button type="submit" class="btn btn-primary">Send</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/finished.html','<div class="container">\r\n        <div class="row">\r\n          <div class="col-md-12">\r\n            <div class="panel">\r\n              <div class="panel-body">\r\n                <h3>Finished</h3>\r\n                <p>Remember all the tv shows that you have finished watching...</p>\r\n                <a href="#" role="button" class="btn btn-default">View details</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      ');
$templateCache.put('partials/footer.html','<footer>\n  <p>\xA9 2016 Company, Inc. All Rights Reserved.</p>\n</footer>');
$templateCache.put('partials/forgot.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="forgotPassword()">\n        <legend>Forgot Password</legend>\n        <div class="form-group">\n          <p>Enter your email address below and we\'ll send you password reset instructions.</p>\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email" autofocus>\n        </div>\n        <button type="submit" class="btn btn-primary">Reset Password</button>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/header.html','<nav ng-controller="HeaderCtrl" class="navbar navbar-default navbar-static-top">\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" data-toggle="collapse" data-target="#navbar" class="navbar-toggle collapsed">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a href="/" class="navbar-brand">TV Track</a>\n    </div>\n    <div id="navbar" class="navbar-collapse collapse">\n      <ul class="nav navbar-nav">\n        <li ng-class="{ active: isActive(\'/\')}"><a href="/">Watchlist</a></li>\n        <li ng-class="{ active: isActive(\'/waiting\')}"><a href="/waiting">Waiting</a></li>\n        <li ng-class="{ active: isActive(\'/finished\')}"><a href="/finished">Finished</a></li>\n        <li ng-class="{ active: isActive(\'/contact\')}"><a href="/contact">Contact</a></li>\n      </ul>\n      <ul ng-if="isAuthenticated()" class="nav navbar-nav navbar-right">\n        <li class="dropdown">\n          <a href="#" data-toggle="dropdown" class="navbar-avatar dropdown-toggle">\n            <img ng-src="{{currentUser.picture || currentUser.gravatar}}"> {{currentUser.name || currentUser.email || currentUser.id}} <i class="caret"></i>\n          </a>\n          <ul class="dropdown-menu">\n            <li><a href="/account">My Account</a></li>\n            <li class="divider"></li>\n            <li><a href="#" ng-click="logout()"}>Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul ng-if="!isAuthenticated()" class="nav navbar-nav navbar-right">\n        <li ng-class="{ active: isActive(\'/login\')}"><a href="/login">Log in</a></li>\n        <li ng-class="{ active: isActive(\'/signup\')}"><a href="/signup">Sign up</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n');
$templateCache.put('partials/home.html','<div class="container">\n  <div class="row">\n    <div class="col-md-12">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>Watchlist</h3>\n          <p>Keep track of all the tv series you are actively watching...</p>\n          <a href="#" role="button" class="btn btn-primary" ng-click="goToCreate()">Add new show</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/login.html','<div class="container login-container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <form ng-submit="login()">\n        <legend>Log In</legend>\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email" autofocus>\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" id="password" placeholder="Password" class="form-control" ng-model="user.password">\n        </div>\n        <div class="form-group"><a href="/forgot"><strong>Forgot your password?</strong></a></div>\n        <button type="submit" class="btn btn-primary">Log in</button>\n      </form>\n      <div class="hr-title"><span>or</span></div>\n      <div class="btn-toolbar text-center">\n      </div>\n    </div>\n  </div>\n  <p class="text-center">\n    Don\'t have an account? <a href="/signup"><strong>Sign up</strong></a>\n  </p>\n</div>\n');
$templateCache.put('partials/profile.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="updateProfile()" class="form-horizontal">\n        <legend>Profile Information</legend>\n        <div class="form-group">\n          <label for="email" class="col-sm-3">Email</label>\n          <div class="col-sm-7">\n            <input type="email" name="email" id="email" class="form-control" ng-model="profile.email">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="name" class="col-sm-3">Name</label>\n          <div class="col-sm-7">\n            <input type="text" name="name" id="name" class="form-control" ng-model="profile.name">\n          </div>\n        </div>\n        <div class="form-group">\n          <label class="col-sm-3">Gender</label>\n          <div class="col-sm-4">\n            <label class="radio-inline radio col-sm-4">\n              <input type="radio" name="gender" value="male" ng-checked="profile.gender === \'male\'"><span>Male</span>\n            </label>\n            <label class="radio-inline col-sm-4">\n              <input type="radio" name="gender" value="female" ng-checked="profile.gender === \'female\'"><span>Female</span>\n            </label>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="location" class="col-sm-3">Location</label>\n          <div class="col-sm-7">\n            <input type="text" name="location" id="location" class="form-control" ng-model="profile.location">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="website" class="col-sm-3">Website</label>\n          <div class="col-sm-7">\n            <input type="text" name="website" id="website" class="form-control" ng-model="profile.website">\n          </div>\n        </div>\n        <div class="form-group">\n          <label class="col-sm-3">Gravatar</label>\n          <div class="col-sm-4">\n            <img ng-src="{{profile.gravatar}}" class="profile" width="100" height="100">\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-3 col-sm-4">\n            <button type="submit" class="btn btn-primary">Update Profile</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class="panel">\n    <div class="panel-body">\n      <form ng-submit="changePassword()" class="form-horizontal">\n        <legend>Change Password</legend>\n        <div class="form-group">\n          <label for="password" class="col-sm-3">New Password</label>\n          <div class="col-sm-7">\n            <input type="password" name="password" id="password" class="form-control" ng-model="profile.password">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="confirm" class="col-sm-3">Confirm Password</label>\n          <div class="col-sm-7">\n            <input type="password" name="confirm" id="confirm" class="form-control" ng-model="profile.confirm">\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-4 col-sm-offset-3">\n            <button type="submit" class="btn btn-primary">Change Password</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class="panel">\n    <div class="panel-body">\n      <div class="form-horizontal">\n        <legend>Linked Accounts</legend>\n        <div class="form-group">\n          <div class="col-sm-offset-3 col-sm-4">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="panel">\n    <div class="panel-body">\n      <form ng-submit="deleteAccount()" class="form-horizontal">\n        <legend>Delete Account</legend>\n        <div class="form-group">\n          <p class="col-sm-offset-3 col-sm-9">You can delete your account, but keep in mind this action is irreversible.</p>\n          <div class="col-sm-offset-3 col-sm-9">\n            <button type="submit" class="btn btn-danger">Delete my account</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/reset.html','<div class="container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n        <form ng-submit="resetPassword()">\n          <legend>Reset Password</legend>\n          <div class="form-group">\n            <label for="password">New Password</label>\n            <input type="password" name="password" id="password" placeholder="New password" class="form-control" ng-model="user.password" autofocus>\n          </div>\n          <div class="form-group">\n            <label for="confirm">Confirm Password</label>\n            <input type="password" name="confirm" id="confirm" placeholder="Confirm password" class="form-control" ng-model="user.confirm">\n          </div>\n          <div class="form-group">\n            <button type="submit" class="btn btn-primary">Change Password</button>\n          </div>\n        </form>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/show.html','<div class="container login-container">\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <div class="panel">\r\n                <div class="panel-body">\r\n                    <h3>Add new show</h3>\r\n                    <br>\r\n                    <form ng-submit="saveShow(show)" class="form-horizontal">\r\n                        <div class="form-group">\r\n                            <label for="name" class="col-sm-2">Name</label>\r\n                            <div class="col-sm-8">\r\n                                <input type="text" name="name" id="name" class="form-control" ng-model="show.name" autofocus>\r\n                            </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <label for="season" class="col-sm-2">Season</label>\r\n                            <div class="col-sm-8">\r\n                                <input type="number" name="season" id="season" class="form-control" ng-model="show.season">\r\n                            </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <label for="list" class="col-sm-2">Add to list</label>\r\n                            <div class="col-sm-8">\r\n                                <select name="list" id="list" class="form-control" ng-model="show.list">\r\n                                    <option value="watching">Watching</option>\r\n                                    <option value="waiting">Waiting</option>\r\n                                    <option value="finished">Finished</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class="form-group">\r\n                            <div class="col-sm-offset-2 col-sm-8">\r\n                                <button type="submit" class="btn btn-primary">Save</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('partials/signup.html','<div class="container login-container">\n  <div class="panel">\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <form ng-submit="signup()">\n        <legend>Create an account</legend>\n        <div class="form-group">\n          <label for="name">Name</label>\n          <input type="text" name="name" id="name" placeholder="Name" class="form-control" ng-model="user.name" autofocus>\n        </div>\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Email" class="form-control" ng-model="user.email">\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" name="password" id="password" placeholder="Password" class="form-control" ng-model="user.password">\n        </div>\n        <div class="form-group">\n          <small class="text-muted">By signing up, you agree to the <a href="/">Terms of Service</a>.</small>\n        </div>\n        <button type="submit" class="btn btn-primary">Create an account</button>\n      </form>\n      <div class="hr-title"><span>or</span></div>\n      <div class="btn-toolbar text-center">\n      </div>\n    </div>\n  </div>\n  <p class="text-center">\n    Already have an account? <a href="/login"><strong>Log in</strong></a>\n  </p>\n</div>\n');
$templateCache.put('partials/waiting.html','<div class="container">\r\n        <div class="row">\r\n          <div class="col-md-12">\r\n            <div class="panel">\r\n              <div class="panel-body">\r\n                <h3>Waiting</h3>\r\n                <p>Keep an eye on the new seasons of your tv shows...</p>\r\n                <a href="#" role="button" class="btn btn-default">View details</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      ');}]);