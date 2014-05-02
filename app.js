var App = Ember.Application.create({
  LOG_TRANSITIONS: true
  });

App.Router.map(function() {
  this.route('about', { path: '/aboutus'});
  this.route('credits', {path: '/thanks'});
});

App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'img/hug.jpg',
  time: function() {
    return(new Date()).toDateString()
  }.property()
});

App.AboutController = Ember.Controller.extend({
  contactName: "Hallbeezy",
  avatar: 'img/avatar.jpg'

});
