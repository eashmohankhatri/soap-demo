
'use strict';
var server = require('../../server/server');

module.exports = function (PartnerSvcPartnerSvcSoap12) {

    var soapDataSource = server.datasources.partnerDS;
    var PartnerSvcPartnerSvcSoap12;

    soapDataSource.once('connected', function () {
        // Create the model
        PartnerSvcPartnerSvcSoap12 = soapDataSource.createModel('PartnerSvcPartnerSvcSoap12', {});
    });


    /**
     * Version
     * @param {Version} Version Version
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.Version = function (data, callback) {
        PartnerSvcPartnerSvcSoap12.Version(data, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * HelloFriend
     * @param {HelloFriend} HelloFriend HelloFriend
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.HelloFriend = function (data, callback) {
        PartnerSvcPartnerSvcSoap12.HelloFriend(data, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetChangedPatients
     * @param {GetChangedPatients} GetChangedPatients GetChangedPatients
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetChangedPatients = function (GetChangedPatients, callback) {
        PartnerSvcPartnerSvcSoap12.GetChangedPatients(GetChangedPatients, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetAllChangedPatients
     * @param {GetAllChangedPatients} GetAllChangedPatients GetAllChangedPatients
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetAllChangedPatients = function (GetAllChangedPatients, callback) {
        PartnerSvcPartnerSvcSoap12.GetAllChangedPatients(GetAllChangedPatients, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetPatient
     * @param {GetPatient} GetPatient GetPatient
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetPatient = function (GetPatient, callback) {
        PartnerSvcPartnerSvcSoap12.GetPatient(GetPatient, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetDocumentedPatientVisits
     * @param {GetDocumentedPatientVisits} GetDocumentedPatientVisits GetDocumentedPatientVisits
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetDocumentedPatientVisits = function (GetDocumentedPatientVisits, callback) {
        PartnerSvcPartnerSvcSoap12.GetDocumentedPatientVisits(GetDocumentedPatientVisits, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetLicenseUserIDs
     * @param {GetLicenseUserIDs} GetLicenseUserIDs GetLicenseUserIDs
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetLicenseUserIDs = function (GetLicenseUserIDs, callback) {
        PartnerSvcPartnerSvcSoap12.GetLicenseUserIDs(GetLicenseUserIDs, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetUser
     * @param {GetUser} GetUser GetUser
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetUser = function (GetUser, callback) {
        PartnerSvcPartnerSvcSoap12.GetUser(GetUser, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetPatientFromDateTime
     * @param {GetPatientFromDateTime} GetPatientFromDateTime GetPatientFromDateTime
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetPatientFromDateTime = function (GetPatientFromDateTime, callback) {
        PartnerSvcPartnerSvcSoap12.GetPatientFromDateTime(GetPatientFromDateTime, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetPatientDemo
     * @param {GetPatientDemo} GetPatientDemo GetPatientDemo
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetPatientDemo = function (GetPatientDemo, callback) {
        PartnerSvcPartnerSvcSoap12.GetPatientDemo(GetPatientDemo, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * SavePatient
     * @param {SavePatient} SavePatient SavePatient
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.SavePatient = function (SavePatient, callback) {
        PartnerSvcPartnerSvcSoap12.SavePatient(SavePatient, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * PostHL7Message
     * @param {PostHL7Message} PostHL7Message PostHL7Message
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.PostHL7Message = function (PostHL7Message, callback) {
        PartnerSvcPartnerSvcSoap12.PostHL7Message(PostHL7Message, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetTaskCount
     * @param {GetTaskCount} GetTaskCount GetTaskCount
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetTaskCount = function (GetTaskCount, callback) {
        PartnerSvcPartnerSvcSoap12.GetTaskCount(GetTaskCount, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * LinkPartnerUser
     * @param {LinkPartnerUser} LinkPartnerUser LinkPartnerUser
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.LinkPartnerUser = function (LinkPartnerUser, callback) {
        PartnerSvcPartnerSvcSoap12.LinkPartnerUser(LinkPartnerUser, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * LinkPartnerUserName
     * @param {LinkPartnerUserName} LinkPartnerUserName LinkPartnerUserName
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.LinkPartnerUserName = function (LinkPartnerUserName, callback) {
        PartnerSvcPartnerSvcSoap12.LinkPartnerUserName(LinkPartnerUserName, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetNotifications
     * @param {GetNotifications} GetNotifications GetNotifications
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetNotifications = function (GetNotifications, callback) {
        PartnerSvcPartnerSvcSoap12.GetNotifications(GetNotifications, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * UpdateNotification
     * @param {UpdateNotification} UpdateNotification UpdateNotification
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.UpdateNotification = function (UpdateNotification, callback) {
        PartnerSvcPartnerSvcSoap12.UpdateNotification(UpdateNotification, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetTasks
     * @param {GetTasks} GetTasks GetTasks
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetTasks = function (GetTasks, callback) {
        PartnerSvcPartnerSvcSoap12.GetTasks(GetTasks, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetCCDFiles
     * @param {GetCCDFiles} GetCCDFiles GetCCDFiles
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetCCDFiles = function (GetCCDFiles, callback) {
        PartnerSvcPartnerSvcSoap12.GetCCDFiles(GetCCDFiles, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetPatientCCD
     * @param {GetPatientCCD} GetPatientCCD GetPatientCCD
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetPatientCCD = function (GetPatientCCD, callback) {
        PartnerSvcPartnerSvcSoap12.GetPatientCCD(GetPatientCCD, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetEPATaskStatus
     * @param {GetEPATaskStatus} GetEPATaskStatus GetEPATaskStatus
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetEPATaskStatus = function (GetEPATaskStatus, callback) {
        PartnerSvcPartnerSvcSoap12.GetEPATaskStatus(GetEPATaskStatus, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetPatientInfo
     * @param {GetPatientInfo} GetPatientInfo GetPatientInfo
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetPatientInfo = function (GetPatientInfo, callback) {
        PartnerSvcPartnerSvcSoap12.GetPatientInfo(GetPatientInfo, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * AddOfficeLocation
     * @param {AddOfficeLocation} AddOfficeLocation AddOfficeLocation
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.AddOfficeLocation = function (AddOfficeLocation, callback) {
        PartnerSvcPartnerSvcSoap12.AddOfficeLocation(AddOfficeLocation, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetOfficeLocations
     * @param {GetOfficeLocations} GetOfficeLocations GetOfficeLocations
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetOfficeLocations = function (GetOfficeLocations, callback) {
        PartnerSvcPartnerSvcSoap12.GetOfficeLocations(GetOfficeLocations, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * UpdateOfficeLocation
     * @param {UpdateOfficeLocation} UpdateOfficeLocation UpdateOfficeLocation
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.UpdateOfficeLocation = function (UpdateOfficeLocation, callback) {
        PartnerSvcPartnerSvcSoap12.UpdateOfficeLocation(UpdateOfficeLocation, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * SavePatientCCD
     * @param {SavePatientCCD} SavePatientCCD SavePatientCCD
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.SavePatientCCD = function (SavePatientCCD, callback) {
        PartnerSvcPartnerSvcSoap12.SavePatientCCD(SavePatientCCD, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetPendingScripts
     * @param {GetPendingScripts} GetPendingScripts GetPendingScripts
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetPendingScripts = function (GetPendingScripts, callback) {
        PartnerSvcPartnerSvcSoap12.GetPendingScripts(GetPendingScripts, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetFailedScripts
     * @param {GetFailedScripts} GetFailedScripts GetFailedScripts
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetFailedScripts = function (GetFailedScripts, callback) {
        PartnerSvcPartnerSvcSoap12.GetFailedScripts(GetFailedScripts, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * RetrieveScriptFromDocumentStore
     * @param {RetrieveScriptFromDocumentStore} RetrieveScriptFromDocumentStore RetrieveScriptFromDocumentStore
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.RetrieveScriptFromDocumentStore = function (RetrieveScriptFromDocumentStore, callback) {
        PartnerSvcPartnerSvcSoap12.RetrieveScriptFromDocumentStore(RetrieveScriptFromDocumentStore, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * SetDocumentStoreScriptToPrintedStatus
     * @param {SetDocumentStoreScriptToPrintedStatus} SetDocumentStoreScriptToPrintedStatus SetDocumentStoreScriptToPrintedStatus
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.SetDocumentStoreScriptToPrintedStatus = function (SetDocumentStoreScriptToPrintedStatus, callback) {
        PartnerSvcPartnerSvcSoap12.SetDocumentStoreScriptToPrintedStatus(SetDocumentStoreScriptToPrintedStatus, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * RegisterDeviceForSsoAndRetrieveRegistrationKey
     * @param {RegisterDeviceForSsoAndRetrieveRegistrationKey} RegisterDeviceForSsoAndRetrieveRegistrationKey RegisterDeviceForSsoAndRetrieveRegistrationKey
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.RegisterDeviceForSsoAndRetrieveRegistrationKey = function (RegisterDeviceForSsoAndRetrieveRegistrationKey, callback) {
        PartnerSvcPartnerSvcSoap12.RegisterDeviceForSsoAndRetrieveRegistrationKey(RegisterDeviceForSsoAndRetrieveRegistrationKey, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * EstablishMobileSso
     * @param {EstablishMobileSso} EstablishMobileSso EstablishMobileSso
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.EstablishMobileSso = function (EstablishMobileSso, callback) {
        PartnerSvcPartnerSvcSoap12.EstablishMobileSso(EstablishMobileSso, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    /**
     * GetPushNotificationLog
     * @param {GetPushNotificationLog} GetPushNotificationLog GetPushNotificationLog
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap12.GetPushNotificationLog = function (GetPushNotificationLog, callback) {
        PartnerSvcPartnerSvcSoap12.GetPushNotificationLog(GetPushNotificationLog, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    // Map to REST/HTTP

    PartnerSvcPartnerSvcSoap12.remoteMethod('Version',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'data',
                    type: 'Version',
                    description: 'Version',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'VersionResponse',
                    description: 'VersionResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/Version' },
            description: 'Version'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('HelloFriend',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'data',
                    type: 'HelloFriend',
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

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetChangedPatients',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetChangedPatients',
                    type: 'GetChangedPatients',
                    description: 'GetChangedPatients',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetChangedPatientsResponse',
                    description: 'GetChangedPatientsResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetChangedPatients' },
            description: 'GetChangedPatients'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetAllChangedPatients',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetAllChangedPatients',
                    type: 'GetAllChangedPatients',
                    description: 'GetAllChangedPatients',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetAllChangedPatientsResponse',
                    description: 'GetAllChangedPatientsResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetAllChangedPatients' },
            description: 'GetAllChangedPatients'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetPatient',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetPatient',
                    type: 'GetPatient',
                    description: 'GetPatient',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetPatientResponse',
                    description: 'GetPatientResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetPatient' },
            description: 'GetPatient'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetDocumentedPatientVisits',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetDocumentedPatientVisits',
                    type: 'GetDocumentedPatientVisits',
                    description: 'GetDocumentedPatientVisits',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetDocumentedPatientVisitsResponse',
                    description: 'GetDocumentedPatientVisitsResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetDocumentedPatientVisits' },
            description: 'GetDocumentedPatientVisits'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetLicenseUserIDs',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetLicenseUserIDs',
                    type: 'GetLicenseUserIDs',
                    description: 'GetLicenseUserIDs',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetLicenseUserIDsResponse',
                    description: 'GetLicenseUserIDsResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetLicenseUserIDs' },
            description: 'GetLicenseUserIDs'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetUser',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetUser',
                    type: 'GetUser',
                    description: 'GetUser',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetUserResponse',
                    description: 'GetUserResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetUser' },
            description: 'GetUser'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetPatientFromDateTime',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetPatientFromDateTime',
                    type: 'GetPatientFromDateTime',
                    description: 'GetPatientFromDateTime',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetPatientFromDateTimeResponse',
                    description: 'GetPatientFromDateTimeResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetPatientFromDateTime' },
            description: 'GetPatientFromDateTime'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetPatientDemo',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetPatientDemo',
                    type: 'GetPatientDemo',
                    description: 'GetPatientDemo',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetPatientDemoResponse',
                    description: 'GetPatientDemoResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetPatientDemo' },
            description: 'GetPatientDemo'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('SavePatient',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'SavePatient',
                    type: 'SavePatient',
                    description: 'SavePatient',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'SavePatientResponse',
                    description: 'SavePatientResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/SavePatient' },
            description: 'SavePatient'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('PostHL7Message',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'PostHL7Message',
                    type: 'PostHL7Message',
                    description: 'PostHL7Message',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'PostHL7MessageResponse',
                    description: 'PostHL7MessageResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/PostHL7Message' },
            description: 'PostHL7Message'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetTaskCount',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetTaskCount',
                    type: 'GetTaskCount',
                    description: 'GetTaskCount',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetTaskCountResponse',
                    description: 'GetTaskCountResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetTaskCount' },
            description: 'GetTaskCount'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('LinkPartnerUser',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'LinkPartnerUser',
                    type: 'LinkPartnerUser',
                    description: 'LinkPartnerUser',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'LinkPartnerUserResponse',
                    description: 'LinkPartnerUserResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/LinkPartnerUser' },
            description: 'LinkPartnerUser'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('LinkPartnerUserName',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'LinkPartnerUserName',
                    type: 'LinkPartnerUserName',
                    description: 'LinkPartnerUserName',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'LinkPartnerUserNameResponse',
                    description: 'LinkPartnerUserNameResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/LinkPartnerUserName' },
            description: 'LinkPartnerUserName'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetNotifications',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetNotifications',
                    type: 'GetNotifications',
                    description: 'GetNotifications',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetNotificationsResponse',
                    description: 'GetNotificationsResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetNotifications' },
            description: 'GetNotifications'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('UpdateNotification',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'UpdateNotification',
                    type: 'UpdateNotification',
                    description: 'UpdateNotification',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'UpdateNotificationResponse',
                    description: 'UpdateNotificationResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/UpdateNotification' },
            description: 'UpdateNotification'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetTasks',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetTasks',
                    type: 'GetTasks',
                    description: 'GetTasks',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetTasksResponse',
                    description: 'GetTasksResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetTasks' },
            description: 'GetTasks'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetCCDFiles',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetCCDFiles',
                    type: 'GetCCDFiles',
                    description: 'GetCCDFiles',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetCCDFilesResponse',
                    description: 'GetCCDFilesResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetCCDFiles' },
            description: 'GetCCDFiles'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetPatientCCD',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetPatientCCD',
                    type: 'GetPatientCCD',
                    description: 'GetPatientCCD',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetPatientCCDResponse',
                    description: 'GetPatientCCDResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetPatientCCD' },
            description: 'GetPatientCCD'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetEPATaskStatus',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetEPATaskStatus',
                    type: 'GetEPATaskStatus',
                    description: 'GetEPATaskStatus',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetEPATaskStatusResponse',
                    description: 'GetEPATaskStatusResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetEPATaskStatus' },
            description: 'GetEPATaskStatus'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetPatientInfo',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetPatientInfo',
                    type: 'GetPatientInfo',
                    description: 'GetPatientInfo',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetPatientInfoResponse',
                    description: 'GetPatientInfoResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetPatientInfo' },
            description: 'GetPatientInfo'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('AddOfficeLocation',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'AddOfficeLocation',
                    type: 'AddOfficeLocation',
                    description: 'AddOfficeLocation',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'AddOfficeLocationResponse',
                    description: 'AddOfficeLocationResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/AddOfficeLocation' },
            description: 'AddOfficeLocation'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetOfficeLocations',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetOfficeLocations',
                    type: 'GetOfficeLocations',
                    description: 'GetOfficeLocations',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetOfficeLocationsResponse',
                    description: 'GetOfficeLocationsResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetOfficeLocations' },
            description: 'GetOfficeLocations'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('UpdateOfficeLocation',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'UpdateOfficeLocation',
                    type: 'UpdateOfficeLocation',
                    description: 'UpdateOfficeLocation',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'UpdateOfficeLocationResponse',
                    description: 'UpdateOfficeLocationResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/UpdateOfficeLocation' },
            description: 'UpdateOfficeLocation'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('SavePatientCCD',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'SavePatientCCD',
                    type: 'SavePatientCCD',
                    description: 'SavePatientCCD',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'SavePatientCCDResponse',
                    description: 'SavePatientCCDResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/SavePatientCCD' },
            description: 'SavePatientCCD'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetPendingScripts',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetPendingScripts',
                    type: 'GetPendingScripts',
                    description: 'GetPendingScripts',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetPendingScriptsResponse',
                    description: 'GetPendingScriptsResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetPendingScripts' },
            description: 'GetPendingScripts'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetFailedScripts',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetFailedScripts',
                    type: 'GetFailedScripts',
                    description: 'GetFailedScripts',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetFailedScriptsResponse',
                    description: 'GetFailedScriptsResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetFailedScripts' },
            description: 'GetFailedScripts'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('RetrieveScriptFromDocumentStore',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'RetrieveScriptFromDocumentStore',
                    type: 'RetrieveScriptFromDocumentStore',
                    description: 'RetrieveScriptFromDocumentStore',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'RetrieveScriptFromDocumentStoreResponse',
                    description: 'RetrieveScriptFromDocumentStoreResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/RetrieveScriptFromDocumentStore' },
            description: 'RetrieveScriptFromDocumentStore'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('SetDocumentStoreScriptToPrintedStatus',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'SetDocumentStoreScriptToPrintedStatus',
                    type: 'SetDocumentStoreScriptToPrintedStatus',
                    description: 'SetDocumentStoreScriptToPrintedStatus',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'SetDocumentStoreScriptToPrintedStatusResponse',
                    description: 'SetDocumentStoreScriptToPrintedStatusResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/SetDocumentStoreScriptToPrintedStatus' },
            description: 'SetDocumentStoreScriptToPrintedStatus'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('RegisterDeviceForSsoAndRetrieveRegistrationKey',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'RegisterDeviceForSsoAndRetrieveRegistrationKey',
                    type: 'RegisterDeviceForSsoAndRetrieveRegistrationKey',
                    description: 'RegisterDeviceForSsoAndRetrieveRegistrationKey',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'RegisterDeviceForSsoAndRetrieveRegistrationKeyResponse',
                    description: 'RegisterDeviceForSsoAndRetrieveRegistrationKeyResponse',
                    root: true
                }],
            http:
            {
                verb: 'post',
                path: '/RegisterDeviceForSsoAndRetrieveRegistrationKey'
            },
            description: 'RegisterDeviceForSsoAndRetrieveRegistrationKey'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('EstablishMobileSso',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'EstablishMobileSso',
                    type: 'EstablishMobileSso',
                    description: 'EstablishMobileSso',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'EstablishMobileSsoResponse',
                    description: 'EstablishMobileSsoResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/EstablishMobileSso' },
            description: 'EstablishMobileSso'
        }
    );

    PartnerSvcPartnerSvcSoap12.remoteMethod('GetPushNotificationLog',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'GetPushNotificationLog',
                    type: 'GetPushNotificationLog',
                    description: 'GetPushNotificationLog',
                    required: true,
                    http: { source: 'body' }
                }],
            returns:
                [{
                    arg: 'data',
                    type: 'GetPushNotificationLogResponse',
                    description: 'GetPushNotificationLogResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/GetPushNotificationLog' },
            description: 'GetPushNotificationLog'
        }
    );

}
