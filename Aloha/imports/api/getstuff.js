import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';

export function getStuff(user){
  //skicka url till fetchEmail,
  const url = 'https://api.github.com/user'
  console.log(user)

  //hämta accesstoken
  const at = user.services.github.accessToken;
  fetchEmail(url, at);
}

function fetchEmail(url, at){
  HTTP.get(url, {params: {"access_token": at}},
    (error, res) => {console.log(res); Session.set('email', res.data.email)})
}
