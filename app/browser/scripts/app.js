import angular from 'angular';
import ngRouter from 'angular-route';
import ngMaterial from 'angular-material';
import ngAnimate from '../jspm_packages/github/angular/bower-angular-animate@1.4.9/angular-animate';
import ngMessages from 'angular-messages';
import {LegalEntityService} from './legal_entity/legalEntityService'; 
import {LegalEntityController} from './legal_entity/legalEntityController';
import {PickListService} from './common/pickListService';
// notice stylesheet loading from app.js
import '../jspm_packages/github/angular/bower-material@1.0.4/angular-material.css!';

angular.module('ghstsApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMessages'])
    .config(config)
    .service('pickListService', [PickListService])
    .service('legalEntityService', ['$http', LegalEntityService])
    .controller('legalEntityController', ['$mdDialog', '$mdSidenav', '$location', 'legalEntityService', 'pickListService', LegalEntityController]);

function config($routeProvider, $mdThemingProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: './splash.html' ,
            controller: LegalEntityController,
            controllerAs: '_ctrl'
        })
        .when('/manageLE', {
            templateUrl: './scripts/legal_entity/le-manage.html' ,
            controller: LegalEntityController,
            controllerAs: '_ctrl'
        });
    $routeProvider.otherwise({ redirectTo: '/home' });
    
    // set the theme
    $mdThemingProvider.theme('default');
    // test color
    //$mdThemingProvider.theme('default').primaryPalette('pink').accentPalette('orange');
}

config.$inject = ['$routeProvider', '$mdThemingProvider'];

