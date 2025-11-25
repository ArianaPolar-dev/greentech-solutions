export default function BlogList() {
  return (
    <section aria-labelledby="blog">
      <h2 id="blog">Últimos artículos</h2>
      <ul style={{padding:0,listStyle:'none',display:'flex',gap:'1rem',flexWrap:'wrap'}}>
        <li style={{background:'#fff',padding:'16px',borderRadius:8,minWidth:210,flex:'1 1 150px'}}>
           <a href="#">5 pasos para digitalizar procesos verdes</a>
           <span style={{display:'block',color:'#58A3A9',marginTop:6}}>22 nov 2025</span>
        </li>
        <li style={{background:'#fff',padding:'16px',borderRadius:8,minWidth:210,flex:'1 1 150px'}}>
           <a href="#">Qué es una auditoría energética digital</a>
           <span style={{display:'block',color:'#58A3A9',marginTop:6}}>18 nov 2025</span>
        </li>
      </ul>
    </section>
  );
}
