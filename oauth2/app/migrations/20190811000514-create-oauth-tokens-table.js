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
  db.createTable('oauth_tokens', {
    access_token: {
      type: 'string',
      primaryKey: true
    },
    refresh_token: 'string',
    scope: 'string',
    access_token_expires_at: 'datetime',
    refresh_token_expires_at: 'datetime',
    client_id: 'string',
    user_id: 'int'
  }, callback)
};

exports.down = function(db, callback) {
  db.dropTable('oauth_tokens', callback)
};

exports._meta = {
  "version": 1
};
