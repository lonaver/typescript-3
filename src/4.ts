class Key {
  private signature: number
  constructor() {
    this.signature = Math.random();
  }
    getSignature(): number{
        return this.signature;
  }
}

class Person {
  constructor(protected key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}
 
abstract class House {
  protected door = false;
  protected key: Key;
  private tenants:Person[]=[];
    public abstract openDoor(key: Key): void;
    public comeIn(person: Person) {
        this.tenants.push(person);
    };
}

class MyHouse extends House {
    constructor(protected key: Key) {
        super();
        this.key = key;
    }
    public openDoor(keyPerson: Key) {
        if (this.key === keyPerson) {
            this.door = true;
        } else {
            this.door = false;
        };
        const stateDoor: string = this.door ? "open! Welcome!" : "close() Try again!";
        console.log(`Door is ${stateDoor}`);
        const button = document.querySelector("button")!;
        button.textContent = `Door is ${stateDoor}`;
    }
}


const personOpenDoor=():void=> {const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
}
export { personOpenDoor };