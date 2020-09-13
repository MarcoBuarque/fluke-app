# fluke-app

### Sobre o Projeto: ###
 Essa aplicação tem como intuito reproduzir 3 funcionalidades que um usuário da Fluke teria acesso:
 - Consumo instantâneo: A quantidade de dados móvies e minutos que o usuário tem disponível no plano atual.
 - Histórico: O histórico de consumo de dados móveis e minutos do usuário
 - Central de Ajuda: Local onde o usuário pode sanar algumas das suas dúvidas e, caso necessário, entrar em contato com a empresa


### Pré-requisitos ###
 - [O ambiente de desenvolvimento React Native pré-configurado](http://react-native.rocketseat.dev/)
 - O .env do projeto para ter acesso ao(s) Endpoint(s)
 
### Començando (Android)###
Após clonar o projeto basta realizar os seguintes passos no terminal: 
 1 - Abrir um emulador ou conectar o seu device no computador
 2 - Rodar o comando 'yarn' para baixar as depedências do projeto
 3 - Rodar o comando 'yarn android' para instalar o app no emulador/celular
 4 - Rodar o comando 'yarn start' 


 
 ### Versionamento no Git ###
 O projeto foi divido em 4 etapas:
  - 1 Setup de desenvolvimento:
    - Criação do projeto RN.
    - Instalação das principais dependências.
    - Reestruturação do projeto
    - Criação da estrutura de navegação
 
  - 2 Criação da Home:
    - Criação do Header Component
    - Criação do layout da Home screen
  
  - 3 Criação do Detail Data:
    - Criação do layout do DetailData screen
    
  - 4 Alimentar as telas com os dados vindo da api:
    - Criação do fluke service e as funções para alimentar a aplicação com os dados instantâneos e com o histórico
    - Conectar a Home Screen com o fluke service
    - Conectar a Detail Deta Screen com o fluke service
    
    
### Principais dependências: ###
 - React Native 0.63.2
 - React 16.13.1
 - React Navigation Native 5.7.3
 - React Navigation Stack 5.9.0
 - Styled Components 5.2.0
 - React Native Dot env 2.4.0
 - Axios 0.20.0
 - Lodash 4.17.20
 - Prop Types 15.7.2
