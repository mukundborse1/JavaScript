setTimeout(() => {
    console.log("Hey");
}, 5000);

function a(y){
    console.log("5545");
    y();
}

a(function y(){
    console.log("565");
})