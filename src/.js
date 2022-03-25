// const s = 'Hello World'
// const hi = function (s) {
// const split = s.split('')
// const index = 0
// for (let i = 0; i < s.length; i++) {
//     for (j = 0; j < s.length; j++) {
//         if (s[i] == s[j]) {
//             break
//         }
//     }
//     if(j === i) {
//         s[index++] = s[i];
//     }
// }
//     //  return s.join("").slice(s, index);
//      console.log(index)
// }

// // console.log(index)

// const a = "ABCD"
// const b = "CDAB"

// const c = a.split('')
// // const d = b.split('')
// const e = []
// if(c.length % 2 == 0) {
//    const check = c.pop()
//    const again = c.pop()
//     e.push(again)
//     e.push(check)

//     const check1 = c.shift()
//     const check2 = c.shift()

//     console.log(check1)
//     console.log(check2)

//     e.push(check1)
//     e.push(check2)


// }
// console.log(e)
// const a = "cocodede"
// const b = "code"

// const split = a.split("")
// const split1 = b.split("")


// const arr = [10, 12, 10, 12];

// const uniqe = [...new Set(arr)]
// console.log(uniqe)



// const fuc = function solution(){


////////////////////////////////////////1
//     const a = "cocodede"
//     const b = "code"
// const split = a.split("")
// const split1 = b.split("")
// // console.log(split1)

// const uniqe = [...new Set(split)]

// const hi = uniqe.join("")
// const hlo = split1.join("")
// if (hi == hlo){
//     console.log("Yes")
// } else {
//     console.log("No")
// }


// /////// //or
// for(let i=0; i<uniqe.length; i++){
//     for(let j=i; j<split1.length; j++){
//         count =[0];
//         if(uniqe[i] === split1[j]) {
//             count +=1

//         }
//        const ok = count.filter(num => num >0)
//        console.log(ok)
//     }
// }


// // const count = 0;

// for(let i=0; i<split.length; i++){
//     for(let j=0; j<split1.length; j++) {
//         if(a[i] == b[j]){
//             const count = 0;

//             count+1
//             console.log(count)



//         }
//     }
// }
// return count
// }


/////////////////////////39done

// const a = 'Hello World Hello'

// const b = "Hello"  

// const c = a.split(' ')

// count = 0
// for(let i=0; i<c.length; i++){
// if (c[i] ==  b){
//     count =count + 1
// }
// }
// console.log(count)
//////////////////////////////////////////////////////////4

// const a = 50
// const b = []
// for (let i = 0; i < a; i++) {
    
//     b.push(i)
// }

// const newa = []

// b.forEach(
//     function(year){
//         if(leap(year))
//             newa.push(year)
        
//     }); 
//     console.log(newa)


// function leap(year){
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//         return year;
//     } else {
//         return false;
//     }
// }



// function leap_year_range(st_year, end_year) {
//     var year_range = [];
//     for (var i = st_year; i <= end_year; i++)
//     {
//          year_range.push(i);
//     }
//     var new_array = [];

// year_range.forEach(
// function(year)
// { 
//    if (test_LeapYear(year)) 
//    new_array.push(year);
// });

// return new_array;
// //  }

// function test_LeapYear(year) {
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
//             return year;
//     } else {
//             return false;
//     }
// }

// console.log(leap_year_range(0,50));



function rotation(str1, str2){
   
    if (str1.length !== str2.length) {
        return ""
    } && ((str1 + str1).indexOf(str2) != -1);
    
}

var str1 = "ABCD"
var str2 = "CDAB"

if (rotation(str1, str2)) {
    console.log('yes')
} else {
    console.log('NO')
}