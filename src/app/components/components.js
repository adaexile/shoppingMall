import angular from 'angular';
import Login from './login/login.module';
import Home from './home/home.module';

let componentModule = angular.module('components', [

    Home, Login

])

.name;

export default componentModule;