<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>DuBeto Barbearia</title>
    <style>
        body {
            background: linear-gradient(90deg, red 33%, white 33% 66%, blue 66%);
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            background: rgba(255,255,255,0.8);
            max-width: 400px;
            margin: 40px auto;
            padding: 20px;
            border-radius: 8px;
        }
        h1 {
            text-align: center;
            color: #222;
        }
        label, input, button {
            display: block;
            width: 100%;
            margin-bottom: 12px;
        }
        button {
            background-color: red;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: blue;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>DuBeto Barbearia</h1>
        <form id="form-agendamento">
            <label for="nome">Nome do cliente:</label>
            <input type="text" id="nome" name="nome" required>
            
            <label for="servico">Serviço:</label>
            <input type="text" id="servico" name="servico" required>
            
            <label for="horario">Horário:</label>
            <input type="datetime-local" id="horario" name="horario" required>
            
            <button type="submit">Agendar</button>
        </form>
        <div id="mensagem"></div>
    </div>
    <script>
        document.getElementById('form-agendamento').onsubmit = async function(e) {
            e.preventDefault();
            const dados = {
                nome: document.getElementById('nome').value,
                servico: document.getElementById('servico').value,
                horario: document.getElementById('horario').value
            };
            const resposta = await fetch('/api/agendar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            });
            const resultado = await resposta.json();
            document.getElementById('mensagem').textContent = resultado.mensagem || 'Agendado com sucesso!';
        };
    </script>
</body>
</html>