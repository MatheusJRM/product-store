# Product Store

_Product Store_ é uma aplicação em Angular 17.3.7 para gerenciar uma lista de produtos. Ela permite listar, criar, editar e excluir produtos. O projeto utiliza Angular Material para estilização, incluindo diálogos (dialogs), notificações (snack bars) e gerenciamento de formulários de criação (com formulário limpo) e edição (com dados carregados automaticamente). O backend é emulado com JSON Server, e a comunicação com o backend é feita utilizando o `HttpClient` com os métodos `GET`, `GETById`, `POST`, `PUT` e `DELETE`.

## Funcionalidades

- Listar produtos
- Criar um novo produto
- Editar um produto existente
- Excluir um produto

## Tecnologias Utilizadas

- Angular 17
- Angular Material
- JSON Server

## Boas Práticas

- Separação de responsabilidades entre componentes.
- Uso de Angular Material para uma UI consistente e responsiva.
- Notificações de sucesso e erro com snack bars.
- Diálogos para confirmação de ações.

## Pré-requisitos

- Node.js
- Angular CLI

## Instalação
- _npm install_
- _npx json-server db.json_ (Para emulação dos dados)
- _npm start_

