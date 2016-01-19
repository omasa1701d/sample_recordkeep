'use strict';

angular.module('sampleRecordkeepApp', [
  'sampleRecordkeepApp.auth',
  'sampleRecordkeepApp.admin',
  'sampleRecordkeepApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
