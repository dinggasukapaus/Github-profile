//TODO : [x] connect to github
//? load library https
const { Console, profile } = require('console')
let https =require('https')
//! function get
let get = (username) =>{

    
    // membuat variable array yang tidak bisa berubah
    const options = {
        hostname:'api.github.com',
        port:443,
        path:`/users/${username}`,
        method:'GET',
        headers:{
            'user-agent':'nodejs'
        }
    
    }
    
    //TODO : read the data
    // mengambil data lalu di teruskan ke funsi result 
    let request = https.request(options, (response) =>{
        let body = ''
        response.on('data',(data)=>{
            body = body + data
        })
        response.on('end',() =>{
            //TODO : Parse the data
            let profile = JSON.parse(body)
            if(response.statusCode===200){
                console.log(`profile with '${username}' found`)
                //? convert String to json
                //TODO : Print the data out
                console.log(`${profile.login} owms ${profile.public_repos} repo(s) and has ${profile.followers} followers(s)`)
            }else{
                console.log(`profile with '${username}' not found`)
            }
    
        })
    })
    
    request.end()
    
    
    request.on('error',(e)=>{
        console.error(e);
    })
}
//? export module dalam bentuk object ditandai dengan {}
module.exports = {
    get
}