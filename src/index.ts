import { buscarTime } from "./services/apiFootball.js";
async function main(){
   
    const team = await buscarTime("Corinthians");

    if(!team){
        return;
    }

    console.log("Id: ", team.id);
    console.log("Nome: ", team.name);
    console.log("País: ", team.country);
    console.log("Fundação: ", team.founded);
}

main();