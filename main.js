const buttomConfirm = document.getElementById('confirm-button');
const studentTable  = document.getElementById('student-table');

function addRow(matricula, nome, nota, faltas, situacao){
    const newRow        = studentTable.insertRow(-1); // 0, 1
    const cellMatricula = newRow.insertCell(0);
    const cellNome      = newRow.insertCell(1);
    const cellNota      = newRow.insertCell(2);
    const cellFaltas    = newRow.insertCell(3);
    const cellSituacao  = newRow.insertCell(4);
     
    cellMatricula.innerHTML = matricula;
    cellNome.innerHTML      = nome;
    cellNota.innerHTML      = nota;
    cellFaltas.innerHTML    = faltas;
    cellSituacao.innerHTML  = situacao;
};

function addMatricula(){
      const matricula = document.getElementById("matricula").value;
      const nome      = document.getElementById("nome").value;
      const nota      = parseFloat(document.getElementById("nota").value);
      const faltas    = parseInt(document.getElementById("faltas").value);
      let situacao = "AA"; // significa aprovado
      
      if(nota < 7){
        situacao = "RA";  // reprovado por nota
      };
      if(faltas > 6){
        situacao = "RF";  // reprovado por faltas
      };
      //console.log(matricula, nome, nota, faltas, situacao);

      addRow(matricula, nome, nota, faltas, situacao);

      document.getElementById("matricula").value = "";
      document.getElementById("nome").value = "";
      document.getElementById("nota").value = "";
      document.getElementById("faltas").value = "";


};

buttomConfirm.addEventListener('click',addMatricula);

