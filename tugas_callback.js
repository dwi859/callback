
    console.log("satu")

function dua (callback){setTimeout(function(){
    console.log("dua")
    callback()
}, 2000);
}

function tiga () {
    console.log("tiga")
}

dua(tiga)
