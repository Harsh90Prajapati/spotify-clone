export const authEndpoint ="https://accounts.spotify.com/authorize";


const clientId = '54ab20d5e8444a4e85af590a2d6be235'; 
const redirect_Uri = 'http://localhost:3000/'; // Your redirect uri

const scopes = [
   'user-read-private user-read-email'
];

export const getTokenfromUrl = () =>{
    return window.location.hash
     .substring(1)
     .split('&')
     .reduce((initial , item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirect_Uri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;