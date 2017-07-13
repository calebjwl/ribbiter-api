'use strict'

const Post = use('App/Model/Post')
class PostController {
  * index(request, response) {
    const posts = yield Post.with().fetch();

    response.jsonApi('Post', posts);
  }

  * store(request, response) {
    const userId = request.authUser.id;
    const input = request.only('body', userId);
    const post = Post.create(input);

    response.send(post);
  }
}

module.exports = PostController
