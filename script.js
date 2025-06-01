// Funkcija, ki bo prikazala obvestilo po uspešni rezervaciji
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prepreči privzeto pošiljanje obrazca

    // Prikaži sporočilo o uspešni rezervaciji
    document.getElementById('confirmationMessage').style.display = 'block';

    // Počisti obrazec
    document.getElementById('reservationForm').reset();

    // Po želji lahko tukaj dodaš še dodatne funkcionalnosti (npr. pošiljanje e-pošte, shranjevanje podatkov)
});
