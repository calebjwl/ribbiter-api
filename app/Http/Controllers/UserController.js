'use strict'

class UserController {
  const User = use('app/Model/User');

  * index(request, response) {
    const users = yield User.with().fetch();

    response.jsonApi('User', users);
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const Hash = use('Hash');
    const input = request.only('email', 'username', 'password');
    input.password = yield Hash.make(input.password);

    const newUser = yield User.create(input);

    response.json(newUser.toJSON());
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = UserController
