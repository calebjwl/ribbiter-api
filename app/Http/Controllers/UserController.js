'use strict'

class UserController {
  const User = use('App/Model/User');

  * index(request, response) {
    const users = yield User.with().fetch();

    response.jsonApi('User', users);
  }

  * store(request, response) {
    const Hash = use('Hash');
    const input = request.only('email', 'username', 'password');
    input.password = yield Hash.make(input.password);

    const newUser = yield User.create(input);

    response.send(newUser);
  }

  * login(request, response) {
    const Hash = use('Hash');
    const input = request.only('username', 'password');

    try {
      const user = yield User.findBy('email', input.email);

      yield Hash.verify(input.password, user.password);
      const jwt = yield request.auth.generate(user);

      return response.json({ access_token: jwt });
    } catch(e) {
      return response.status(401).json({
        error: 'User failed to login'
      });
    }
  }
}

module.exports = UserController
