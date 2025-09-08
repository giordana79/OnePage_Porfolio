// app.js — comportamento minimale: menu mobile, validazione form, anno dinamico

// Menu mobile: toggle classe `open` su <nav> e aggiornamento aria-expanded sul bottone
const navBtn = document.getElementById("menuBtn");
// Seleziona il bottone del menu mobile tramite ID

const nav = document.getElementById("primary-nav");
// Seleziona l'elemento <nav> principale tramite ID

if (navBtn && nav) {
  // Controlla che entrambi gli elementi esistano prima di aggiungere l'evento
  navBtn.addEventListener("click", () => {
    // Aggiunge un listener per il click sul bottone

    const expanded = navBtn.getAttribute("aria-expanded") === "true";
    // Legge lo stato attuale di aria-expanded (true/false)

    navBtn.setAttribute("aria-expanded", String(!expanded));
    // Inverte lo stato di aria-expanded e lo aggiorna.

    nav.classList.toggle("open");
    // Aggiunge o rimuove la classe "open" sul nav per mostrarlo/nasconderlo
  });
}

// Form: blocca l'invio se nome o email sono vuoti; altrimenti alert e reset
const form = document.getElementById("contact-form");
// Seleziona il form di contatto tramite ID

if (form) {
  // Controlla che il form esista prima di aggiungere l'evento
  form.addEventListener("submit", (e) => {
    // Aggiunge un listener per l'invio del form
    e.preventDefault();
    // Previene l'invio standard per poter gestire la validazione via JS

    const nome = (form.nome?.value || "").trim();
    // Prende il valore del campo 'nome', se non esiste restituisce stringa vuota, rimuove spazi iniziali/finali

    const email = (form.email?.value || "").trim();
    // Prende il valore del campo 'email', stessa logica prec.

    if (!nome || !email) {
      alert("Compila i campi obbligatori");
      // Mostra alert se nome o email sono vuoti e blocca l'invio
      return;
    }

    alert("Messaggio inviato");
    // Mostra alert di conferma se tutti i campi obbligatori sono compilati

    form.reset();
    // Resetta il form cancellando tutti i valori
  });
}

// Anno dinamico footer
document.getElementById("year").textContent = new Date().getFullYear();
