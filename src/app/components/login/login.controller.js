// login.controller.js

class LoginController {

    constructor() {
        'ngInject';

        this.name = 'login';
        console.log("in constructor");
    }

    $onInit() {
        console.log("initializing");
    }

    $onDestroy() {
        console.log("destroying");
    }
}

export default LoginController;