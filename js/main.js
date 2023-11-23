let problemas = [];

        function llenarTabla() {
            let tabla = document.getElementById("incidentTable");
            tabla.innerHTML = '<tr><th>Número de Incidente</th><th>Número de PC</th><th>Problema</th><th>Estado de Resolución</th></tr>';

            problemas.forEach(function (incidente) {
                let fila = tabla.insertRow();
                let celdaNumero = fila.insertCell(0);
                let celdaNumerodePC = fila.insertCell(1)
                let celdaProblema = fila.insertCell(2);
                let celdaResuelto = fila.insertCell(3);

                celdaNumero.innerHTML = incidente.numero;
                celdaNumerodePC.innerHTML = incidente.NumerodePC
                celdaProblema.innerHTML = incidente.problema;
                celdaResuelto.innerHTML = incidente.resuelto ? "Resuelto" : "Pendiente";
                
            });
        }

        function agregarProblema() {
            let numero = prompt("Ingrese el número de incidente:");
            let NumerodePC= prompt("ingresa el numero de PC")
            let problema = prompt("Ingrese la descripción del problema");
            let resuelto = confirm("Se ha resuelto el problema");

           
            problemas.push({ numero: numero, problema: problema, resuelto:resuelto, NumerodePC: NumerodePC });
            llenarTabla();
        }

        llenarTabla();
    
