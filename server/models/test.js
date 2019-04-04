'use strict';
var fs = require('fs');
var saml = require('saml1.0');
module.exports = function (Test) {

    Test.testSAML = function (callback) {
        var options = {
            cert: fs.readFileSync('/home/eash/Downloads/certificate/stage.crt'),
            key: fs.readFileSync('/home/eash/Downloads/certificate/stage.key'),
            issuer: 'dev.intelimd.com',
            lifetimeInSeconds: 600,
            attributes: {
                version: '1.0',
                operation: '0x00000010',
                reserved: '0'
            },
            nameIdentifier: 'USER_GUID',
            sessionIndex: '_faed468a-15a0-4668-aed6-3d9c478cc8fa'
        };
        return callback(null, saml.getSAMLResponse(options));

        // var saml2 = require('saml').Saml20;
        // var saml2 = require('saml2-js');
        var saml11 = require('saml').Saml11;
        var optionsrq = {
            cert: fs.readFileSync('/home/eash/Downloads/certificate/stage.crt'),
            key: fs.readFileSync('/home/eash/Downloads/certificate/stage.key'),
            issuer: 'https://dev.intelimd.com',
            lifetimeInSeconds: 600,
            audiences: 'urn:myapp',
            attributes: {
                version: '1.0',
                operation: '0x00000010',
                reserved: '0'
            },
            nameIdentifier: 'USER_GUID',
            sessionIndex: '_faed468a-15a0-4668-aed6-3d9c478cc8fa'
        };

        var signedAssertion = saml11.create(optionsrq);

        return callback(null, signedAssertion);

        // // //var signedAssertion = saml11.create(options);
        // // var signedAssertion = saml12.post_assert({}, options, (err, res) => {
        // //     if (err) return callback(err);
        // //     return callback(null, res);
        // // });
        // //return callback(null, signedAssertion);

        // var sp_options = {
        //     entity_id: "https://sp.example.com/metadata.xml",
        //     private_key: fs.readFileSync('/home/eash/Downloads/certificate/stage.key'),
        //     certificate: fs.readFileSync('/home/eash/Downloads/certificate/stage.crt'),
        //     assert_endpoint: "https://sp.example.com/assert"
        // };
        // var sp = new saml2.ServiceProvider(sp_options);

        // var idp_options = {
        //     sso_login_url: "https://idp.example.com/login",
        //     sso_logout_url: "https://idp.example.com/logout",
        //     certificates: [fs.readFileSync('/home/eash/Downloads/certificate/stage.crt')],
        //     force_authn: true,
        //     sign_get_request: false,
        //     allow_unencrypted_assertion: false
        // };

        // // Call identity provider constructor with options
        // var idp = new saml2.IdentityProvider(idp_options);

        // // Example usage of identity provider.
        // // Pass identity provider into a service provider function with options and a callback.
        // sp.post_assert(idp, { request_body: optionsrq }, (err, res) => {
        //     if (err) return callback(err);
        //     return callback(null, res);
        // });
    }

    Test.remoteMethod('testSAML',
        {
            isStatic: true,
            produces:
                [{ produces: 'application/json' },
                { produces: 'application/xml' }],
            accepts:
                [],
            returns:
                [{
                    arg: 'data',
                    type: 'DivideResponse',
                    description: 'DivideResponse',
                    root: true
                }],
            http: { verb: 'post', path: '/Divide' },
            description: 'Divide'
        }
    );
};
