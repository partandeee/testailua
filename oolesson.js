/*let car = {
    plateNumber: "BEI-986", 
    currentSpeed: 0,
    setCurrentSpeed(targetSpeed) { //sets the current speed to value given
        this.currentSpeed = targetSpeed;
    },
    checkCurrentSpeed() { //Checks current speed
        return this.currentSpeed;
    },
    getPlateNumber() { //Returns the plate number
        return this.plateNumber;
    }

};

process.stdout.write("Platenumber: " + car.getPlateNumber() + "\nCurrent Speed: " + car.checkCurrentSpeed())

let car2 = {
    plateNumber: "COF-116", 
    currentSpeed: 0,
    setCurrentSpeed(targetSpeed) {
        this.currentSpeed = targetSpeed;
    },
    checkCurrentSpeed() {
        return this.currentSpeed;
    },
    getPlateNumber() {
        return this.plateNumber
    }

};
process.stdout.write("\nPlatenumber: " + car2.getPlateNumber() + "\nCurrent Speed: " + car2.checkCurrentSpeed());



/*OOP lesson by Mosh*/

let employee = {
    baseSalary: 30000,
    overTime: 10,
    overTimeRate: 20,
    getWage() {
        return this.BaseSalary + (this.overTime * this.overTimeRate);
    }
};
//process.stdout.write("\nThe wage is: " + employee.getWage());


class Car{
    model;
    plateNumber
    maxSpeed;
    currentSpeed;
    fuelCapacity;
    remainingFuel;

    constructor ( plateNumber ) {
        this.plateNumber = plateNumber;
    }
    setCurrentSpeed(targetSpeed){
        this.currentSpeed = targetSpeed;
    }
    checkCurrentSpeed(currentSpeed){
        return this.currentSpeed;
    }
    getPlateNumber(plateNumber){
        return this.plateNumber.toString();
    }
}
let car = new Car("OOP-001");
car.setCurrentSpeed(120);

process.stdout.write("\nThe platenumber is: " + car.getPlateNumber() + "\nThe car's speed is: " + car.checkCurrentSpeed());

let car2 = new Car("QNT-999");
car2.setCurrentSpeed(420);
car2.setCurrentSpeed(69);

process.stdout.write("\n\nThe platenumber is: " + car2.getPlateNumber() + "\nThe car's speed is: " + car2.checkCurrentSpeed());