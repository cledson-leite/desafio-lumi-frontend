# Desafio Lumi Frontend

O objetivo será desenvolver um a aplicação web para acessar e vizualizar os dados do backend

## Detalhamento do desafio

Foi desenvolvido uma aplicação usando nextjs 14, com metodo app router, composto por duas telas:

### Home
Página para acompanhar as principais variáveis da fatura de energia
elétrica ao longo do tempo. Sendo:  
* Consumo e Compensação de energia em kwh
* Total e Economizada em valores monetarios

Esses dados são mostrados em grafico de barra sequencionado por mês de referencia e podendo ser selecionado o numero do cliente e ano de referencia.

### Faturas
Página dedicada à disponibilização das faturas ao usuário final, permitindo que o usuário forneça sua conta em pdf para persistir no sistema. Também é permito selecionar um determinado Nº DO CLIENTE, ano de referencia e mês de referencia para realizar o download de sua fatura de energia elétrica para um mês específico.

## Stacks

Para essa desafio foi usado:
* react 18
* nextjs 14
* axios 1.7
* MUI 5
* MUI - chart 7
* typescript 5

### Organização de pastas
Todo o sistema esta contido na pasta src, exceto as configurações de dependencias e projeto:

* app - contem o layout da alicação assim como as paginas que rodeam o sistema;

* component - contem todos os componentes usado separados posr paginas onde são usados;

* config - contem a configuração do axios;

* context - contem todos os contextos;

* provider - padrão proxy usado para centralizar todos os contexto providos isolando=o do layout;

* styles - contem os estilos globais e variaveis de estilo;

### Produção
A aplicação esta hospedada em servidor proprio nesta url [Frontend](https://desafio-lumi-frontend-h38i.vercel.app/)
```
## Execução local
```
git clone https://github.com/cledson-leite/desafio-lumi-frontend.git

cd desafio-lumi-frontend
yarn ou npm i ou npm install
yarn dev ou npm rum dev

```
necessario criar um .env.local copiando o arquivo .env.example e fornecendo a url base para o backend:
* https://desafio-lumi-backend.up.railway.app/ - se usar o servidor

*http://localhost:3000 - se usar o backend local
