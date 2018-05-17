import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';

export function getUser(user){
  //skicka url till fetchEmail,
  const url = 'https://api.github.com/user'

  if(JSON.Stringify(user.services.github.accessToken.property) != 'undefined') {
    //hämta accesstoken
    const at = user.services.github.accessToken;
    fetchEmail(url, at);
  }
}

function fetchEmail(url, at){
  HTTP.get(url, {params: {"access_token": at}},
    (error, res) => { Session.set('email', res.data.email)})
}
