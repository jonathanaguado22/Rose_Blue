const araya = ["merito", "langoleta", "manicuare", "tacarigua", "salazar"];

for(let i = 0; i < araya.length; i++){
    let prueba = araya[i]
    for(let j = 1 ; j < prueba.length; j++){
let nueva = prueba[j]
if(nueva === "a"){
    nueva = "p";
    return nueva
}
console.log(nueva);
    }
   
   
   
}
