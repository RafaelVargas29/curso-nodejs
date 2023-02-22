const express = require('express'); // importando o express

const app = express(); // chamando a função do express

// Recebe o path da rota desejada (rota padrão localhost:portaDefinida/rotaDefinida)
// Recebe uma requisição e uma resposta (request e response)
app.get("/", (request, response) => {
    return response.json({message: "Hello World Ignite!"}); 
});

app.listen(3333); // starta a aplicação na porta definida (endereço padrão: localhost:portaDefinida)