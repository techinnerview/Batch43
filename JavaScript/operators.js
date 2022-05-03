
function operatorsType()
{

//     1 - 0001
// 2 - 0010
// 3 - 0011
// 4 - 0100


// 0001 & 0001 = 


// 				0 0 0 1  &
// 				0 0 0 1
// 			===============
// 				0  0  0  1
				
// 				0 0 0 1  &
// 				0 0 1 0
// 			===============
// 				0 0	0 0

// 0001 | 0001 =

// 				0 0 0 1  |
// 				0 0 0 1
// 			===============
// 				0  0  0  1
				
// 				0 0 0 1  |
// 				0 0 1 0
// 			===============
// 				0 0	1 1
				
				
// ~ 0001   =    1110


// 0001 << 1 =    0 0 1 0
// 0001 << 2 =    0 1 0 0

// 0100 << 2 =   0 0 0 0 

// 0010 << 1 =  0 1 0 0 

// 0010 >> 1 = 0 0 0 1
// 0010 >> 2 = 0 0 0 0


    //Number
    var a = 10;
    var b = 20;
    
    a += b; // 30
    console.log(a) // 30
    a = a + b; //30
    console.log(a) // 50

    a -= b;  // -10
    console.log(a) //30
    a = a - b; // -10
    console.log(a) //10

    a *= b;  // -10
    console.log(a) //30
    a = a * b; // -10
    console.log(a) //10


    a %= b;  // -10
    console.log(a) //30
    a = a % b; // -10
    console.log(a) //10
}