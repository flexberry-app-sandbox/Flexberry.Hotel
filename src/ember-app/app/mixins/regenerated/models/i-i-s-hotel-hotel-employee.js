import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  startWorkDate: DS.attr('date'),
  endWorkDate: DS.attr('date'),
  employee: DS.belongsTo('i-i-s-hotel-employee', { inverse: null, async: false }),
  hotel: DS.belongsTo('i-i-s-hotel-hotel', { inverse: 'employees', async: false })
});

export let ValidationRules = {
  startWorkDate: {
    descriptionKey: 'models.i-i-s-hotel-hotel-employee.validations.startWorkDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  endWorkDate: {
    descriptionKey: 'models.i-i-s-hotel-hotel-employee.validations.endWorkDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  employee: {
    descriptionKey: 'models.i-i-s-hotel-hotel-employee.validations.employee.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  hotel: {
    descriptionKey: 'models.i-i-s-hotel-hotel-employee.validations.hotel.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('HotelEmployeeE', 'i-i-s-hotel-hotel-employee', {
    startWorkDate: attr('Start work date', { index: 0 }),
    endWorkDate: attr('End work date', { index: 1 }),
    employee: belongsTo('i-i-s-hotel-employee', 'Employee', {
      firstName: attr('First name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'firstName' })
  });
};
