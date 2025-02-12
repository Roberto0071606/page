let negativeMessages = [
    "No", "¿Estás segura??", "¿Deberías, completamente segura??", "Kha? ¿Por qué aún no es un Yes??",
    "Amoooor", "Bubs", "Momento Sad :(", "Carmen Milady", "Ya no te hagas bien que quieres",
    "Tú lo sabes, yo lo sé", "Mmmm", "Sí", "Aaaaa daltónica, prueba verde"
  ];
  
  let negativeMessageIndex = 0;
  
  let yesButton = document.getElementById("yes-button");
  let noButton = document.getElementById("no-button");
  let repeatButton = document.getElementById("repeat-button");
  
  let firstScreen = document.getElementById("first-screen");
  let thankYouScreen = document.getElementById("thank-you-screen");
  
  yesButton.addEventListener('click', function() {
    firstScreen.style.display = 'none';
    thankYouScreen.style.display = 'block';
  });
  
  noButton.addEventListener('click', function() {
    if (negativeMessageIndex === negativeMessages.length - 1) {
      negativeMessageIndex = 0;
    } else {
      negativeMessageIndex++;
    }
    noButton.innerText = negativeMessages[negativeMessageIndex];
  });
  
  repeatButton.addEventListener('click', function() {
    firstScreen.style.display = 'block';
    thankYouScreen.style.display = 'none';
  });
  