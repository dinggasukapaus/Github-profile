//Proble we need a simple to look at github profile
//solution use nodeJS to connect to github API
//- to get profile info an pront out to the console

//TODO : [x] connect to github
//? load library https
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
        console.log(body)
    })
})

request.end()
request.on('error',(e)=>{
    console.error(e);
})

//TODO : Parse the data
//? convert String to json

//TODO : Print the data out

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


