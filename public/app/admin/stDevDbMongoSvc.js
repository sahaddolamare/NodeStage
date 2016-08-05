angular.module('stage').factory('stDevDbMongoSvc', function() {
  return {
    cloud: {
      view: 'cloudMongo',
      status: false,
      streamWell: '',
      endPoint: '/api/devdash/remoteMongo/',
      viewType: 'cmd',
      getStream: function() { return this.streamWell }
    },
    dev: {
      view: 'devMongo',
      status: false,
      streamWell: '',
      endPoint: '/api/devdash/localMongo/',
      viewType: 'cmd',
      getStream: function() { return this.streamWell }
    },
  };
});