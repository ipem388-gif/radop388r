document.addEventListener('DOMContentLoaded', () => {

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar el menú al hacer click en un link (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Año automático en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});

/* ============================================================
   NOTA SOBRE EL REPRODUCTOR EN VIVO
   ============================================================
   Actualmente la radio se reproduce embebiendo la página de
   Listen2MyRadio dentro de un <iframe> (ver #radioFrame en
   index.html), porque la URL real del stream se genera de
   forma dinámica y no es una dirección fija.

   Si en algún momento conseguís la URL directa del stream
   (algo como https://SERVIDOR:PUERTO/stream o .../;stream.mp3),
   podés reemplazar el iframe por un reproductor propio así:

   HTML (en vez del iframe):
     <audio id="player" preload="none">
       <source src="URL_DEL_STREAM" type="audio/mpeg">
     </audio>
     <button id="playBtn">Reproducir</button>

   JS:
     const audio = document.getElementById('player');
     const playBtn = document.getElementById('playBtn');
     playBtn.addEventListener('click', () => {
       if (audio.paused) {
         audio.play();
         playBtn.textContent = 'Pausar';
       } else {
         audio.pause();
         playBtn.textContent = 'Reproducir';
       }
     });

   Cómo conseguir esa URL:
   1. Abrí https://ipem388.radio12345.com/ en Chrome.
   2. Abrí las herramientas de desarrollador (F12) → pestaña "Network".
   3. Filtrá por "Media" y le das play al reproductor de esa página.
   4. Va a aparecer una petición cuyo nombre termina en algo como
      ";stream" o ".mp3"/".aac" con tipo "audio" — esa es la URL real.
   5. Copiá esa URL completa (con http:// o https://) y usala en el
      <source> de arriba.
   ============================================================ */