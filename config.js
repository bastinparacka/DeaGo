
var config = { };

// should end in /
config.rootUrl  = process.env.ROOT_URL = "http://"+process.env.OPENSHIFT_APP_DNS || "http://localhost";
config.facebook = {
    appId:          process.env.FACEBOOK_APPID          || '1516393198679725',
    appSecret:      process.env.FACEBOOK_APPSECRET      || 'de91d55b88a764cea4f580a3e234288d',
    appNamespace:   process.env.FACEBOOK_APPNAMESPACE   || 'DeaGo',
    redirectUri:    process.env.FACEBOOK_REDIRECTURI    ||  config.rootUrl + 'login/callback'
};

module.exports = config;

