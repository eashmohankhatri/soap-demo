
'use strict';
var server = require('../../server/server');

module.exports = function (PartnerSvcPartnerSvcSoap) {

    var soapDataSource = server.datasources.partnerDS;
    var PartnerSvcPartnerSvcSoap;

    soapDataSource.once('connected', function () {
        // Create the model
        PartnerSvcPartnerSvcSoap = soapDataSource.createModel('PartnerSvcPartnerSvcSoap', {});
    });


    /**
     * Version
     * @param {Version} Version Version
     * @callback {Function} callback Callback function
     * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
     */
    PartnerSvcPartnerSvcSoap.Version = function (Version, callback) {
        PartnerSvcPartnerSvcSoap.Version(Version, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.HelloFriend = function (data, callback) {
        PartnerSvcPartnerSvcSoap.HelloFriend(data, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetChangedPatients = function (GetChangedPatients, callback) {
        PartnerSvcPartnerSvcSoap.GetChangedPatients(GetChangedPatients, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetAllChangedPatients = function (GetAllChangedPatients, callback) {
        PartnerSvcPartnerSvcSoap.GetAllChangedPatients(GetAllChangedPatients, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetPatient = function (GetPatient, callback) {
        PartnerSvcPartnerSvcSoap.GetPatient(GetPatient, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetDocumentedPatientVisits = function (GetDocumentedPatientVisits, callback) {
        PartnerSvcPartnerSvcSoap.GetDocumentedPatientVisits(GetDocumentedPatientVisits, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetLicenseUserIDs = function (GetLicenseUserIDs, callback) {
        PartnerSvcPartnerSvcSoap.GetLicenseUserIDs(GetLicenseUserIDs, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetUser = function (GetUser, callback) {
        PartnerSvcPartnerSvcSoap.GetUser(GetUser, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetPatientFromDateTime = function (GetPatientFromDateTime, callback) {
        PartnerSvcPartnerSvcSoap.GetPatientFromDateTime(GetPatientFromDateTime, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetPatientDemo = function (GetPatientDemo, callback) {
        PartnerSvcPartnerSvcSoap.GetPatientDemo(GetPatientDemo, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.SavePatient = function (SavePatient, callback) {
        PartnerSvcPartnerSvcSoap.SavePatient(SavePatient, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.PostHL7Message = function (PostHL7Message, callback) {
        PartnerSvcPartnerSvcSoap.PostHL7Message(PostHL7Message, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetTaskCount = function (GetTaskCount, callback) {
        PartnerSvcPartnerSvcSoap.GetTaskCount(GetTaskCount, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.LinkPartnerUser = function (LinkPartnerUser, callback) {
        PartnerSvcPartnerSvcSoap.LinkPartnerUser(LinkPartnerUser, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.LinkPartnerUserName = function (LinkPartnerUserName, callback) {
        PartnerSvcPartnerSvcSoap.LinkPartnerUserName(LinkPartnerUserName, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetNotifications = function (GetNotifications, callback) {
        PartnerSvcPartnerSvcSoap.GetNotifications(GetNotifications, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.UpdateNotification = function (UpdateNotification, callback) {
        PartnerSvcPartnerSvcSoap.UpdateNotification(UpdateNotification, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetTasks = function (GetTasks, callback) {
        PartnerSvcPartnerSvcSoap.GetTasks(GetTasks, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetCCDFiles = function (GetCCDFiles, callback) {
        PartnerSvcPartnerSvcSoap.GetCCDFiles(GetCCDFiles, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetPatientCCD = function (GetPatientCCD, callback) {
        PartnerSvcPartnerSvcSoap.GetPatientCCD(GetPatientCCD, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetEPATaskStatus = function (GetEPATaskStatus, callback) {
        PartnerSvcPartnerSvcSoap.GetEPATaskStatus(GetEPATaskStatus, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetPatientInfo = function (GetPatientInfo, callback) {
        PartnerSvcPartnerSvcSoap.GetPatientInfo(GetPatientInfo, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.AddOfficeLocation = function (AddOfficeLocation, callback) {
        PartnerSvcPartnerSvcSoap.AddOfficeLocation(AddOfficeLocation, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetOfficeLocations = function (GetOfficeLocations, callback) {
        PartnerSvcPartnerSvcSoap.GetOfficeLocations(GetOfficeLocations, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.UpdateOfficeLocation = function (UpdateOfficeLocation, callback) {
        PartnerSvcPartnerSvcSoap.UpdateOfficeLocation(UpdateOfficeLocation, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.SavePatientCCD = function (SavePatientCCD, callback) {
        PartnerSvcPartnerSvcSoap.SavePatientCCD(SavePatientCCD, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetPendingScripts = function (GetPendingScripts, callback) {
        PartnerSvcPartnerSvcSoap.GetPendingScripts(GetPendingScripts, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetFailedScripts = function (GetFailedScripts, callback) {
        PartnerSvcPartnerSvcSoap.GetFailedScripts(GetFailedScripts, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.RetrieveScriptFromDocumentStore = function (RetrieveScriptFromDocumentStore, callback) {
        PartnerSvcPartnerSvcSoap.RetrieveScriptFromDocumentStore(RetrieveScriptFromDocumentStore, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.SetDocumentStoreScriptToPrintedStatus = function (SetDocumentStoreScriptToPrintedStatus, callback) {
        PartnerSvcPartnerSvcSoap.SetDocumentStoreScriptToPrintedStatus(SetDocumentStoreScriptToPrintedStatus, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.RegisterDeviceForSsoAndRetrieveRegistrationKey = function (RegisterDeviceForSsoAndRetrieveRegistrationKey, callback) {
        PartnerSvcPartnerSvcSoap.RegisterDeviceForSsoAndRetrieveRegistrationKey(RegisterDeviceForSsoAndRetrieveRegistrationKey, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.EstablishMobileSso = function (EstablishMobileSso, callback) {
        PartnerSvcPartnerSvcSoap.EstablishMobileSso(EstablishMobileSso, function (err, response) {
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
    PartnerSvcPartnerSvcSoap.GetPushNotificationLog = function (GetPushNotificationLog, callback) {
        PartnerSvcPartnerSvcSoap.GetPushNotificationLog(GetPushNotificationLog, function (err, response) {
            var result = response;
            callback(err, result);
        });
    }

    // Map to REST/HTTP

    PartnerSvcPartnerSvcSoap.remoteMethod('Version',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'Version',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('HelloFriend',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [{
                    arg: 'data',
                    type: 'Object',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetChangedPatients',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetAllChangedPatients',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetPatient',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetDocumentedPatientVisits',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetLicenseUserIDs',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetUser',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetPatientFromDateTime',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetPatientDemo',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('SavePatient',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('PostHL7Message',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetTaskCount',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('LinkPartnerUser',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('LinkPartnerUserName',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetNotifications',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('UpdateNotification',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetTasks',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetCCDFiles',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetPatientCCD',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetEPATaskStatus',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetPatientInfo',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('AddOfficeLocation',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetOfficeLocations',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('UpdateOfficeLocation',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('SavePatientCCD',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetPendingScripts',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetFailedScripts',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('RetrieveScriptFromDocumentStore',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('SetDocumentStoreScriptToPrintedStatus',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('RegisterDeviceForSsoAndRetrieveRegistrationKey',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('EstablishMobileSso',
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

    PartnerSvcPartnerSvcSoap.remoteMethod('GetPushNotificationLog',
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
