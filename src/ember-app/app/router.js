import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-hotel-employee-l');
  this.route('i-i-s-hotel-employee-e',
  { path: 'i-i-s-hotel-employee-e/:id' });
  this.route('i-i-s-hotel-employee-e.new',
  { path: 'i-i-s-hotel-employee-e/new' });
  this.route('i-i-s-hotel-hotel-l');
  this.route('i-i-s-hotel-hotel-e',
  { path: 'i-i-s-hotel-hotel-e/:id' });
  this.route('i-i-s-hotel-hotel-e.new',
  { path: 'i-i-s-hotel-hotel-e/new' });
  this.route('i-i-s-hotel-person-l');
  this.route('i-i-s-hotel-person-e',
  { path: 'i-i-s-hotel-person-e/:id' });
  this.route('i-i-s-hotel-person-e.new',
  { path: 'i-i-s-hotel-person-e/new' });
  this.route('i-i-s-hotel-room-list');
  this.route('null',
  { path: 'null/:id' });
  this.route('null.new',
  { path: 'null/new' });
  this.route('i-i-s-hotel-visit-l');
  this.route('i-i-s-hotel-visit-edit',
  { path: 'i-i-s-hotel-visit-edit/:id' });
  this.route('i-i-s-hotel-visit-edit.new',
  { path: 'i-i-s-hotel-visit-edit/new' });
});

export default Router;
