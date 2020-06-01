# Projeto: Microsserviços com NodeJS 
---
[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

Essa é uma série de treinamento sobre microsserviços (microservices). Além de "codar" o objetivo é validar alguns conceitos de microsserviço frente à essa implementação. Se você está pronto para aprender se divertindo, embarque nessa, seja muito bem-vindo(a). Se você conhece bem os conceitos de microsserviço vá apicando-os aos poucos, gradualmente, ao longo dessa jornada; mas se você é um novato, não se preocupe..., sugiro que vá "codando" e em paralelo vá em busca dos conceitos de microsserviços (isso é muito importante!!!!).
Bora lá, então?


## Pré-requisitos
---
Conhecer a instalação, configuração e uso básico dos seguintes softwares:
  - Node JS (versão 10 ou superior)
  - Docker
  - Nats Server
  
Estar a fim de conhecer o framework Moleculer:
  - Moleculer
  - Moleculer CLI

## Criação do projeto (branch: feature/scaffold)
---
- [x] $ moleculer init project example
- Responda as perguntas assim:
  - [x] ? Add API Gateway (moleculer-web) service? Yes
  - [x] ? Would you like to communicate with other nodes? Yes
  - [x] ? Select a transporter NATS (recommended)
  - [x] ? Would you like to use cache? No
  - [x] ? Add DB sample service? No
  - [x] ? Would you like to enable metrics? Yes
  - [x] ? Would you like to enable tracing? Yes
  - [x] ? Add Docker & Kubernetes sample files? Yes
  - [x] ? Use ESLint to lint your code? No
    Create 'example' folder...
  - [x] ? Would you like to run 'npm install'? (Y/n) Y

## Integração do projeto com o servidor NATS (branch: feature/nats)
---
- [x] $ cd example
- [x] Edite o arquivo moleculer.config.js e altere o valor de transporter assim como segue: 
  transporter: "NATS", //null, 
- [x] Salve o arquivo e feche
- [x] Subir o dashboard do projeto: $ npm run dev

Observação: parece brincadeira, mas muita gente não avança nos estudos desse framework porque se esquece desse pequeno (porém imprescindível) procedimento.

## Verificação do ambiente de desenvolvimento 
---
Vá até o browser e:
  - [x] Digite: localhost:3000
  - [x] Navegue por todos os links da página (dashboard)
  - [x] http://localhost:3000/api/greeter/hello (OK)
  - [x] http://localhost:3000/api/greeter/welcome?name=Colque (OK)

## Release da versão 1.0.0
---
- [x] Gerada a TAG 1.0.0

## Hora de codar o microsserviço
---
Padrão monolítico (para efeito de desenvolvimento): 
  - [x] Traduzir as mensagens dos serviços p/ idioma português (branch: feature/brazuka)
  - [x] Criar um novo serviço (helper service) que "pegará" um evento emitido pelo serviço greeter.hello (branch: feature/helper)
  - [x] Registrar o novo serviço
    Vá no Terminal que está rodando o console, dê enter e no prompt digite: 
    mol$ load services/helper.service.js
    Tem que retornar: 
    a) Loaded successfully! 
    b) 'helper' service is registered.
  - [x] Emitir um evento por um serviço e escutar através de outro serviço, realizando uma ação
    mol$ emit "hello.called" --payload "Hello from Terminal"
    Tem que retornar:
    Helper service pegou um evento
    { payload: 'Hello from Terminal' }
  - [x] Criar uma ação no service hello que vai **emitir** um aviso que vai ser **escutado** pelo helper service (branch: feature/action)
  - Testar a solução:
    - [x] No browser: http://localhost:3000/api/greeter/hello
    - [x] No console: mol$ call "greeter.hello"
    Se tudo deu certo, você terá como resposta algo parecido com:
      >> Execution time:1ms
      >> Response:
      'Olá do greeter@lnx-colque-20078'

## Release da versão 1.1.0
- [x] Gerada a TAG 1.1.0

## Bugfix da versão 1.1.0
- [x] Gerador de números aleatório no serviço helper que será retornando quando acionado o serviço greeter.hello
- [x] Transformar o greeter.hello em assíncrono para que seja possível chamar uma action em outro serviço
  - Testar a solução:
    - [x] No console: mol$ call "greeter.hello"
    Se tudo deu certo, você terá como resposta algo parecido com:
    Helper service pegou um evento
    { payload: 'Olá do greeter@lnx-colque-11313', number: 5 }
    - [x] No browser: http://localhost:3000/api/greeter/hello
    Se tudo deu certo, você terá como resposta algo parecido com:
    { payload: 'Olá do greeter@lnx-colque-11313', number: 3 }
    Como o número gerado é aleatório, cada vez que aciona o greeter.hello retorna um número diferente.

## Release da versão 1.2.0 (atualizada a master já corrigida pela bugfix 1.1.0)
- [x] Gerada a TAG 1.2.0

## Tornando o microsserviço distribuído (deixando de ser monolítico)
---
Padrão distribuído em containers docker (branch: feature/distributed): 
O Moleculer é tão maravilhoso que vocẽ não precisa mudar uma única linha de código dos serviços criados, se quer, para migrar sua aplicação de monolítico para distribuído. Basta somente você fazer tudo funcionar no formato monolítico e depois somente alterar o docker-compose.yaml configurando tudo em containers separados; ou seja, somente um deployment configuration e nada mais. E como mágica, tudo funciona de forma balanceada (claro que graças ao Traefik que já temos integrado ao projeto, neste caso).
  - [x] Criar réplica do Gretter Service
  - [x] Incluir o HelperService para subir em container
  - [x] Parar o serviço: Ctrl + C no console.

Teste: chamar o serviço greeter.hello no Browser e verificar se as chamadas estão sendo balanceadas entre containers:
  - [x] $ npm run dc:up // Criar e/ou subir os containers
  - [x] No browser: http://localhost:3000/api/greeter/hello
  Se tudo deu certo, você terá como resposta algo parecido com:
  { payload: 'Olá do greeter@lnx-colque-11313', number: 3 }
  Como o número gerado é aleatório, cada vez que aciona o greeter.hello retorna um número diferente.
  - [x] Verificado que o número do nodeID (qual container respondeu ao request) está mudando, ou seja, está sendo feito o load balanced.
  - [x] $ npm run dc:down // Baixar e remover os containers

## Release da versão 2.0.0
- [x] Gerada a TAG 2.0.0
  
## Considerações Finais
---
Isso que acabamos de implementar é só o começo. Além de codar, uma outra coisa bem importante é identificar o potencial desse tipo de solução para atender demandas de negócio com mais agilidade, flexibilidade, escalabilidade, disponibilidade, confiabilidade e segurança. Isso é que dá sentido ao DevOps para o Negócio. Questões como segurança serão abordados em novas jornadas. Espero que tenham se divertido também. 

---
