
function arraysDemo() {

    var str1 = "string 1";
    var str2 = "string 2";
    var str3 = "string 3";
    var val1 = "value1";
    var val2 = "value2"
    var arr = [str1, str2, str3];
    // var arr1 = new Array(str1, str2, str3);
    var arr2 = [val1, val2];

    document.write(arr.concat(arr2));


    var passed = [12, 5, 8, 130, 44].every(isGreaterThanTen);
    document.write("<br />First Test Value : " + passed);

    var filtered = [12,4,56,76,43,89,66,44,66,77,88,99,0,1,2,3,4,5].filter((item) => {
        return item > 40;
    })
    document.write("<br />Filtered array " + filtered.length)

    var multiplier = filtered.map((item) => {
        document.write("<br />" + item);
        return item * 2;
    })
    document.write("<br /> Another Array");
    multiplier.map((item) => {
        document.write("<br />" + item);
    })
    var x = multiplier.pop(); // 198
    document.write("<br /> deleted Item is " + x);

    var y = multiplier.push(200);
    document.write("<br /> Added Item is " + y);

    multiplier.map((item) => {
        document.write("<br />" + item);
    })

    document.write("<br /> for loop example");
    //for loop
    for(var i=0; i< multiplier.length; i++){
        document.write("<br /> for loop example" + multiplier[i]);
    }
    document.write("<br /> while loop example");
    //while loop
    var len = multiplier.length - 1;
    while(len > 0) {
        document.write("<br /> while loop example" + multiplier[len]);
        len--;
    }

    var len1 = 0;
    while(len1 < multiplier.length) {
        document.write("<br /> while loop example" + multiplier[len1]);
        len1++;
    }

    // document.write("<br />Math : " + Math.ceil(34.76));

    // passed = [12, 54, 18, 130, 44].every(isGreaterThanTen);
    // document.write("<br />Second Test Value : " + Math.PI);

    var reductedToSingle = [12, 5, 8, 130, 44].reduce(sumIt);
    document.write("<br /> Reduce value " + reductedToSingle);

    // var str1 = "Hello"

    // document.write("<br /> string concat value " + str1.concat("kdjnd", "ahsjashd"))
    // document.write("<br /> string concat value " + str1.split('e')[1])


    let obj = {
        key: "abc",
        name: "abcd"
    }
}
function isGreaterThanTen(element) {
    return (element >= 4);
}

// ES 5
function sumIt(a, b) {
    return a * b;
}
// ES 6
sumIt = (a, b) => {
    return a * b;
}