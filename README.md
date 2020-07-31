# Arquitetura Limpa (?)

O objetivo desse branch é validar uma implementação da arquitetura limpa proposto por Uncle Bob.

### Motivações

Existem algumas implementações da arquitetura limpa em Nodejs, boa parte delas usam Typescript (que é ótimo) com interfaces, porém em Javascript (ainda) não existe interface. Outras implementações com Javascript puro em algum momento quebram a Regra de Dependencia, "a favor da simplicidade". 

A motivação desse projeto é propor uma implementação simples baseada nas diretrizes originais da arquitetura limpa.

### Contexto

Os detalhes da arquitetura limpa serão melhores explicados [aqui](https://www.youtube.com/watch?v=Nsjsiz2A9mg) e [aqui](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

![clean](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)


Um dos pontos principais da arquitetura é a regra de dependencia que DEVE seguir o sentido da seta que aponta para os círculos mais internos, ou seja, o módulo não pode NUNCA conhecer (depender) de outro módulo do círculo externo, apenas podem conhecer módulos dos círculos mais internos.

### Por que isso é importante?

As principais vantagens da arquitetura limpa são:

****1- Aplicação desacoplada de frameworks****

No implementação proposta framework, banco de dados e interface (API) são detalhes, como realmente deveriam ser. Não temos uma aplicação express, temos uma aplicação que utiliza o express. Ou, não temos uma aplicação Web, temos uma aplicação que utiliza a Web como interface. Essa mudança pode parecer pequena porém é muito poderosa.

****2- Esforço de mudança proporcional****

Mudanças simples nas regras de negócio devem ter esforço pequeno de implementação. O contrário sugere que a arquitetura da aplicação não é limpa (é suja) o que certamente diminui a produtividade a médio e longo prazo. 

****3- Fácil de testar****

O baixo acoplamento facilita os testes unitários porque existem menos dependencias espalhadas pelo código.


### Implementação

A implementação é o mais simples possível e segue a Regra de Dependencia, além de seguir uma estrutura de diretórios inspirada no DDD.


![clean-node](https://github.com/Homem-App/api/blob/master/clean.png?raw=true)

A camada azul (Frameworks) contempla todos os módulos que dependem de um framework, como express e mongoose, faz a conexão com o banco de dados MongoDb. Ela também configura os middlewares e rotas usando decorators. Uncle Bob "admite" que o módulo main, responsável por iniciar a aplicação seja um módulo "sujo" eu resolvi espalhar um pouco essa sujeira por módulos diferentes da mesma camada.

Os factories são importantes nessa camada, são através deles que as dependencias do banco de dados são injetadas no controllers, que são carregados pelos routes. Assim conseguimos manter a regra de dependencia na camada de Application Businnes Rules.

Na camada Interface Adapters estão os controllers. Resolvi unir os controllers com presenters para simplificar a implementação. Essa união é perfeitamente aceitável. O papel do controller é manipular os dados da forma mais conveniente para a próxima camada e retornar o conteúdo.

Note que chegamos aqui sem dependencias externas de frameworks.

A última camada da implementação é conhecida como Application Business Rules responsável por regras de negócio da **aplicação**. Mais uma vez chegamos aqui sem dependencias externas, apenas com um serviço de banco de dados (que pode ser qualquer um) injetado no módulo. Essa camada contém os casos de uso da aplicação, logo eles podem invocar funções de alto nível dos serviços de banco de dados. Atenção para os módulos do diretório infra (camada Frameworks/Drinvers) que garatem serviços de alto nível injetados.

### Nem tudo são flores

A implementação possui limitações. 

1- Ainda preciso escrever os testes unitários para validar a vantagem 03 (Fácil de testar).

2- Preciso validar o cenário onde um caso de uso precisa de mais de um serviço.


**Contribuições são sempre bem vindas**
