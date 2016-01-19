'use strict';

angular.module('sampleRecordkeepApp.auth', [
  'sampleRecordkeepApp.constants',
  'sampleRecordkeepApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
