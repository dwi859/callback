var http = require('http')

let data_array = [10,20,30]
let data_object = {
    'nama' : 'Nur',
    'kursus' :'NodeJs',
    'rating':5
}

var server = http.createServer(function (req,res){
    console.log("selamat datang di nodejs")
})

server.listen(8000)

console.log("server berjalan pada url https://localhost:8000/")
console.log(data_array[0])
console.log(data_object)

let JSON_data = JSON.stringify(data_object)

console.log(JSON_data)