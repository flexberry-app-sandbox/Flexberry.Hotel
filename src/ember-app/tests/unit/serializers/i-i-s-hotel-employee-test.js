import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hotel-employee', 'Unit | Serializer | i-i-s-hotel-employee', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-hotel-employee',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-hotel-sex',

    'model:i-i-s-hotel-employee',
    'model:i-i-s-hotel-hotel-employee',
    'model:i-i-s-hotel-hotel',
    'model:i-i-s-hotel-person',
    'model:i-i-s-hotel-room',
    'model:i-i-s-hotel-visit',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
