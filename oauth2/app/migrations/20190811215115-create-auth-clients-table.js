'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('auth_clients', {
    id: {
      type: 'string',
      primaryKey: true
    },
    secret: 'string',
    redirect_uris: 'string',
    grants: 'string',
    access_token_lifetime: 'int',
    refresh_access_token_lifetime: 'int'
  }, callback)
};

exports.down = function(db, callback) {
  db.dropTable('auth_clients', callback)
};

exports._meta = {
  "version": 1
};
