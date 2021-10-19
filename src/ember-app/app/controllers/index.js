import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.desktop.caption'),
          title: i18n.t('forms.application.sitemap.desktop.title'),
          children: [{
            link: 'i-i-s-hotel-employee-l',
            caption: i18n.t('forms.application.sitemap.desktop.i-i-s-hotel-employee-l.caption'),
            title: i18n.t('forms.application.sitemap.desktop.i-i-s-hotel-employee-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-hotel-visit-l',
            caption: i18n.t('forms.application.sitemap.desktop.i-i-s-hotel-visit-l.caption'),
            title: i18n.t('forms.application.sitemap.desktop.i-i-s-hotel-visit-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-hotel-hotel-l',
            caption: i18n.t('forms.application.sitemap.desktop.i-i-s-hotel-hotel-l.caption'),
            title: i18n.t('forms.application.sitemap.desktop.i-i-s-hotel-hotel-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-hotel-person-l',
            caption: i18n.t('forms.application.sitemap.desktop.i-i-s-hotel-person-l.caption'),
            title: i18n.t('forms.application.sitemap.desktop.i-i-s-hotel-person-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})