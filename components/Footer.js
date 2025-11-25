export default function Footer() {
  return (
    <footer style={{background:'var(--dark-green)',color:'#E5F9F3',padding:'40px 20px',marginTop:80}}>
      <div className="container" style={{textAlign:'center'}}>
        <p style={{fontSize:'1.1rem',marginBottom:12}}>🌱 GreenTech Solutions</p>
        <p style={{opacity:0.8,marginBottom:20}}>Transformando pymes hacia un futuro sostenible</p>
        <div style={{display:'flex',justifyContent:'center',gap:24,marginBottom:20}}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:'#E5F9F3'}}>LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{color:'#E5F9F3'}}>GitHub</a>
          <a href="mailto:contacto@greentech.com" style={{color:'#E5F9F3'}}>Email</a>
        </div>
        <p style={{fontSize:'0.9rem',opacity:0.7}}>© 2025 GreenTech Solutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
