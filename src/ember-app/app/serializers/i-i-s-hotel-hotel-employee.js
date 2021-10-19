import { Serializer as HotelEmployeeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-hotel-employee';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(HotelEmployeeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
