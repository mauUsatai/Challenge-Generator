const htmlGenerator = challenges => {
  let tableValues = '';
  for ( let challenge in challenges ) {
    tableValues += `          
      <tr>
        <td>${challenges[challenge].question}</td>
        <td>[${challenges[challenge].inputs[0]}]</td>
        <td>[${challenges[challenge].outputs[0]}]</td>
      </tr>
    `;
  }

  const baseCode = `
    const axios = require('axios');
    const _ = require('lodash');
    const fs = require('fs');
    
    // Escreva seu codigo nas funcoes abaixo
    const solution_1 = input => {
      return input;
    };
    
    const solution_2 = input => {
      return input;
    }
    
    const solution_3 = input => {
      return input;
    };
    
    const SERVER_ADDRESS = 'localhost'; // Substituir pelo endereco do servidor
    
    const getInputs = async () => {
      let res;
      try {
        res = await axios.get(\`http://\${SERVER_ADDRESS}:3000/api/questions\`);
      } catch (err) {
        console.log('Nao foi possivel acessar o servidor, tente mais tarde');
        return;
      }
    
      console.table(
        res.data.map(data => {
          return { Questao: data.question };
        })
      );
    
      // Write gathered inputs to local file
      fs.writeFileSync('./data.json', JSON.stringify(res.data));
    };
    
    const run = async () => {
      // Terminal colors
      const red = '\\x1b[31m';
      const green = '\\x1b[32m';
      const yellow = '\\x1b[33m';
      const reset = '\\x1b[0m';
    
      const pass = \`[\${green}pass\${reset}]\`;
      const fail = \`[\${red}fail\${reset}]\`;
    
      if ( fs.existsSync('./data.json') ) {
        const questions = JSON.parse(fs.readFileSync('./data.json'));
        // Run test cases
        for ( let i = 0; i < questions.length; i++ ) {
          const { question, inputs, outputs } = questions[i];
          console.log(\`\\n\${yellow}\${i + 1}. \${question}\${reset}\\n\`);
          for ( let j = 0; j < inputs.length; j++ ) {
            try {
              let answer = eval(\`solution_\${i + 1}(_.clone(inputs[\${j}]))\`);
              let passed = _.isEqual(answer, outputs[j]) ? pass : fail;
              console.log(''.padEnd(5), 'test case', j + 1, ''.padEnd(10, '.'), passed);
            } catch (err) {
              console.log(\`\${red}\${err.message}\${reset}\`);
            }
          }
        }
      } else {
        getInputs();
      }
      console.log();
    }
    
    run();
  `;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Challenge Generator!</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/css/global.css">
      </head>
      <body>
        <section class="container">
          <h1 style="padding-top: 1px;">Bem Vindo Ao Challenge Generator</h1>
          <h2>Desafios</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Desafio</th>
                <th>Input</th>
                <th>Output Esperado</th>
              </tr>
            </thead>
            <tbody>
              ${tableValues}
              <tr>
                <td>Utilizar apis nativas?</td>
                <td>${Math.random() > 0.5 ? 'Sim' : 'Nao'}</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <h2>ou, baixe e resolva os desafios em sua maquina local:</h2>
          <h5 style="padding-top: 20px">1. mkdir desafio</h5>
          <h5>2. cd desafio && npm install axios lodash</h5>
          <h5>3. crie um arquivo vazio chamado solutions.js</h5>
          <h5>4. copie e cole o trecho de codigo abaixo no arquivo solutions.js</h5>
          <h5>6. <strong>node solutions.js</strong> para trazer os desafios</h5>
          <h5>7. rode <strong>node solutions.js</strong> para testar e validar suas solucoes</h5>
          <pre>
            ${baseCode}
          </pre>
        <section>
      </body>
    </html>
  `;
  return html;
};

module.exports = htmlGenerator;