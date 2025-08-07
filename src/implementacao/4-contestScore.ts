import { participants } from "../../tests/4-candidateData";

export function listApproved():string[] {
    return participants
    .filter(candidate => candidate.score > 70)
    .map(candidate => `${candidate.name} obteve mais de 70 pontos.`);
}