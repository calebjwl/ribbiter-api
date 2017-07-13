'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {
  user() {
    this.belongsTo('App/Model/User', 'id', 'user_id');
  }
}

module.exports = Post
