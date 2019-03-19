
'use strict';
var server = require('../../server/server');

module.exports = function (eRxNowRegSrveRxNowRegSrvSoap) {

    var soapDataSource = server.datasources.epres;
    var eRxNowRegSrveRxNowRegSrvSoap;

    soapDataSource.once('connected', function () {
        // Create the model
        eRxNowRegSrveRxNowRegSrvSoap = soapDataSource.createModel('eRxNowRegSrveRxNowRegSrvSoap', {});
    });


    /**
     * UserNameExists
     * @param {Object} data
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    eRxNowRegSrveRxNowRegSrvSoap.UserNameExists = function (data, callback) {
        eRxNowRegSrveRxNowRegSrvSoap.UserNameExists(data, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * HelloFriend
     * @param {Object} data
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    eRxNowRegSrveRxNowRegSrvSoap.HelloFriend = function (data, callback) {
        eRxNowRegSrveRxNowRegSrvSoap.HelloFriend(data, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * AddSite
     * @param {Object} data
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    eRxNowRegSrveRxNowRegSrvSoap.AddSite = function (data, callback) {
        eRxNowRegSrveRxNowRegSrvSoap.AddSite(data, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * UpdSite
     * @param {Object} data
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    eRxNowRegSrveRxNowRegSrvSoap.UpdSite = function (data, callback) {
        eRxNowRegSrveRxNowRegSrvSoap.UpdSite(data, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * AddUser
     * @param {Object} data
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    eRxNowRegSrveRxNowRegSrvSoap.AddUser = function (data, callback) {
        eRxNowRegSrveRxNowRegSrvSoap.AddUser(data, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * UpdUser
     *@param {Object} data
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    eRxNowRegSrveRxNowRegSrvSoap.UpdUser = function (data, callback) {
        eRxNowRegSrveRxNowRegSrvSoap.UpdUser(data, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * ReleaseVersion
     * @param {Object} data
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    eRxNowRegSrveRxNowRegSrvSoap.ReleaseVersion = function (data, callback) {
        eRxNowRegSrveRxNowRegSrvSoap.ReleaseVersion(data, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    // Map to REST/HTTP

    eRxNowRegSrveRxNowRegSrvSoap.remoteMethod('UserNameExists',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'UserNameExists',
                    type: 'UserNameExists',
                    description: 'UserNameExists',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'UserNameExistsResponse',
                    description: 'UserNameExistsResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/UserNameExists' },
            description: 'UserNameExists'
        }
    );

    eRxNowRegSrveRxNowRegSrvSoap.remoteMethod('HelloFriend',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'data',
                    type: 'object',
                    description: 'HelloFriend',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'HelloFriendResponse',
                    description: 'HelloFriendResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/HelloFriend' },
            description: 'HelloFriend'
        }
    );

    eRxNowRegSrveRxNowRegSrvSoap.remoteMethod('AddSite',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'data',
                    type: 'Object',
                    description: 'AddSite',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'AddSiteResponse',
                    description: 'AddSiteResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/AddSite' },
            description: 'AddSite'
        }
    );

    eRxNowRegSrveRxNowRegSrvSoap.remoteMethod('UpdSite',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'data',
                    type: 'Object',
                    description: 'UpdSite',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'Object',
                    description: 'UpdSiteResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/UpdSite' },
            description: 'UpdSite'
        }
    );

    eRxNowRegSrveRxNowRegSrvSoap.remoteMethod('AddUser',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'data',
                    type: 'Object',
                    description: 'AddUser',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'AddUserResponse',
                    description: 'AddUserResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/AddUser' },
            description: 'AddUser'
        }
    );

    eRxNowRegSrveRxNowRegSrvSoap.remoteMethod('UpdUser',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'data',
                    type: 'Object',
                    description: 'UpdUser',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'UpdUserResponse',
                    description: 'UpdUserResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/UpdUser' },
            description: 'UpdUser'
        }
    );

    eRxNowRegSrveRxNowRegSrvSoap.remoteMethod('ReleaseVersion',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'data',
                    type: 'Object',
                    description: 'ReleaseVersion',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'ReleaseVersionResponse',
                    description: 'ReleaseVersionResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/ReleaseVersion' },
            description: 'ReleaseVersion'
        }
    );

}
