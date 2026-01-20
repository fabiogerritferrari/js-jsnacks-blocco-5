const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//!mio svolgimento
//const onlyNames = people.map((person)=> name=person.name)
//console.log(onlyNames);

//! soluzione migliore
people.forEach(person => console.log(person.name));