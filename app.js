var App = Ember.Application.create({
  LOG_TRANSITIONS: true
  });

App.Router.map(function() {
  this.route('about', { path: '/aboutus'});
  this.route('credits', {path: '/thanks'});
  this.resource('products');
  this.resource('contacts');
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
  avatar: 'img/avatar.jpg',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Closed" : "Open";
  }.property()
});

App.ContactsRoute = Ember.Route.extend({
  model: function() {
    return App.CONTACTS;
  }

});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});


App.PRODUCTS = [
  {
    title: 'Magic Fortune',
    price: 99,
    description: "I will tell you your fortune, this one you don't want to miss!",
    isOnSale: true,
    image: 'img/fortune.jpg'
  },
  {
    title: 'Personalized Quote',
    price: 249,
    description: 'Have you ever wanted a quote, written just for you?',
    isOnSale: false,
    image: 'img/quote.jpg'
  }
  ];

  App.CONTACTS = [
  {
    name: "Henry the Pounder",
    about: "Henry is a strange fella who you met at the bar last thursday night, didn't you wonder how you got that stain on you pants?",
    avatar: 'img/henry.jpg'
  },
  {
    name: "Charles the Mangler",
    about: "Charles is your pastor and best friend for thirteen years, until one day... *light violin in the background. //Charles enters from stage left.",
    avatar: 'img/charles.jpg'
  }
  ];
