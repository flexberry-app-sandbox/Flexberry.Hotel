import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  startVisitDate: DS.attr('date'),
  endVisitdate: DS.attr('date'),
  person: DS.belongsTo('i-i-s-hotel-person', { inverse: null, async: false }),
  room: DS.belongsTo('i-i-s-hotel-room', { inverse: null, async: false })
});

export let ValidationRules = {
  startVisitDate: {
    descriptionKey: 'models.i-i-s-hotel-visit.validations.startVisitDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  endVisitdate: {
    descriptionKey: 'models.i-i-s-hotel-visit.validations.endVisitdate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  person: {
    descriptionKey: 'models.i-i-s-hotel-visit.validations.person.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  room: {
    descriptionKey: 'models.i-i-s-hotel-visit.validations.room.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('VisitE', 'i-i-s-hotel-visit', {
    startVisitDate: attr('Start visit date', { index: 0 }),
    endVisitdate: attr('End visitdate', { index: 1 }),
    person: belongsTo('i-i-s-hotel-person', 'Person', {
      fullName: attr('Full name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'fullName' }),
    room: belongsTo('i-i-s-hotel-room', 'Room', {
      number: attr('Number', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'number' })
  });

  modelClass.defineProjection('VisitL', 'i-i-s-hotel-visit', {
    startVisitDate: attr('Start visit date', { index: 0 }),
    endVisitdate: attr('End visitdate', { index: 1 }),
    person: belongsTo('i-i-s-hotel-person', 'Full name', {
      fullName: attr('Full name', { index: 2 })
    }, { index: -1, hidden: true }),
    room: belongsTo('i-i-s-hotel-room', 'Number', {
      number: attr('Number', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
