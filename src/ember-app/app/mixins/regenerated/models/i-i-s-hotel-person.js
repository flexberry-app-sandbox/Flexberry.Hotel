import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  fullName: DS.attr('string'),
  sex: DS.attr('i-i-s-hotel-sex')
});

export let ValidationRules = {
  fullName: {
    descriptionKey: 'models.i-i-s-hotel-person.validations.fullName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  sex: {
    descriptionKey: 'models.i-i-s-hotel-person.validations.sex.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PersonE', 'i-i-s-hotel-person', {
    fullName: attr('Full name', { index: 0 }),
    sex: attr('Sex', { index: 1 })
  });

  modelClass.defineProjection('PersonL', 'i-i-s-hotel-person', {
    fullName: attr('Full name', { index: 0 }),
    sex: attr('Sex', { index: 1 })
  });
};
