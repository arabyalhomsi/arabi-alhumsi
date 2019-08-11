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
  db.createTable('auth_tokens', {
    client_id: { type: 'string', primaryKey: true },
    client_secret: 'string',
    scope: 'string',
    redirect_uris: 'string',
    access_token: 'string',
    expires_at: 'datetime',
    user_id: 'int',
    refresh_token: 'string'
  }, callback)
};

exports.down = function(db, callback) {
  db.dropTable('auth_tokens', callback)
};

exports._meta = {
  "version": 1
};
