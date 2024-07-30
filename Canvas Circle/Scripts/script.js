alert("We got Moz on The Track")

        const canvas = document.getElementById('illusionCanvas');
        const ctx = canvas.getContext('2d');
        const size = Math.min(window.innerWidth, window.innerHeight) * 0.9;
        canvas.width = size;
        canvas.height = size;

        const numRings = 20;
        const maxRadius = size / 2;
        const speed = 0.02;

        function getColor(angle) {
            const r = Math.floor(128 + 128 * Math.sin(angle));
            const g = Math.floor(128 + 128 * Math.sin(angle + 2 * Math.PI / 3));
            const b = Math.floor(128 + 128 * Math.sin(angle + 4 * Math.PI / 3));
            return `rgb(${r},${g},${b})`;
        }

        function drawRing(radius, angleOffset, ringIndex) {
            ctx.beginPath();
            for (let i = 0; i < numRings; i++) {
                const angle = (i / numRings) * Math.PI * 2 + angleOffset;
                const x = canvas.width / 2 + Math.cos(angle) * radius;
                const y = canvas.height / 2 + Math.sin(angle) * radius;
                ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.strokeStyle = getColor(ringIndex * Math.PI * 2 / numRings + angleOffset);
            ctx.stroke();
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 2;

            for (let i = 0; i < numRings; i++) {
                const angleOffset = performance.now() * speed;
                const radius = maxRadius * (1 - i / numRings);
                drawRing(radius, angleOffset, i);
            }

            requestAnimationFrame(animate);
        }

        animate();