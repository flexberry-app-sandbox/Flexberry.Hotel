import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  lastName: DS.attr('string'),
  sex: DS.attr('i-i-s-hotel-sex')
});

export let ValidationRules = {
  firstName: {
    descriptionKey: 'models.i-i-s-hotel-employee.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.i-i-s-hotel-employee.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-hotel-employee.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  sex: {
    descriptionKey: 'models.i-i-s-hotel-employee.validations.sex.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EmployeeE', 'i-i-s-hotel-employee', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    sex: attr('Sex', { index: 3 })
  });

  modelClass.defineProjection('EmployeeL', 'i-i-s-hotel-employee', {
    firstName: attr('First name', { index: 0 }),
    lastName: attr('Last name', { index: 1 }),
    middleName: attr('Middle name', { index: 2 }),
    sex: attr('Sex', { index: 3 })
  });
};
