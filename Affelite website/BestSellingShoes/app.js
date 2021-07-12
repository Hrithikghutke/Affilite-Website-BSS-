const welcome = document.querySelectorAll("#welcome path");

for(let i=0; i<welcome.length;i++){
    console.log(`Letter ${i} is ${welcome[i].getTotalLength()}`);
}
