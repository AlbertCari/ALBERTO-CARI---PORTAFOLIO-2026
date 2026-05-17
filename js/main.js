const canvas =
document.createElement("canvas");

canvas.id = "bg-canvas";

document.body.appendChild(canvas);

const ctx =
canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;

}

window.addEventListener(
  "resize",
  resizeCanvas
);

resizeCanvas();

class Particle {

  constructor() {

    this.x =
      Math.random() * canvas.width;

    this.y =
      Math.random() * canvas.height;

    this.radius =
      Math.random() * 2 + 1;

    this.speedX =
      (Math.random() - 0.5) * 0.3;

    this.speedY =
      (Math.random() - 0.5) * 0.3;

  }

  update() {

    this.x += this.speedX;
    this.y += this.speedY;

    if (
      this.x < 0 ||
      this.x > canvas.width
    ) this.speedX *= -1;

    if (
      this.y < 0 ||
      this.y > canvas.height
    ) this.speedY *= -1;

  }

  draw() {

    ctx.beginPath();

    ctx.arc(
      this.x,
      this.y,
      this.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      "rgba(120,180,255,0.4)";

    ctx.fill();

  }

}

for (let i = 0; i < 120; i++) {

  particles.push(
    new Particle()
  );

}

function connectParticles() {

  for (let a = 0; a < particles.length; a++) {

    for (let b = a; b < particles.length; b++) {

      let dx =
        particles[a].x -
        particles[b].x;

      let dy =
        particles[a].y -
        particles[b].y;

      let distance =
        Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {

        ctx.beginPath();

        ctx.strokeStyle =
          "rgba(140,200,255,0.08)";

        ctx.lineWidth = 1;

        ctx.moveTo(
          particles[a].x,
          particles[a].y
        );

        ctx.lineTo(
          particles[b].x,
          particles[b].y
        );

        ctx.stroke();

      }

    }

  }

}

function animate() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  particles.forEach(particle => {

    particle.update();
    particle.draw();

  });

  connectParticles();

  requestAnimationFrame(
    animate
  );

}

animate();