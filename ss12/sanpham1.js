class SanPham1 {
    constructor (name,number) {
        this.name=name;
        this.number=number;
    }
    setName(name) {
        this.name=name;
    }
    setNumber(number) {
        this.number=number;
    }
    getName() {
        return this.name;
    }
    getNumber(){
        return this.number;
    }

    edit(name,number){
        this.name=name;
        this.number=number;
    }
}