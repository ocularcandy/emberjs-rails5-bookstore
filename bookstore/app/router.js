import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // use path option to tell Router that we want to list books at '/'
  // and have an author page at '/author/:author_id'
  this.route('books', { path: '/' });
  this.route('author', { path: '/author/:author_id' });
});

export default Router;
