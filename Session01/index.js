//1
function formatMoney(money) {
    const formatMoney = new Intl.NumberFormat('en-US');
    
    return formatMoney.format(money)
}
console.log(formatMoney(1001))


// 2. Viết hàm formatWallet nhận vào 2 tham số, số tiền và số chữ số ở sau dấu phẩy
//     formatWallet(1120, 2)  => '1.12K' 

function formatWallet(money, param) {
        let strings = ""
        if (money >= 1000000000) {
                money /= 1000000000
                strings = "B"
        } 
        if (money >= 1000000) {
                money /= 1000000
                strings = "M"
        } 
        if (money >= 1000) {
                money /= 1000
                strings = "K"
        } 
        return money.toFixed(param).concat(strings)
}
console.log("Money ", formatWallet(1120,2));
//3 
function factorial(num) {
    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1)
}
console.log(factorial(3))

// 4. Viết hàm trả về 1 phần từ bất kỳ trong mảng
//     getRandomElement(array) 
const arr = [1,2,3,5,6,7]
function getRandomElement(array) {
    let rand  = Math.floor(Math.random()*(array.length - 0))
    return array[rand]
}
console.log(getRandomElement(arr))
// 5. Viết hàm cắt ra 1 phần tử bất kỳ trong mảng,
//     pickOutRandomElement(array)
function pickOutRandomElement(array) {
    let rand = Math.floor(Math.random()* (array.length))
    console.log(rand)
    arr.splice(rand,1)
    return arr
};

console.log("Sliced: ",pickOutRandomElement(arr));
// // 6. Cho 2 mảng bất kỳ. Viết hàm tìm ra những phần tử của mảng thứ 2 ko xuất hiện trong mảng đầu tiên
// //     findMissingElements(arr1, arr2) => missingArray.

const arrray1 = [1,2,3,4,5,6,7,9,10,11]
const arrray2 = [2,3,4,5,6,7,8,11,14,15]

function findMissingElements(arr1,arr2) {
    let arr3 = []
    arr2.forEach(element => {
       if (!arr1.includes(element)) {
           arr3.push(element)
       } 
    });
    return arr3
}
console.log("phần tử ",findMissingElements(arrray1,arrray2))

// 7. Cho 1 số tiền bất kỳ (n) Viết hàm tìm ra cách rút tiền với số tờ tiền nhỏ nhất.Có 4 mệnh giá (50$, 20$, 10$, 1$)
let numbers7 = [50,20,10,1]
const obj1 = {};
function cashOut(n) {
        for (i in numbers7) {
                while ( n> numbers7[i]) {
                        obj1[numbers7[i]+"$"] = Math.floor(n/numbers7[i])
                        n = n % numbers7[i]
                }
        }
        return obj1
}
console.log(cashOut(324))


// 8. Đổi số la mã: cho 1 số < 1000, in ra số la mã tương ứng ( I:1, V:5, X:10, L:50, C:100, D:500 )
//     convertToRomanNumber(143) => CXVIII
//
const nums = {D:500,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1} ;

function convertToRomanNumber(n) {
        let strings = ""
        for ( i in nums) {
           while (n >= nums[i]) {
            strings += i
            n -= nums[i]
           }
        }
        console.log(strings)
        return strings
}
console.log("So La Ma",convertToRomanNumber(143))
// 9. In cách đọc số: In ra màn hình cách đọc số nhỏ hơn 1,000,000.
//     readNumber(726504) => bảy mươi hai vạn sáu ngàn năm trăm linh tư.

let arr1 = ["không", "một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín "]
function readTwoNumber(b,c,hasHundred) {
        console.log("b =", b, "c =", c)
        if(b == 1)
        {
                console.log("true")
        }
        const output1 = []
                switch (b) {
                        case 0: 
                              if (hasHundred && c ==0) {
                                    break  ;
                              }
                              else if (hasHundred) {
                                output1.push("linh")
                              }
                              output1.push(arr1[c])
                              break;
                        case 1:
                                output1.push("mườissssss")  
                                // console.log("1")
                                switch (c) {
                                        case 1:
                                                output1.push("mốt")
                                                break;
        
                                        case 5:
                                                output1.push("lăm")
                                                break;
                                        case 0: 
                                                break;
                                        default:
                                                output1.push(arr1[c])
                                                break;
                                }
                                break;   
                        default:
                                output1.push(arr1[b], "mươi")
                                switch (c) {
                                        case 1:
                                                output1.push("mốt")
                                                break;
        
                                        case 5:
                                                output1.push("lăm")
                                                break;
                                        case 0: 
                                                break;
                                        default:
                                                output1.push(arr1[c])
                                                break;
                                }
        
                }
        return output1
        
}

function readNumber1(num) {
        num = num.toString().split("").reverse()
        console.log(num)
        let output = []
        x0 = num[0]
        x1 = num[1]
        x2 = num[2]
        x3 = num[3]
        x4 = num[4]
        x5 = num[5]
        console.log(x0,x1,x2,x3,x4,x5)        
        output = (x5 ==1 ? " mười " : (x5 != undefined ?  arr1[x5] + " mươi " : "")) + (x4 == 5 ? " lăm " + " vạn " : (x4 == undefined ?   "": (x4 ==0 ? " vạn " : arr1[x4] + " vạn "))) + (x3 ==undefined  ?  "" : x3 == 0  ? "" :(arr1[x3] + " nghìn ") ) + (x2 == undefined  ? "" : (x2 == 0 && x3 ==0 ? "" : (x2 !=0 ?arr1[x2] + " trăm ":"") ) ) + ( x1 == undefined ? "" : (x1 == 1 ? " mườisssss " :((x1 == 0  && x2 !=0) &&(x1 !=0 && x0 !=0) ? " linh " :(x1 !=0 ? arr1[x1] +  " mươi ": "")))) +   (x0 == 5 && x1 == 0  ? arr1[x0] : x0 == 5 ? "lăm" : x0 == 0 ? "" : arr1[x0] )  
        return output

}
console.log(readNumber1(150330))

// //10
var numbers = [
        [0,1,0],
        [1,0,1],
        [0,1,1],
        [0,1,1],
        [0,0,1],
    ];
// console.log(numbers)
// let output = []
//  function findSafe (number , x =0 , y = 0)
//  {
//          if (x > numbers.length) {
//                  return output
//          } else {
//                 for ( y in numbers[x]){
//                         if (numbers[x][y] == 0) {
//                                 console.log("duong di an toan (",x,y,")")
//                                 output.push(x,y)
//                                 break
                                
//                         }      
//                 }
//         }
//         return findSafe(numbers,x+1,y)
          
//  }
// console.log(findSafe(numbers ))
