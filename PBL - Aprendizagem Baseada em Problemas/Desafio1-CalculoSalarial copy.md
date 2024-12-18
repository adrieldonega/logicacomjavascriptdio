Faça um programa que calcule e imprima o salario a ser transferido para um funcionario
Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios.
O salario a ser transferido é calculado da seguinte maneira:
    (valor bruto do salario - percentual de imposto mediante ao salario) + adicional dos beneficios

Para calcular o percentual do imposto segue as aliquotas
    De R$ 0,00 a R$ 1100,00 = 5,00%
    De R$ 1100,01 a R$ 2500,00 = 10.00%
    Maior que R$ 2500,00 = 15,00%

Entrada
    A entrada consiste em varios arquivos de teste, que conterá o valor bruto do salario e adicional dos beneficios. Conforme mostrado no exemplo de entrada a seguir.

Saida
    Para cada arquivo da entrada, terá um arquivo de saida. E como mencionado no Desafio, será gerado uma linha com um numero que será a diferença entre o valor bruto do salario e o percentual de imposto mediante a faixa salarial somado com o adicional dos beneficios. Use o exemplo abaixo para clarear o que esta sendo pedido.

#Entrada         
2000        
250

#Saida
2050,00