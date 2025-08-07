export function productsAndProfits(produtos: { name: string; cost: number; salePrice: number }[]) {
  let lucroMenor10 = 0;
  let lucroEntre10e30 = 0;
  let lucroMaior30 = 0;

  for (const product of produtos) {
    const profitPercent = ((product.salePrice - product.cost) / product.cost) * 100;
    if (profitPercent < 10) {
      lucroMenor10++;
    } else if (profitPercent <= 30) {
      lucroEntre10e30++;
    } else {
      lucroMaior30++;
    }
  }

  return { lucroMenor10, lucroEntre10e30, lucroMaior30 };
}
