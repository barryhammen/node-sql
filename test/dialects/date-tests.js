'use strict';

var Harness = require('./support');
var customer = Harness.defineCustomerTable();
var Sql = require('../../lib');

Harness.test({
  query: customer.select(Sql.functions.YEAR(customer.metadata)),
  pg: {
    text  : 'SELECT EXTRACT(YEAR FROM "customer"."metadata") FROM "customer"',
    string: 'SELECT EXTRACT(YEAR FROM "customer"."metadata") FROM "customer"'
  },
  sqlite: {
    text  : 'SELECT strftime(\'%Y\', "customer"."metadata") FROM "customer"',
    string: 'SELECT strftime(\'%Y\', "customer"."metadata") FROM "customer"'
  },
  mysql: {
    text  : 'SELECT YEAR(`customer`.`metadata`) FROM `customer`',
    string: 'SELECT YEAR(`customer`.`metadata`) FROM `customer`'
  },
  mssql: {
    text  : 'SELECT DATEPART(year, [customer].[metadata]) FROM [customer]',
    string: 'SELECT DATEPART(year, [customer].[metadata]) FROM [customer]'
  },
  oracle: {
    text  : 'SELECT EXTRACT(YEAR FROM "customer"."metadata") FROM "customer"',
    string: 'SELECT EXTRACT(YEAR FROM "customer"."metadata") FROM "customer"'
  },
  params: []
});

Harness.test({
  query: customer.select(Sql.functions.MONTH(customer.metadata)),
  pg: {
    text  : 'SELECT EXTRACT(MONTH FROM "customer"."metadata") FROM "customer"',
    string: 'SELECT EXTRACT(MONTH FROM "customer"."metadata") FROM "customer"'
  },
  sqlite: {
    text  : 'SELECT strftime(\'%m\', "customer"."metadata") FROM "customer"',
    string: 'SELECT strftime(\'%m\', "customer"."metadata") FROM "customer"'
  },
  mysql: {
    text  : 'SELECT MONTH(`customer`.`metadata`) FROM `customer`',
    string: 'SELECT MONTH(`customer`.`metadata`) FROM `customer`'
  },
  mssql: {
    text  : 'SELECT DATEPART(month, [customer].[metadata]) FROM [customer]',
    string: 'SELECT DATEPART(month, [customer].[metadata]) FROM [customer]'
  },
  oracle: {
    text  : 'SELECT EXTRACT(MONTH FROM "customer"."metadata") FROM "customer"',
    string: 'SELECT EXTRACT(MONTH FROM "customer"."metadata") FROM "customer"'
  },
  params: []
});

Harness.test({
  query: customer.select(Sql.functions.DAY(customer.metadata)),
  pg: {
    text  : 'SELECT EXTRACT(DAY FROM "customer"."metadata") FROM "customer"',
    string: 'SELECT EXTRACT(DAY FROM "customer"."metadata") FROM "customer"'
  },
  sqlite: {
    text  : 'SELECT strftime(\'%d\', "customer"."metadata") FROM "customer"',
    string: 'SELECT strftime(\'%d\', "customer"."metadata") FROM "customer"'
  },
  mysql: {
    text  : 'SELECT DAY(`customer`.`metadata`) FROM `customer`',
    string: 'SELECT DAY(`customer`.`metadata`) FROM `customer`'
  },
  mssql: {
    text  : 'SELECT DATEPART(day, [customer].[metadata]) FROM [customer]',
    string: 'SELECT DATEPART(day, [customer].[metadata]) FROM [customer]'
  },
  oracle: {
    text  : 'SELECT EXTRACT(DAY FROM "customer"."metadata") FROM "customer"',
    string: 'SELECT EXTRACT(DAY FROM "customer"."metadata") FROM "customer"'
  },
  params: []
});

Harness.test({
  query: customer.select(Sql.functions.HOUR(customer.metadata)),
  pg: {
    text  : 'SELECT EXTRACT(HOUR FROM "customer"."metadata") FROM "customer"',
    string: 'SELECT EXTRACT(HOUR FROM "customer"."metadata") FROM "customer"'
  },
  sqlite: {
    text  : 'SELECT strftime(\'%H\', "customer"."metadata") FROM "customer"',
    string: 'SELECT strftime(\'%H\', "customer"."metadata") FROM "customer"'
  },
  mysql: {
    text  : 'SELECT HOUR(`customer`.`metadata`) FROM `customer`',
    string: 'SELECT HOUR(`customer`.`metadata`) FROM `customer`'
  },
  mssql: {
    text  : 'SELECT DATEPART(hour, [customer].[metadata]) FROM [customer]',
    string: 'SELECT DATEPART(hour, [customer].[metadata]) FROM [customer]'
  },
  oracle: {
    text  : 'SELECT EXTRACT(HOUR FROM "customer"."metadata") FROM "customer"',
    string: 'SELECT EXTRACT(HOUR FROM "customer"."metadata") FROM "customer"'
  },
  params: []
});

Harness.test({
  query: customer.select(Sql.functions.CURRENT_TIMESTAMP()),
  pg: {
    text  : 'SELECT CURRENT_TIMESTAMP FROM "customer"',
    string: 'SELECT CURRENT_TIMESTAMP FROM "customer"'
  },
  sqlite: {
    text  : 'SELECT CURRENT_TIMESTAMP FROM "customer"',
    string: 'SELECT CURRENT_TIMESTAMP FROM "customer"'
  },
  mysql: {
    text  : 'SELECT CURRENT_TIMESTAMP FROM `customer`',
    string: 'SELECT CURRENT_TIMESTAMP FROM `customer`'
  },
  mssql: {
    text  : 'SELECT CURRENT_TIMESTAMP FROM [customer]',
    string: 'SELECT CURRENT_TIMESTAMP FROM [customer]'
  },
  oracle: {
    text  : 'SELECT CURRENT_TIMESTAMP FROM "customer"',
    string: 'SELECT CURRENT_TIMESTAMP FROM "customer"'
  },
  params: []
});