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
  db.createTable('oauth_codes', {
    code: {
      type: 'string',
      primaryKey: true
    },
    redirect_uri: 'string',
    expires_at: 'datetime',
    scope: 'string',
    client_id: 'string',
    user_id: 'int'
  }, callback)
};

exports.down = function(db, callback) {
  db.dropTable('oauth_codes', callback)
};

exports._meta = {
  "version": 1
};
