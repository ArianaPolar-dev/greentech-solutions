export default function BudgetForm() {
  return (
    <section aria-labelledby="budget" id="budget">
      <h2 id="budget">Solicita un presupuesto</h2>
      <form style={{background:'#fff',borderRadius:10,padding:28,boxShadow:'0 2px 8px #e5f9f3',maxWidth:420}}>
        <label>Nombre<br/>
          <input type="text" placeholder="Tu nombre" required style={{width:"100%",margin:'8px 0 16px 0'}}/>
        </label>
        <label>Email<br/>
          <input type="email" placeholder="Correo electrónico" required style={{width:"100%",margin:'8px 0 16px 0'}}/>
        </label>
        <label>Servicio de interés<br/>
          <select style={{width:"100%",margin:'8px 0 16px 0'}}>
            <option>Automatización verde</option>
            <option>Auditoría energética</option>
            <option>Ambos</option>
          </select>
        </label>
        <label>Mensaje<br/>
          <textarea placeholder="Cuéntanos sobre tu empresa" rows={3} style={{width:'100%',margin:'8px 0 20px 0'}} />
        </label>
        <button type="submit" style={{background:'var(--green)',color:'#fff',padding:'12px 30px',border:'none',borderRadius:7}}>Enviar</button>
      </form>
    </section>
  );
}
