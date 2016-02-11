var FB = require('fb');
var accessToken = FB.getAccessToken();
FB.setAccessToken(accessToken);
/*
FB.api('oauth/access_token', {
    client_id: '1601573453438037',
    client_secret: 'd8e292eb44e7924f6d5690836b6630b5',
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred in client login' : res.error);
        return;
    }
    var accessToken = res.access_token;
});
*/

FB.api('4', { fields: ['id', 'name'] }, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred getting fb data' : res.error);
    return;
  }
  console.log(res.id);
  console.log(res.name);
});
