export default function TestimonialList() {
  return (
    <section aria-labelledby="testimonios">
      <h2 id="testimonios">Testimonios reales</h2>
      <div style={{display:'flex',flexWrap:'wrap',gap:'1.3rem'}}>
        <blockquote style={{background:"#fff",borderRadius:12,padding:20,boxShadow:'0 2px 6px #dadada',minWidth:220,flex:'1 1 200px'}}>
          "La consultoría nos permitió no solo ahorrar, sino impactar positivo en el ambiente." 
          <footer>- Lucía González, Gerente EcoMarket</footer>
        </blockquote>
        <blockquote style={{background:"#fff",borderRadius:12,padding:20,boxShadow:'0 2px 6px #dadada',minWidth:220,flex:'1 1 200px'}}>
          "El proceso fue transparente, medible y efectivo. ¡Muy recomendados!"
          <footer>- Daniel Ríos, CEO Granja Verde</footer>
        </blockquote>
      </div>
    </section>
  );
}
