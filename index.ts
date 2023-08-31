namespace main {
  //Compnent Class
  abstract class IceCream {
    public abstract name: string;
    public abstract calculateCost(): number;

    public toString = (): string => {
      return (
        'Description: ' +
        this.name +
        ' <br><br> Cost: ($' +
        this.calculateCost() +
        ')'
      );
    };
  }

  // Concrete Compnent
  class BasicIceCream extends IceCream {
    public override name: string = 'Ice Cream';
    public override calculateCost(): number {
      return 5;
    }
  }

  // Decorartor
  abstract class IceCreamDecorartor extends IceCream {
    protected _iceCream: IceCream;
    public override name: string;

    public constructor(iceCream: IceCream) {
      super();
      this._iceCream = iceCream;
      this.name = this._iceCream.name;
    }

    public override calculateCost(): number {
      return this._iceCream.calculateCost();
    }
  }

  // Concrete Decorartor
  class Sprinkles extends IceCreamDecorartor {
    protected _iceCream: IceCream;
    public constructor(iceCream: IceCream) {
      super(iceCream);
      this._iceCream = iceCream;
      this.name = iceCream.name + '+ Sprinkles';
    }

    public override calculateCost(): number {
      return this._iceCream.calculateCost() + 3;
    }
  }

  //Decorartor Class Example
  class ChocleateChips extends IceCreamDecorartor {
    protected _iceCream: IceCream;
    public constructor(iceCream: IceCream) {
      super(iceCream);
      this._iceCream = iceCream;
      this.name = iceCream.name + ' + Chocleate Chips';
    }

    public override calculateCost(): number {
      return this._iceCream.calculateCost() + 2.5;
    }
  }

  //Decorartor Class Example
  class FruitMix extends IceCreamDecorartor {
    protected _iceCream: IceCream;
    public constructor(iceCream: IceCream) {
      super(iceCream);
      this._iceCream = iceCream;
      this.name = iceCream.name + ' + Fruit Mix';
    }

    public override calculateCost(): number {
      return this._iceCream.calculateCost() + 7;
    }
  }

  //Decorartor Use Example
  let order: IceCream = new BasicIceCream();
  order = new Sprinkles(order);
  order = new ChocleateChips(order);
  order = new FruitMix(order);

  const appDiv: HTMLElement = document.getElementById('app');
  appDiv.innerHTML = `
  <h1>Decorator Design Pattern</h1>
  <h3>Take all ok at the code</h3>
  <h2>${order.toString()}</h2>`;
  console.log();
}
