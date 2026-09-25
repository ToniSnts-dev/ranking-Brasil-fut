import type { Player } from "../types/Player.js";
import type { Team } from "../types/Team.js";

const apiKey = process.env.API_FOOTBALL_KEY;

export async function buscarJogador(nome: string, teamId: number){
    if (!apiKey){
        console.error("API_FOOTBALL_KEY não encontrada");
        return;
    }

    const response = await fetch(
        `https://v3.football.api-sports.io/players?search=${encodeURIComponent(nome)}&team=${teamId}&season=2024`,
        {
            headers: {
                "x-apisports-key": apiKey
            }
        }
    );

    if(!response.ok){
        console.error("Erro HTTP:", response.status);
        return;
    }

    const data = await response.json();

    console.dir(data.response[0], {depth: null});
}

export async function buscarTime(nome: string){
    const response = await fetch(
         `https://v3.football.api-sports.io/teams?search=${encodeURIComponent(nome)}`,
         {
            headers: {
                "x-apisports-key": apiKey!
            }
         }
    );
    if(!response.ok){
        console.error("Erro HTTP:", response.status);
        return;
    }
    const data = await response.json();
    if(data.results === 0){
        console.log("Nenhum time encontrado.");
        return;
    }

    const team: Team = {
        id: data.response[0].team.id,
        name: data.response[0].team.name,
        country: data.response[0].team.country,
        founded: data.response[0].team.founded
    };
    
    return team;
}