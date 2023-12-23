class Rectangle{
    constructor(width , height){
        this.width = width;
        this.height = height;
    };

    get perimeter(){
        return (this.width + this.height)*2
    }

    get isValide(){
        return this.width <= 0 || this.height <= 0 ? false : true;
    };

    isBiggerThan(shape){
        return this.perimeter > shape
    }
}


class Square extends Rectangle {    

    constructor(side){
        super(side , side)
    };

}