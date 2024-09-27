// moonPhase.js

// Function to calculate the moon phase
function calculateMoonPhase(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear();
  
    // Algorithm to calculate moon phase
    const c = (year - 2000) / 100;
    const e = 1 - (0.00273790935 * (day + (31 * (month - 1)) + (c * 30.6)));
    const phase = Math.round((e - Math.floor(e)) * 29.53);
  
    return phase < 0 ? phase + 29 : phase; // Ensure the phase is positive
  }
  
  // Function to display the moon phase
  function displayMoonPhase() {
    const moonPhaseElement = document.getElementById('moon-phase');
    const today = new Date();
    const phase = calculateMoonPhase(today);
  
    let phaseName;
    let phaseImage;
  
    // Determine the moon phase name and image
    switch (phase) {
      case 0:
      case 1:
        phaseName = 'New Moon';
        phaseImage = 'images/new_moon.png'; // Replace with actual image path
        break;
      case 7:
      case 8:
        phaseName = 'First Quarter';
        phaseImage = 'images/first_quarter.png'; // Replace with actual image path
        break;
      case 14:
      case 15:
        phaseName = 'Full Moon';
        phaseImage = 'images/full_moon.png'; // Replace with actual image path
        break;
      case 21:
      case 22:
        phaseName = 'Last Quarter';
        phaseImage = 'images/last_quarter.png'; // Replace with actual image path
        break;
      default:
        phaseName = 'Waxing/Waning Crescent';
        phaseImage = 'images/crescent.png'; // Replace with actual image path
    }
  
    // Update the DOM with the moon phase information
    moonPhaseElement.innerHTML = `
      <h2>Current Moon Phase: ${phaseName}</h2>
      <img src="${phaseImage}" alt="${phaseName}" style="width: 100px; height: auto;" />
    `;
  }
  
  // Call the function to display the moon phase on page load
  displayMoonPhase();
  