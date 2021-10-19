import { Serializer as VisitSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-visit';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(VisitSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
