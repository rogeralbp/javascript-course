let personaje = {
  nombre: "Tonny Stark",
  edad: 24,
  soltero: true,
  familia: {
    madre: "MAMI",
    padre: "PAPI",
  },
  gustos: ["ciclismo", "mujeres", 'money'],
  "ultima-pelicula": 'Parasite'
};

console.log(personaje);

console.log("Mi Nombre:", personaje.nombre);
console.log("Mi Padre se llama:", personaje.familia.padre);
console.log('Numero de hobbies:', personaje.gustos.length);
console.log('Ultimo hobbie:', personaje.gustos[personaje.gustos.length - 1]);

const soltero = 'soltero'

console.log('Soltero :', personaje[soltero]);
console.log('Last Movie:', personaje["ultima-pelicula"]);

// Customizacion
console.log('\n-------Customizacion----------');

delete personaje.soltero;
console.log(personaje);

const entriesPares = Object.entries(personaje)
console.log(entriesPares);
Object.freeze(entriesPares);

const props = Object.values(personaje);

console.log(props);

