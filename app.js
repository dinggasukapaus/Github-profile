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

// mengambil data lalu di teruskan ke funsi result 
let request = https.request(options, (result) =>{
console.log('got respone',result.statusCode)
})

request.end()
request.on('error',(e)=>{
    console.error(e);
})
//TODO : read the data

//TODO : Parse the data
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

