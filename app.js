const form = document.getElementById("contact-form"); // Seleziona il form con id "contact-form"
const nome = document.getElementById("nome"); // Seleziona l'input del nome
const email = document.getElementById("email"); // Seleziona l'input dell'email
const errorNome = document.getElementById("error-nome"); // Seleziona lo span dove mostrare l'errore per il nome
const errorEmail = document.getElementById("error-email"); // Seleziona lo span dove mostrare l'errore per l'email

form.addEventListener("submit", (e) => {
  // Aggiunge un listener che intercetta l'invio del form
  e.preventDefault(); // Previene il comportamento di submit predefinito (ricarica/pagamento)
  let valid = true; // Flag che indica se la validazione è passata

  errorNome.textContent = ""; // Pulisce eventuali messaggi d'errore precedenti per il nome
  errorEmail.textContent = ""; // Pulisce eventuali messaggi d'errore precedenti per l'email
  nome.classList.remove("error"); // Rimuove la classe "error" dal campo nome (reset visivo)
  email.classList.remove("error"); // Rimuove la classe "error" dal campo email (reset visivo)

  if (!nome.value.trim()) {
    // Se il valore del nome è vuoto o solo spazi
    errorNome.textContent = "Il nome è obbligatorio."; // Mostra messaggio d'errore per il nome
    nome.classList.add("error"); // Aggiunge classe "error" per evidenziare il campo
    valid = false; // Imposta flag a false: validazione fallita
  }

  if (!email.value.trim()) {
    // Se il valore dell'email è vuoto o solo spazi
    errorEmail.textContent = "L’email è obbligatoria."; // Mostra messaggio d'errore per l'email
    email.classList.add("error"); // Aggiunge classe "error" per evidenziare il campo
    valid = false; // Validazione fallita
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    // Altrimenti: controlla il formato dell'email con una regex semplice
    // La regex verifica: almeno un carattere non @/spazio, poi @, poi dominio, poi .estensione
    errorEmail.textContent = "Inserisci un’email valida."; // Messaggio se il formato non è valido
    email.classList.add("error"); // Evidenzia il campo email
    valid = false; // Validazione fallita
  }

  if (valid) {
    // Se tutti i controlli sono passati
    alert("Messaggio inviato con successo!"); // Notifica (puoi sostituire con un toast non intrusivo)
    form.reset(); // Pulisce tutti i campi del form (ripristina lo stato iniziale)
  }
}); // Fine del listener submit

// anno dinamico footer
document.getElementById("year").textContent = new Date().getFullYear(); // Inserisce l'anno corrente nello span con id "year"
