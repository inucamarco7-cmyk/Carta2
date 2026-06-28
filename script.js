// ==============================
// SORPRESA PARA JOSSENID 🌷
// ==============================

const boton = document.getElementById("abrir");
const carta = document.getElementById("carta");
const musica = document.getElementById("musica");
const texto = document.getElementById("texto");

const btnSi = document.getElementById("btnSi");
const btnChoco = document.getElementById("btnChoco");
const respuesta = document.getElementById("respuesta");

// Mensaje

const mensaje = `¡Hola, Jossenid! 🌷

Primero lo primero...

¡Felicidades! 🥳

Acabas de encontrar la única página web creada exclusivamente para ti. 😌✨

Y tranquila... tampoco tiene virus. 😂
La revisé como veinte veces antes de enviártela.

Tal vez estés pensando:

"¿En serio hizo una página para mí?"

Pues sí... 😅

Podría haberte enviado un simple "Hola", pero cualquiera hace eso.

Yo preferí hacer algo diferente.

La verdad es que me pareces una chica muy genial.

Me gusta tu forma de ser, tu alegría y la buena energía que transmites.

Así que aproveché lo poco que sé de programación para crear este pequeño detalle.

No será la página más increíble de Internet...

Pero sí fue hecha con tiempo, ganas y pensando en ti. 🌷

Y ya que llegaste hasta aquí...

Tengo una pequeña propuesta. 👀

¿Qué te parece si seguimos conociéndonos un poco más?

Prometo hacerte reír, escuchar tus historias y molestarte de vez en cuando... 😂

Pero siempre con buena intención.

Gracias por tomarte el tiempo de ver esta pequeña sorpresa.

Ahora solo me queda una duda...

👇 Elige una opción.`;


// Abrir carta

boton.addEventListener("click", () => {

    carta.classList.add("mostrar");

    musica.play().catch(() => {});

    escribirMensaje();

});

// Máquina de escribir

function escribirMensaje(){

    texto.innerHTML = "";

    let i = 0;

    function escribir(){

        if(i < mensaje.length){

            if(mensaje.charAt(i) === "\n"){

                texto.innerHTML += "<br>";

            }else{

                texto.innerHTML += mensaje.charAt(i);

            }

            i++;

            setTimeout(escribir,35);

        }

    }

    escribir();

}

// Cerrar carta tocando fuera

carta.addEventListener("click",(e)=>{

    if(e.target === carta){

        carta.classList.remove("mostrar");

    }

});

// Botón "Sí"

btnSi.addEventListener("click",()=>{

    respuesta.innerHTML =
    "🥹 ¡Sabía que te gustaría! Gracias por leer hasta el final. Me alegra muchísimo haberte sacado una sonrisa. 🌷💖";

});

// Botón "Chocolate"

btnChoco.addEventListener("click",()=>{

    respuesta.innerHTML =
    "😂 ¡Trato hecho! Ese chocolate ya quedó pendiente. Pero solo si prometes acompañarme a comerlo. 🍫😄🌷";

});