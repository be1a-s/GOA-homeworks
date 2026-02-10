// 11) შექმენით class SmartAnimal რომელიც Animal-სგან იღებს მემკვიდრეობას და ამატებს intelligenceLevel ველს და describe() მეთოდს


class SmartAnimal extends Animal {
    constructor(intelligenceLevel){
        this.intelligenceLevel = intelligenceLevel;
    }
    describe(){
        return this.intelligenceLevel
    }
}