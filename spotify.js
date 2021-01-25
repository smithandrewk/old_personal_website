const url = "https://api.spotify.com/v1/me/player/currently-playing";
var auth = config.AUTH
const options = {
headers: {
    Authorization: "Bearer "+ auth
}
};
fetch(url,options)
.then( res => res.json() )
.then( data => console.log(data));