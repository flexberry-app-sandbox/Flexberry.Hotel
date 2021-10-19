import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('number'),
  hotel: DS.belongsTo('i-i-s-hotel-hotel', { inverse: 'rooms', async: false })
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-hotel-room.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  hotel: {
    descriptionKey: 'models.i-i-s-hotel-room.validations.hotel.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RoomE', 'i-i-s-hotel-room', {
    number: attr('Number', { index: 0 })
  });

  modelClass.defineProjection('RoomL', 'i-i-s-hotel-room', {
    number: attr('Номер', { index: 0 }),
    hotel: belongsTo('i-i-s-hotel-hotel', 'Отель', {
      name: attr('Отель', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
