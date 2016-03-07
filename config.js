
var config = { };

// should end in /
config.rootUrl  = process.env.ROOT_URL                  || 'http://localhost:3000/';

config.facebook = {
    appId:          process.env.FACEBOOK_APPID          || '1571953956456982',
    appSecret:      process.env.FACEBOOK_APPSECRET      || '42f39acd8b1c69d8a335ee3adc2cea5c',
    appNamespace:   process.env.FACEBOOK_APPNAMESPACE   || 'hello_fb',
    redirectUri:    process.env.FACEBOOK_REDIRECTURI    ||  config.rootUrl + 'login/callback'
};

module.exports = config;
