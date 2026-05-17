/* =========================
   CANVAS BACKGROUND
========================= */

const canvas =
document.createElement("canvas");

canvas.id = "bg-canvas";

document.body.appendChild(canvas);

const ctx =
canvas.getContext("2d");

let particles = [];

/* =========================
   RESIZE
========================= */

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

/* =========================
   PARTICLE CLASS
========================= */

class Particle {

  constructor() {

    this.x =
      Math.random() * canvas.width;

    this.y =
      Math.random() * canvas.height;

    this.radius =
      Math.random() * 2 + 1;

    this.speedX =
      (Math.random() - 0.5) * 1.2;

    this.speedY =
      (Math.random() - 0.5) * 1.2;

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
      "rgba(120,180,255,0.45)";

    ctx.fill();

  }

}

/* =========================
   CREATE PARTICLES
========================= */

for (let i = 0; i < 220; i++) {

  particles.push(
    new Particle()
  );

}

/* =========================
   CONNECT LINES
========================= */

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

      if (distance < 180) {

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

/* =========================
   ANIMATION LOOP
========================= */

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

/* =========================
   GLOW ORBS
========================= */

const orb1 =
document.createElement("div");

orb1.className =
  "glow-orb glow-orb-1";

document.body.appendChild(orb1);

const orb2 =
document.createElement("div");

orb2.className =
  "glow-orb glow-orb-2";

document.body.appendChild(orb2);

/* =========================
   MOUSE PARALLAX
========================= */

document.addEventListener(
  "mousemove",
  e => {

    const x =
      e.clientX / window.innerWidth;

    const y =
      e.clientY / window.innerHeight;

    orb1.style.transform =
      `translate(
        ${x * 120}px,
        ${y * 40}px
      )`;

    orb2.style.transform =
      `translate(
        ${x * -50}px,
        ${y * -50}px
      )`;

  }
);

/* =========================
   3D CARD EFFECT
========================= */

const cards =
document.querySelectorAll(
  ".category-card"
);

cards.forEach(card => {

  card.addEventListener(
    "mousemove",
    e => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const rotateY =
        ((x / rect.width) - 0.5) * 10;

      const rotateX =
        ((y / rect.height) - 0.5) * -10;

      card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;

    }
  );

  card.addEventListener(
    "mouseleave",
    () => {

      card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        `;

    }
  );

});