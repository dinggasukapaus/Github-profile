//Proble we need a simple to look at github profile
//solution use nodeJS to connect to github API
//- to get profile info an pront out to the console

//TODO : [x] connect to github
//? load library https
const { Console } = require('console')
let https =require('https')
// membuat variable array yang tidak bisa berubah
const options = {
    hostname:'api.github.com',
    port:443,
    path:'/users/dinggasukapaus',
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
        //? convert String to json
        let profile = JSON.parse(body)
        //TODO : Print the data out
        console.log(`${profile.login} owms ${profile.public_repos} repo(s) and has ${profile.followers} followers(s)`)

    })
})

request.end()


request.on('error',(e)=>{
    console.error(e);
})




// //! cara pertama
// //* fungsi dan parameter
// function fungsi(param){

//     console.log('fungis di panggil'+param)
// }
// //* memanggil fungsi
// fungsi('halo')

// //! cara kedua
// let fungsi = ()=>{
//     console.log('fungsi tanpa nama')
// }
// fungsi()


