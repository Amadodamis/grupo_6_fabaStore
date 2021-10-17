let repetido=true;
let randomize;
let arrayTest=[];
let found;

for (let i = 0; i <= 3; i++) {

    while (repetido==true){
        randomize=Math.floor(Math.random() * productos.length) + 0; 
        found = arrayTest.find( element => element == randomize);
        
        if (found == undefined){
            
            arrayTest.push(randomize)
            repetido=false;
        }
    }
repetido=true;    
}
