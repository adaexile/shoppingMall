class HomeController {

    constructor($scope) {
        'ngInject';
        this.name = 'home';
        let hello = "hellow";
        this.message;
        this.scope = $scope;
    }

    check() {
        setTimeout(() => { console.log("print") }, 3000);
    }
    sayHi() {
        this.message = this.scope.name
    }
}

export default HomeController;