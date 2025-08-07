export function doubleEvensTripleOdds(vetor: number[]): number[] {
    return vetor.map((value, indice) => {
        if (indice % 2 === 0) {
            return value * 3; // Triplo para posições pares
        } else {
            return value * 2; // Dobro para posições ímpares
        }
    });
}
