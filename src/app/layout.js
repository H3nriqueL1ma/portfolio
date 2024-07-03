import "./globals.css";

export const metadata = {
  title: "Henrique's Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="logo.png"/>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossOrigin="anonymous"/>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" 
          rel="stylesheet" 
          crossOrigin="anonymous"/>
        <link 
          rel="stylesheet" 
          type='text/css' 
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"/>
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
          crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
