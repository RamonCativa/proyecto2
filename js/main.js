let problemas = [];

function agregarProblema() {
  const pcNumber = document.getElementById('pcNumber').value;
  const problemDescription = document.getElementById('problemDescription').value;
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  const types = Array.from(checkboxes).map(checkbox => checkbox.value);

  if (pcNumber && problemDescription && types.length > 0) {
    const problema = {
      pcNumber,
      problemDescription,
      types


    };

     problemas.push(problema);
        mostrarProblemas();
        limpiarFormulario();
      } else {
        alert('Por favor, complete todos los campos y seleccione al menos un tipo de problema.');
  }
}

function mostrarProblemas() {
  const listaProblemas = document.getElementById('problemList');
  listaProblemas.innerHTML = '';

  problemas.forEach((problema, index) => {
    const row = listaProblemas.insertRow();
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${problema.pcNumber}</td>
      <td>${problema.problemDescription}</td>
      
      <td> <label type="checkbox">Resuelto<th><input type="checkbox" ></label>
      </th></td>

      
      
    `;
  });
}

function eliminarProblema(index) {
  problemas.splice(index, 1);
  mostrarProblemas();
}

function ActualizarFormulario() {
  document.getElementById('pcNumber').value = '';
  document.getElementById('problemDescription').value = '';
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  
}

