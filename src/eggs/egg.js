const egg_one = new Image();
egg_one.src = './images/egg_one.png'

const egg_two = new Image();
egg_two.src = './images/egg_two.png'

const egg_three = new Image();
egg_three.src = './images/egg_three.png'

const egg_four = new Image();
egg_four.src = './images/egg_four.png'

class Egg {
    constructor() {
      this.imageOne = egg_one;
      this.imageTwo = egg_two;
      this.imageThree = egg_three;
      this.imageFour = egg_four;
    }

}

export default Egg;