let car = {
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

