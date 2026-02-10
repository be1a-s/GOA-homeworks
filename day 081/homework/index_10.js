// 12) შექმენით class ElectricCar რომელიც Car-სგან იღებს მემკვიდრეობას და ამატებს batteryLevel ველს და override-ს უკეთებს displayInfo()

class ElectricCar extends Car {
    constructor(batterylevel){
        this.batterylevel = batterylevel;
    }
    displayunfo(){
        return this.batterylevel
    }
}