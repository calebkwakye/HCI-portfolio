function incrementPlayers() {
    const playerInput = document.getElementById("players");
    let currentValue = parseInt(playerInput.value, 10) || 0; 
    playerInput.value = currentValue + 1;
  }
  
  function decrementPlayers() {
    const playerInput = document.getElementById("players");
    let currentValue = parseInt(playerInput.value, 10) || 0; 
    if (currentValue > 0) {
      playerInput.value = currentValue - 1;
    }
  }
  
  function handlePlayerChange() {
    const playerInput = document.getElementById("players");
    let currentValue = parseInt(playerInput.value, 10) || 0; 
    if (currentValue < 0) {
      playerInput.value = 0; 
    }
  }