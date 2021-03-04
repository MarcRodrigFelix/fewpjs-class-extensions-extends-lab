class Polygon {
  constructor(arrOfIntegers){
    this.sides = arrOfIntegers
  };

  get countSides(){
    return this.sides.length
  };

  get perimeter(){
    return this.sides.reduce( (total, side) => {
      return total += side
    }, 0)
  };

};




class Triangle extends Polygon  {

  get isValid(){

    if (this.sides.length === 3){
    let isTriangle = this.sides
    let sideOne = isTriangle[0]
    let sideTwo = isTriangle[1]
    let sideThree = isTriangle[2]

      if (sideOne + sideTwo > sideThree && sideTwo + sideThree > sideOne && sideThree + sideOne > sideTwo){
        return true
      }
    }

    return false
  };

};




class Square extends Polygon  {

  get isValid(){

    if (this.sides.length === 4){
      let isSquare = this.sides
      let sideOne = isSquare[0]
      let sideTwo = isSquare[1]
      let sideThree = isSquare[2]
      let sideFour = isSquare[3]

      if (sideOne === sideTwo && sideThree === sideFour && sideOne === sideFour){
        return true
      }
    }

    return false
  };

  get area(){
    if (this.sides.length === 4){
      let isSquare = this.sides
      
      return isSquare[0] * isSquare[1]
    }
  };

};