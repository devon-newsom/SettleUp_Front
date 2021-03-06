﻿import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.belongsTo('user'),
  description: DS.attr('string'),
  created: DS.attr('date'),
  content: DS.hasMany('detail')
});
