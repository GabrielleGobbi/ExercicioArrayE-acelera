import { listApproved } from "../src/implementacao/4-contestScore";

describe("listarAprovados", () => {
  it("deve retornar apenas participantes com mais de 70 pontos", () => {
    const resultado = listApproved();

    expect(resultado).toEqual([
      "João obteve mais de 70 pontos.",
      "Maria obteve mais de 70 pontos.",
      "Steve obteve mais de 70 pontos.",
      "Marcela obteve mais de 70 pontos.",
    ]);
  });
});