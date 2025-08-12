import data from "../db/4-candidateData.json";

export function listApproved(candidates = data.participants):string[] {
    return candidates
    .filter(candidate => candidate.score > 70)
    .map(candidate => `${candidate.name} obteve mais de 70 pontos.`);
}

console.log(listApproved( [
    { "name": "João", "score": 75 },
    // { "name": "Maria", "score": 80 },
    // { "name": "Carlos", "score": 37 },
    // { "name": "Steve", "score": 75 },
    // { "name": "Marcela", "score": 92 }
  ]));
