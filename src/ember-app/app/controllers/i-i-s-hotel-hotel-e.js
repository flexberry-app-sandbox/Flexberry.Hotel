import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-hotel-hotel-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-hotel-hotel-employee+employee':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'firstName',
            required: true,
            relationName: 'employee',
            projection: 'EmployeeL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
