function variableType()
{
    //Number
    // var a = 100;
    // var b = 100;

    // //Strings;
    // var str = "Hello";
    // var aStr = new String("Hello")
    // var x = "dshbdskjvdskvjn _ * & ^ ?%";
    // var y = "ksjdnldsn lsdkvlsmkdv"

    // console.log(x.length);
    // y.name = "kdjfkdsf";

    // //Boolean
    // var aBool = true;

    // //String Opertions

    // var str = new String("Hello World");
    // var str2 = new String("Hello World1");
    // var str3 = new String("Hello World2");

    // var str4 = "ndksjcnk";
    // str4.length
    // str4.name = "hello?"

    var str = "Hello everyone there";
    var str2 = " Welcome to Edureka!!";
    var str3 = " Its Javascript!!";
    document.write(str.charAt(1));
    document.write("IndexOf "+str.indexOf('e'));   // -1
    document.write("IndexOf "+str.lastIndexOf('e'));   // -1

    var temp = str.split(' ');
    document.write("<br />string 1 "+ temp[0].toLocaleLowerCase());   // -1
    document.write("<br />string 2 "+ temp[1].toUpperCase() );   // -1
    document.write("<br />string 3 "+ temp[2] );   // -1
    document.write("<br />Sub string "+ str.substring(0,3));   // -1
    document.write("<br />Sub string "+ str.substring(3,10));   // -1




    // if(str.indexOf('v') > -1){
    //     console.log("Hello everyone")
    // }
    // document.write(str + str2 + str3);
    // document.write("<br />" + str3.concat(str3, str3));

}