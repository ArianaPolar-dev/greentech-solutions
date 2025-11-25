export default function CaseList() {
  return (
    <section aria-labelledby="casos">
      <h2 id="casos">Casos de éxito</h2>
      <div style={{display:'flex',gap:'1.2rem',flexWrap:'wrap'}}>
        <div style={{background:'#e5f9f3',borderRadius:8,padding:18,minWidth:200,flex:'1 1 200px'}}>
          <h4>Granja Verde</h4>
          <p>Ahorro del 28% en consumo eléctrico anual mediante automatización de riego y sensores inteligentes.</p>
        </div>
        <div style={{background:'#e5f9f3',borderRadius:8,padding:18,minWidth:200,flex:'1 1 200px'}}>
          <h4>Oficinas Sustentables</h4>
          <p>Reducción del 40% en uso de papel y mejora de procesos digitales.</p>
        </div>
        <div style={{background:'#e5f9f3',borderRadius:8,padding:18,minWidth:200,flex:'1 1 200px'}}>
          <h4>EcoMarket PYME</h4>
          <p>Auditoría energética digital: bajó su huella de carbono en 1.3Tn CO₂ al año en 2025.</p>
        </div>
      </div>
    </section>
  );
}
