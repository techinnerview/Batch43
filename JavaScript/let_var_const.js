function es6Func() {
    if (true) {
        var a = 10; // function scope
        var a = 100;
        let b = 20; // block scope 
        // let b = 200;
        // const c = 30; // block scope
        // const c = 30; // block scope
        // a = 300;
        // b = 60;
        // c = 70;  //throw error
        // alert(a);
        // alert(b);
        // alert(c);
    }
    // alert(a); // success
    // alert(b);  // error
    // alert(c);  // error


    //template string 

    var str = "Hi Everyone";

    var str1 = "Hi Everyone" + a;
    str1 = "Hi" + a;

    var s = `H${a}ello everyone ${a} ${b}`;


}