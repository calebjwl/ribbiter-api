'use strict'

class PostController {
  * store(request, response) {
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

module.exports = PostController
