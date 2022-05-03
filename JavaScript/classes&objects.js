function classAndObects() {
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
        alertMe() {
            alert("hello Edureka");
        }
    }


    var car1 = new Car("Maruti", 2019);
    console.log(car1.name);
    console.log(car1.year);
    car1.alertMe();

    var car2 = new Car("Kia", 2022);
    console.log(car2.name);
    console.log(car2.year);


    var jsonObj = {
        "name": "xyz",
        "age": 12,
        "isSeniorCitizen": false,
        "dept": "physics"
    }
}



