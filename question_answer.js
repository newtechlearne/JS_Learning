async function callApi(username){
    let resp = await fetch(`https://api.github.com/users/${username}`)
    let data = await resp.json();
    console.log(`Username: ${data.login}, Followers: ${data.followers}, Following: ${data.following}`);
}

callApi("Samarth0606")
callApi("alokiit")

let arrApi = [
    'https://api.github.com/users/Samarth0606',
    'https://api.github.com/users/alokiit',
    'https://api.github.com/users/sachin0072',
]
let arrApi = [
    'https://api.github.com/users/Samarth0606',
    'https://api.github.com/users/alokiit',
    'https://api.github.com/users/sachin0072',
];

for (const item of arrApi){
    fetch(item).then(res => res.json()).then(data => console.log(data.followers));
}