const container = document.getElementById('container');
const projectiles = [];
let count = 0;

requestAnimationFrame(loop);

function loop() {
  count++;

  // Add a projectile every second
  if (count % 60 === 0) {
    // Add a new projectile to projectiles
    const newId = projectiles.length + 1;
    const newProjectile = {
      x: 100,
      y: 100,
      id: newId
    };
    projectiles.push(newProjectile);

    // Also add it to the DOM
    const div = document.createElement('div');
    div.id = newId;
    container.appendChild(div);
  }

  // Loop through the projectiles array
  projectiles.forEach((projectile, index) => {
    // Add 1 to x
    projectile.x += 1;
    
    // Get the node from the DOM
    const node = document.getElementById(projectile.id);

    if (projectile.x >= 600) {
      // If greater than 600, remove from the DOM
      node.remove();

      // And also remove from the array
      delete projectiles[index];
    } else {
      // Else update the data on the screen
      node.innerHTML = `id: ${projectile.id}, x: ${projectile.x}, y: ${projectile.y}`;
    }
  });

  // Call the next iteration
  requestAnimationFrame(loop);
}