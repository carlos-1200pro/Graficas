$(document).ready(function() {
    // Datos iniciales del gráfico
    let labels = [];
    let values = [];

    // Crear gráfico con Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: barras
        data: {
            labels: labels, // Etiquetas para el eje X
            datasets: [{
                label: 'Datos Ingresados',
                data: values, // Datos para el gráfico
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de las barras
                borderColor: 'rgba(54, 162, 235, 1)', // Color de borde de las barras
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Manejo del envío del formulario
    $('#dataForm').submit(function(event) {
        event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

        // Obtener valores del formulario
        const label = $('#label').val();
        const value = parseInt($('#value').val());

        // Verificar si los datos son válidos
        if (label && !isNaN(value)) {
            // Agregar los nuevos datos al gráfico
            labels.push(label);
            values.push(value);

            // Actualizar los datos del gráfico
            myChart.update();

            // Limpiar los campos del formulario
            $('#label').val('');
            $('#value').val('');
        } else {
            alert('Por favor, ingresa valores válidos.');
        }
    });
});
