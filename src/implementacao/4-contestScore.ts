import data from "../db/4-candidateData.json";

export function listApproved():string[] {
    return data.participants
    .filter(candidate => candidate.score > 70)
    .map(candidate => `${candidate.name} obteve mais de 70 pontos.`);
}