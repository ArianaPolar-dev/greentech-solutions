'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar todos los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ImpactChart() {
  const data = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [{
      label: 'Toneladas de CO₂ reducidas',
      data: [1.2, 1.8, 2.4, 3.7, 5.0],
      backgroundColor: ['#37996B', '#45A577', '#52B183', '#60BD8F', '#6EC99B'],
      borderRadius: 8,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { 
        display: true, 
        position: 'top' 
      },
      title: { 
        display: false 
      }
    },
    scales: {
      y: { 
        beginAtZero: true 
      }
    }
  };

  return (
    <section 
      aria-labelledby="impacto" 
      style={{
        background:'#fff',
        padding:32,
        borderRadius:12,
        boxShadow:'0 2px 8px #e0ebe7',
        marginTop:40
      }}
    >
      <h2 id="impacto">Impacto ambiental acumulado</h2>
      <p style={{marginBottom:20}}>
        Desde 2021, hemos ayudado a reducir más de <strong>14.1 toneladas de CO₂</strong> con nuestras soluciones.
      </p>
      <div style={{maxWidth:'100%', height:'auto'}}>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}
