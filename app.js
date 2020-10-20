//Proble we need a simple to look at github profile
//solution use nodeJS to connect to github API
//- to get profile info an pront out to the console

let profile = require('./profile.js')

console.log(profile)
// membuat variable username agar bisa di define
profile.get('dinggasukapaus')
profile.get('senol')



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


