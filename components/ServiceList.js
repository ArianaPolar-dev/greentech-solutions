export default function ServiceList() {
  return (
    <section aria-labelledby="servicios">
      <h2 id="servicios">¿Qué solucionamos?</h2>
      <div style={{display:'flex',gap:'1.5rem',flexWrap:'wrap'}}>
        <div style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 6px #e0ebe7',padding:24,flex:'1 1 270px',minWidth:230}}>
          <h3>Automatización de procesos verdes</h3>
          <p>Incorpora tecnología en tus operaciones para reducir consumo energético y papel, y optimiza la gestión de residuos.</p>
        </div>
        <div style={{background:'#fff', borderRadius:12, boxShadow:'0 2px 6px #e0ebe7',padding:24,flex:'1 1 270px',minWidth:230}}>
          <h3>Auditoría energética digital</h3>
          <p>Analizamos y transformamos tu consumo energético, proponiendo medidas y soluciones inteligentes para minimizar tu huella de carbono.</p>
        </div>
      </div>
    </section>
  );
}
