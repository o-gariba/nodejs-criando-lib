# Entendendo RegEx

No site [RegEx101](https://regex101.com) podemos verificar isso em detalhes.  

> Se eu escrevo uma palavra solta, aceito todas as ocorrencias exatas do texto que digitei.  
>>Ex: /JavaScript/  

>Se eu escrevo a mesma coisa dentro de chaves `[]`, eu aceito TODAS AS LETRAS que estão dentro das chaves, não necessariamente naquela ordem ou em sequencia.  
>>Ex: /[abc]/ 

>Se eu coloco um acento circunflexo antes das letras, seleciono todas as letras MENOS as descritas.  
>>Ex: /[^abc]/

>Caracteres especiais (ou metacaracteres) devem ser prescedidos de uma barra invertida.  

>Barra invertida seguida de w aceita todas as palavras (exclui caracteres especiais).
>>Ex: /[\w]/  

>Para pegarmos palavras, dentro de colchetes, em mais de uma ocorrencia `*` ficaria assim:
>>Ex: /\[[\w]*\]/  

>Para aceitarmos também espaços entre as palavras adicionamos `\s`.  
>>Ex: /\[[\w\s]*\]/  

>Mudando a forma de encarar o problema, podemos pedir para a RegEx selecionar tudo que esteja entre um colchete e outro, independente do que estiver lá dentro.
>>Ex: /\[[^\]]*\]/  

>Caso tenhamos um caracter que pode OU NAO ocorrer, como no caso do `s` dentro do `https`, fazemos assim. (Aqui estamos selecionando todos os `(http(s)://`)
>>Ex: /\(https?:\/\//  

>Para selecionarmos tudo que está entre parenteses, que comece com `http`, que talvez tenha `s`, seguido de `://`, que não permita `$ e #`, que permita ponto final e não permita espaços em branco, até o fechamento do parenteses novamente, temos a seguinte RegEx:
>> /\(https?:\/\/[^$#\s].[^\s]*\)/  

>Unindo as duas RegEx e excluindo os parenteses e colchetes, podemos separar em grupos os elementos que vamos capturar/testar. Fica assim:
>>  /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm