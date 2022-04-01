const username : string = 'Sebas';
const sum = (a: number, b: number) =>{
  return a + b;
}
sum(1,2);

class Person {
  constructor(public lastName: string, public age: number){}
}

const sebas = new Person("Mejia", 15);
