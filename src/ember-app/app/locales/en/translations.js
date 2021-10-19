import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHotelEmployeeLForm from './forms/i-i-s-hotel-employee-l';
import IISHotelHotelLForm from './forms/i-i-s-hotel-hotel-l';
import IISHotelPersonLForm from './forms/i-i-s-hotel-person-l';
import IISHotelRoomListForm from './forms/i-i-s-hotel-room-list';
import IISHotelVisitLForm from './forms/i-i-s-hotel-visit-l';
import IISHotelEmployeeEForm from './forms/i-i-s-hotel-employee-e';
import IISHotelHotelEForm from './forms/i-i-s-hotel-hotel-e';
import IISHotelPersonEForm from './forms/i-i-s-hotel-person-e';
import IISHotelVisitEditForm from './forms/i-i-s-hotel-visit-edit';
import IISHotelEmployeeModel from './models/i-i-s-hotel-employee';
import IISHotelHotelEmployeeModel from './models/i-i-s-hotel-hotel-employee';
import IISHotelHotelModel from './models/i-i-s-hotel-hotel';
import IISHotelPersonModel from './models/i-i-s-hotel-person';
import IISHotelRoomModel from './models/i-i-s-hotel-room';
import IISHotelVisitModel from './models/i-i-s-hotel-visit';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-hotel-employee': IISHotelEmployeeModel,
    'i-i-s-hotel-hotel-employee': IISHotelHotelEmployeeModel,
    'i-i-s-hotel-hotel': IISHotelHotelModel,
    'i-i-s-hotel-person': IISHotelPersonModel,
    'i-i-s-hotel-room': IISHotelRoomModel,
    'i-i-s-hotel-visit': IISHotelVisitModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        desktop: {
          caption: 'desktop',
          title: 'desktop',
          'i-i-s-hotel-employee-l': {
            caption: 'i-i-s-hotel-employee-l',
            title: 'i-i-s-hotel-employee-l'
          },
          'i-i-s-hotel-visit-l': {
            caption: 'i-i-s-hotel-visit-l',
            title: 'i-i-s-hotel-visit-l'
          },
          'i-i-s-hotel-hotel-l': {
            caption: 'i-i-s-hotel-hotel-l',
            title: 'i-i-s-hotel-hotel-l'
          },
          'i-i-s-hotel-person-l': {
            caption: 'i-i-s-hotel-person-l',
            title: 'i-i-s-hotel-person-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-hotel-employee-l': IISHotelEmployeeLForm,
    'i-i-s-hotel-hotel-l': IISHotelHotelLForm,
    'i-i-s-hotel-person-l': IISHotelPersonLForm,
    'i-i-s-hotel-room-list': IISHotelRoomListForm,
    'i-i-s-hotel-visit-l': IISHotelVisitLForm,
    'i-i-s-hotel-employee-e': IISHotelEmployeeEForm,
    'i-i-s-hotel-hotel-e': IISHotelHotelEForm,
    'i-i-s-hotel-person-e': IISHotelPersonEForm,
    'i-i-s-hotel-visit-edit': IISHotelVisitEditForm
  },

});

export default translations;
