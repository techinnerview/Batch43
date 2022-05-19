
function loopsExample() {
    var arr = [10, 20, 30, 40, 50, 66, 77, 88];
    var arr2 = [
        [10, 20, 30, 40, 50, 66, 77, 88],
        [101, 201, 30, 40, 50, 66, 77, 88],
        [102, 204, 30, 40, 50, 66, 77, 88]
    ]
    document.write("<br /> Array Map Function");
    arr.map((item, index) => {
        document.write("<br /> array position "+ index + "value :" + item)
    });
    document.write("<br /> for loop");
    // for loop
    for(var i=0; i<arr.length; i++) {
        document.write("<br /> array position "+ i + "value :" + arr[i]);
    }

    document.write("<br /> while loop");
    var j = 0;
    while(j < arr.length){
        document.write("<br /> array position "+ j + "value :" + arr[j]);
        j++;
    }

    //multi dimensional array
    for(var i=0; i<arr2.length; i++) {
        for(var j=arr2[i].length - 1; j>= 0; j--){
            document.write("<br /> array position "+ "value :" + arr2[i][j]);
        }        
    }

}