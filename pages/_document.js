import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="GreenTech Solutions: Consultoría en tecnología sostenible para pymes. Automatización verde y auditoría energética digital." />
        <meta name="keywords" content="tecnología sostenible, consultoría verde, auditoría energética, automatización procesos, pymes" />
        <meta name="author" content="Tu Nombre" />
        
        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="GreenTech Solutions - Tecnología Sostenible para Pymes" />
        <meta property="og:description" content="Transforma tu negocio con automatización verde y auditorías energéticas" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tu-dominio.vercel.app" />
        <meta property="og:image" content="https://tu-dominio.vercel.app/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GreenTech Solutions" />
        <meta name="twitter:description" content="Consultoría en tecnología sostenible" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
