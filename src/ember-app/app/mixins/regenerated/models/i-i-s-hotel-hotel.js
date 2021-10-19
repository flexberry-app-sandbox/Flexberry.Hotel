import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  address: DS.attr('string'),
  manager: DS.belongsTo('i-i-s-hotel-employee', { inverse: null, async: false }),
  rooms: DS.hasMany('i-i-s-hotel-room', { inverse: 'hotel', async: false }),
  employees: DS.hasMany('i-i-s-hotel-hotel-employee', { inverse: 'hotel', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-hotel-hotel.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  address: {
    descriptionKey: 'models.i-i-s-hotel-hotel.validations.address.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  manager: {
    descriptionKey: 'models.i-i-s-hotel-hotel.validations.manager.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  rooms: {
    descriptionKey: 'models.i-i-s-hotel-hotel.validations.rooms.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  employees: {
    descriptionKey: 'models.i-i-s-hotel-hotel.validations.employees.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('HotelE', 'i-i-s-hotel-hotel', {
    name: attr('Name', { index: 0 }),
    address: attr('Address', { index: 1 }),
    manager: belongsTo('i-i-s-hotel-employee', 'Manager', {
      firstName: attr('First name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'firstName' }),
    rooms: hasMany('i-i-s-hotel-room', 'Rooms', {
      number: attr('Number', { index: 0 })
    }),
    employees: hasMany('i-i-s-hotel-hotel-employee', 'Employees', {
      startWorkDate: attr('Start work date', { index: 0 }),
      endWorkDate: attr('End work date', { index: 1 }),
      employee: belongsTo('i-i-s-hotel-employee', 'Employee', {
        firstName: attr('First name', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'firstName' })
    })
  });

  modelClass.defineProjection('HotelL', 'i-i-s-hotel-hotel', {
    name: attr('Name', { index: 0 }),
    address: attr('Address', { index: 1 }),
    manager: belongsTo('i-i-s-hotel-employee', 'First name', {
      firstName: attr('First name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
