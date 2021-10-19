import { Serializer as HotelSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-hotel';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(HotelSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
