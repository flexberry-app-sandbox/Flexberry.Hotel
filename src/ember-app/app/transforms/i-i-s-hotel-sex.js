import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import SexEnum from '../enums/i-i-s-hotel-sex';

export default FlexberryEnum.extend({
  enum: SexEnum,
  sourceType: 'IIS.Hotel.Sex'
});
