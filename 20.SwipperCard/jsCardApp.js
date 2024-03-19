class Card3d {
    constructor (selector) {
        this.hitbox = document.querySelector(selector);
        this.card = this.hitbox.querySelector('.card');
        this.light = this.hitbox.querySelector('.light');
        // Propiedades de la tarjeta, nos brinda la posición y tamaño de la tarjeta
        const { width, height, left, top } = this.hitbox.getBoundingClientRect();

        this.size = { 
            x :width,
            y: height,
            left,
            top
        }

        this.halfSize = {
            x: width / 2,
            y: height / 2
        };
        // Calculando el centro
        this.origin = {
            x: left + this.halfSize.x,
            y: top + this.halfSize.y
        }
        this.angle = {
            x: 20,
            y: 20
        }
        this.mouse = {
            x: 0,
            y: 0
        }
        this.ratio = {
            x: 0,
            y: 0
        }
        this.mosueScreen = {
            x: 0,
            y: 0
        }
        this.setUpListeners();
    }
    calculateCardRotation () {
        const infoCardX = {
            mousePos: Number(this.mouse.x).toFixed(2),
            originPos: Number(this.origin.x).toFixed(2),
            halfSize: Number(this.halfSize.x).toFixed(2),
            size: Number(this.size.x).toFixed(2),
            left: this.size.left,
            top: this.size.top
        }
        const infoCardY = {
            mousePos: Number(this.mouse.y).toFixed(2),
            originPos: Number(this.origin.y).toFixed(2),
            halfSize: Number(this.halfSize.y).toFixed(2),
            size: Number(this.size.y).toFixed(2),
            left: this.size.left,
            top: this.size.top
        }
        // console.log(infoCardX);
        // console.log(infoCardY);
        const offset = {
            // Ejemeplo: 516 - 660 = -144
            x: this.mouse.x - this.origin.x,
            y: this.mouse.y - this.origin.y
        }
        this.ratio = {
            // -144 / 150 = -0.96
            x: offset.x / this.halfSize.x,
            y: offset.y / this.halfSize.y
        }
        const { x, y } = this.angle;
        return {
            // 20 * -0.96 = -19.2
            x: Number( (this.ratio.y * x).toFixed(1)),
            y: Number( (this.ratio.x * -y).toFixed(1))
        }
    }
    updateCardRotation () {
        const { x, y } = this.calculateCardRotation();
        // console.log(x,y);
        this.card.animate([
            { transform: `rotateX(${x}deg) rotateY(${y}deg)` }
        ], {
            duration: 0,
            fill: 'forwards'
        });

        // console.log(x,y);
    }
    resetCardRotation () {
        this.card.animate([
            {
                transform: `rotateX(0deg) rotateY(0deg)`,
            }
        ], {
            duration: 500,
            delay: 300,
            easing: 'ease',
            fill: 'forwards',
        });
    }
    updateLightPosition () { 
        const x = this.ratio.x * 100;
        const y = this.ratio.y * 100;
        this.light.style.background = `radial-gradient(circle at ${x}% ${y}%, 
            rgba(191, 184, 230, 0.2) 0%,
            rgba(191, 184, 230, 0.4) 10%,
             rgba(191, 184, 230, 0.3) 40%,
             transparent,
            transparent
            )`;
    }
    // Actualizando las propiedades con relación al cambio de tamaño de la ventana
    updateCardProperties () { 
        const { width, height, left, top } = this.hitbox.getBoundingClientRect();
        this.size = { 
            x :width,
            y: height,
            left,
            top
        }
        this.halfSize = {
            x: width / 2,
            y: height / 2
        };
        this.origin = {
            x: left + this.halfSize.x,
            y: top + this.halfSize.y
        }
    }
    // Escuchas de eventos para el movimiento del mouse
    setUpListeners () {
        // Escuchando el movimiento del mouse en el hitbox
        this.hitbox.addEventListener('mousemove', (e) => {
            this.mouse = {
                x: e.clientX,
                y: e.clientY
            }
            this.updateCardRotation();
            this.updateLightPosition();
        });
        this.hitbox.addEventListener('mouseleave', (e) => {
            this.resetCardRotation();
            this.updateCardProperties();
        });
        // Escuchando el cambio de tamaño de la ventana
        window.addEventListener('resize', () => { 
            this.updateCardProperties();
        });
        // Escuchando el scroll de la ventana
        window.addEventListener('scroll', () => { 
            this.updateCardProperties();
        });
    }
}

window.addEventListener('DOMContentLoaded', (e) => { 
    const cards = document.querySelectorAll('.hitbox');
    if (cards.length !== 0) { 
        cards.forEach((card) => {
            new Card3d(`#${card.id}`);
        });
    }
});
