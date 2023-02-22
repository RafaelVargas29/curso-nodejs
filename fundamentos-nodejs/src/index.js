const express = require('express'); // importando o express

const app = express(); // chamando a função do express

// Recebe o path da rota desejada (rota padrão localhost:portaDefinida/rotaDefinida)
// Recebe uma requisição e uma resposta (request e response)
app.get("/courses", (request, response) => {
    return response.json([ "Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
    return response.json([ "Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

// /:id : significa que a rota espera o parâmetro id do curso que severá ser modificado
app.put("/courses/:id", (request, response) => {
    return response.json([ "Curso 6", "Curso 2", "Curso 3", "Curso 4"]); // Alterando curso 1 para curso 6
});

app.patch("/courses/:id", (request, response) => {
    return response.json([ "Curso 6", "Curso 7", "Curso 3", "Curso 4"]);  // Alterando o curso 2 para curso 7
});

app.delete("/courses/:id", (request, response) => {
    return response.json([ "Curso 6", "Curso 2", "Curso 4"]);
});

app.listen(3333); // starta a aplicação na porta definida (endereço padrão: localhost:portaDefinida)