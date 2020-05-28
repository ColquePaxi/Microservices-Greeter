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
- [ ] Gerada a TAG v.1.0.0

## Hora de codar o microsserviço
---
Padrão monolítico (para efeito de desenvolvimento): 
  - [ ] Traduzir as mensagens dos serviços p/ idioma português (branch: feature/brazuka)
  - [ ] Criar um novo serviço (helper service) que "conversará" com o greeter service (branch: feature/helper)
  - [ ] Teste: chamar o novo serviço fora do Browser (isso serve para qualquer outro serviço)
  - [ ] Emitir um evento por um serviço e escutar através de outro serviço, realizando uma ação (branch: feature/emit)
  - [ ] Criar uma ação no helper service que vai interagir com o greeter.hello (branch: feature/action)
  
Padrão distribuído em containers docker (branch: feature/distributed): 
  - [ ] Configurar os containers em rede
  - [ ] Criar réplica do Gretter Service
  - [ ] Teste: chamar o serviço greeter.hello no Browser e verificar se as chamadas estão sendo balanceadas entre containers

## Considerações Finais
---
Isso que acabamos de implementar é só o começo. Além de codar, uma outra coisa bem importante é identificar o potencial desse tipo de solução para atender demandas de negócio com mais agilidade, flexibilidade, escalabilidade e disponibilidade, quando olhado pelo prisma do engenheiro de software. Questões como segurança serão abordados em novas jornadas. Espero que tenham se divertido também. 

---
