'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments('id');
      table.timestamps();

      table.string('email').unique();
      table.string('username').unique();
      table.string('password');
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
