function conditionType() {
    //Number
    var a = 600;
    // var b = 100;
    // var c = 60;

    // if (a > b) {
    //     alert("a is greater than b");
    // } else {
    //     alert("b is greater than a");
    // }

    // if (a > b) {
    //     alert("a is greater than b");
    // } else if(a === b){
    //     alert("a is equal to b");
    // } else {
    //     alert("b is greater than a");
    // }

    // if (a > b && a > c) {
    //     alert("a is greater than b and c"); 
    // } else if (b > a && b > c){
    //     alert("b is greater than a and c");   
    // } else {
    //     alert("c is greater than a and b");  
    // }

    switch (a) {
        case 50: alert("fifty");
            break;
        case 10: alert("ten");
            break;
        case 20: alert("twenty");
            break;
        case 70: alert("seventy");
            break;
        default: alert(a);
        break;
    }
}