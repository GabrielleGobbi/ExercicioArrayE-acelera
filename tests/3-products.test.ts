import { productsAndProfits } from '../src/implementacao/3-productsAndProfits';
import { products } from './3-productsData';

describe('Exercicio 3 : Produtos e lucros', () => {
    test('deve calcular os lucros corretamente', () => {
        const result = productsAndProfits(products);
        
        expect(result.lucroMenor10).toBe(1);
        expect(result.lucroEntre10e30).toBe(3); 
        expect(result.lucroMaior30).toBe(1); 
    });

    test('deve funcionar com o array vazio', () => {
        const result = productsAndProfits([]);
        
        expect(result.lucroMenor10).toBe(0);
        expect(result.lucroEntre10e30).toBe(0);
        expect(result.lucroMaior30).toBe(0);
    });

    test('deve funcionar com produto único', () => {
        const singleProduct = [{ name: "Test", cost: 100, salePrice: 120 }];
        const result = productsAndProfits(singleProduct);
        
        expect(result.lucroEntre10e30).toBe(1); 
    });
}); 
