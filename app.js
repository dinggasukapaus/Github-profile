//Proble we need a simple to look at github profile
//solution use nodeJS to connect to github API
//- to get profile info an pront out to the console

let profile = require('./profile.js')

//! mencari username dengan inputan
//memotong 2 data array pertama dan mengamnil sisanya
let profiles = process.argv.slice(2)
//mengambil data array yang telah di slice
//lalu memperilakukan masing masing data array
//?['dinggasukapaus'] => ['followersnya','reposnya']
profiles.map(profile.get)

// membuat data array
// let profiles = ['dinggasukapaus','senol','ali','dntffm']
// profiles.map(user =>{
//     return profile.get(user)
// })


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


