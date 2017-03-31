'use strict'

class UserController {

  * index(request, response) {
    //
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    const User = use('app/Model/User');
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
