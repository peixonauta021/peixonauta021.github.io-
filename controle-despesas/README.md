# Controle de Despesas

Este projeto é uma aplicação web simples para controle de despesas, permitindo que os usuários insiram informações sobre seus gastos e visualizem um resumo dessas informações.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

```
controle-despesas
├── src
│   ├── pages
│   │   ├── index.html        # Página principal com o formulário de gastos
│   │   └── resumo.html       # Página que exibe o resumo dos gastos
│   ├── components
│   │   ├── expenseForm.js    # Lógica do formulário de despesas
│   │   └── expenseTable.js    # Gerenciamento da tabela de despesas
│   ├── styles
│   │   └── main.css          # Estilos CSS para o projeto
│   └── scripts
│       └── app.js            # Ponto de entrada do JavaScript
├── package.json               # Configuração do npm
├── .gitignore                 # Arquivos e pastas a serem ignorados pelo Git
└── README.md                  # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL do repositório>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd controle-despesas
   ```

3. Instale as dependências (se houver):
   ```
   npm install
   ```

## Uso

1. Abra o arquivo `src/pages/index.html` em um navegador.
2. Insira os dados dos gastos no formulário.
3. Clique em "Adicionar" para incluir os gastos na tabela.
4. Clique em "Calcular" para visualizar o resumo dos gastos na página `resumo.html`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie suas alterações através de um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.