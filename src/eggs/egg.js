const egg_one = new Image();
egg_one.src = './images/egg_one.png'

const egg_two = new Image();
egg_two.src = './images/egg_two.png'

const egg_three = new Image();
egg_three.src = './images/egg_three.png'

const egg_four = new Image();
egg_four.src = './images/egg_four.png'

const borken_egg_two = new Image();
borken_egg_two.src = './images/broken_egg_two.png'

const borken_egg_one = new Image();
borken_egg_one.src = './images/broken_egg_one.png'

class Egg {
    constructor() {
      this.imageOne = egg_one;
      this.imageTwo = egg_two;
      this.imageThree = egg_three;
      this.imageFour = egg_four;
      this.imageSix = borken_egg_two;
      this.imageSeven = borken_egg_one;
    }

}

export default Egg;