'use strict';

const clc = require('cli-color');
const orange = clc.xterm(202).bgXterm(236);

//cat's are always hungry
const now = new Date();

function checkWater() {
  console.log(orange('Check your pets water and food, make sure its all fine :)'));
}

const cat_ascii = `  	

            |\\___/|
           =) ^Y^ (=
            \\  ^  /
             )=*=(
            /     \\
            |     |          Happy Hacktoberfest!
           /| | | |\\
           \\| | |_|/\\
           //_// ___/
               \\_)
`;

//hacktoberfest special
console.log(orange(cat_ascii));

// the cat says
console.log(orange('Feed the kitties at ' + now));

//remember to check the water and food every 10min
setInterval(checkWater, 60000);
