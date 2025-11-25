import { Bar } from 'react-chartjs-2';
export default function ImpactChart() {
  const data = {
    labels: ['2021','2022','2023','2024','2025'],
    datasets: [{
      label: 'Toneladas CO₂ reducidas',
      data: [1.2,1.8,2.4,3.7,5],
      backgroundColor: ['#37996B','#F5F6F8','#37996B','#E5F9F3','#189154']
    }]
  };
  return (
    <section>
      <h2>Impacto ambiental logrado</h2>
      <Bar data={data} />
    </section>
  );
}
