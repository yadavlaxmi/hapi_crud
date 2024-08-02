
const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./config/knexfile');

const knex = Knex(knexConfig);
Model.knex(knex);


