import { buscarJogador } from "./services/apiFootball.js";
import { buscarTime } from "./services/apiFootball.js";
async function main(){
    const realMadrid = await buscarTime("Real Madrid");
   
    if(!realMadrid){
        return;
    }
    await buscarJogador("Vinicius Junior", realMadrid.id);
}
    
main();