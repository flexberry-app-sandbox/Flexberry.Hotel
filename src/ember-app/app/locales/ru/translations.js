import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'HotelApp',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'HotelApp',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HotelApp',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        desktop: {
          caption: 'Desktop',
          title: 'Desktop',
          'i-i-s-hotel-employee-l': {
            caption: 'Сотрудники',
            title: 'Employee'
          },
          'i-i-s-hotel-visit-l': {
            caption: 'Визиты',
            title: 'Visit'
          },
          'i-i-s-hotel-hotel-l': {
            caption: 'Отели',
            title: 'Hotel'
          },
          'i-i-s-hotel-person-l': {
            caption: 'Гости',
            title: 'Person'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
