'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()
      table.string('body');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
