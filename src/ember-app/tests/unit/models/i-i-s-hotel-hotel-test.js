import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hotel-hotel', 'Unit | Model | i-i-s-hotel-hotel', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
