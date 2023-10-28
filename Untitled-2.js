// var arr = [1, 2, [3, [4, 5]], [6, [7]], [8, 9, 10]];

// //output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var finalRes=[]
// function array(arr)
// {

//     for(var i=0;i<arr.length;i++)
//     {
//         if(typeof arr[i]==="object")
//         {
//            array(arr[i])
//         }
//         else
//         {
//             finalRes.push(arr[i])

//         }

//     }
//     return finalRes;
// }
// console.log(array([1, 2, [3, [4, 5]], [6, [7]], [8, 9, 10]]))

// const num = 2;
// let count=0;
// for(let i=1;i<=num;i++)
// {
//     if(num%i==0)
//     {
//         count++

//     }

// }
// if(count==2)
// {
//     console.log(`${num} is a prime number`)
// }
// else
// {
//     console.log(`${num} is not a prime number`)
// }

// let count=0
// let i,j 
// for(j=2;j<=17;j++)
// {
// for( i=1;i<=j;i++)
// {
//   if(j%i==0)
//   count++

// }

// if(count==2)

// console.log(j)
// count=0

// }


// kiran()
// var x=10
// function kiran(){
//     console.log("javascript")
// }

// kiran()
// console.log(x)


// var x=1;
// a()
// b()
// console.log(x)
// // console.log(x)
// function a(){
//     var x=10;
//     console.log(x)
// }
// function b(){
//     var x=200;
//     console.log(x)
// }
// a()
// b()
// console.log(x)

// function a()
// {
//     // var b=10
//     // console.log(b)
//     c()
//     function c()
//     {
//         console.log(b)
//     }
// }
// var b=10
// a()
// // var b=10

// function a()
// {
//     var b=10;
// }
// a()
// console.log(b)
// a()
// let a;
// console.log(a)
// // let a;
// a=10

// console.log("kiran")
// let a=10
// let a=29

// {
//     var a=10;
//     let b=20;
//     const c=30;
// }

// function x()
// {
//     var a=17
//     function y ()
//     {
//         console.log(a)
//     }
//     return y
// }
// var res=x()
// res()

// function calculate(x)
// {
//     function multiply(y)
//     {
//         return y*x
//     }
//     return multiply
// }

// var res=calculate(5)
// console.log(res(5))



// for(let i=1;i<=5;i++)
// {
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)

// }

// function x() {
//     var a = 200
//     function y() {
//         var b = 100


//         function z() {
//             console.log(a, b)
//         }
//         z()
//     }
//     y()
// }
// x()

// function first(value)
// {
//     value()
//     console.log("first function")
//     value()
// }
// function second()
// {
//     console.log("second function")
// }
// first(second)


// function first(value)
// {
//     value()
//     console.log("first function")
// }
// first(function second()
// {
//     console.log("second function")
// })
// console.log("kiran")

// a=5==>1*1*2*3*4*5=120

// var num=4;
// var res=1;
// if(num==0)
// {
//     console.log("the factor is 0")
// }
// else if(num==1)
// {
//     console.log("the factor is 1")
// }
// else
// {
//     for(i=1;i<=num;i++)
//     {
//         res=res*i  
//     }
//     console.log(res)
// }


// console.log(0.1+0.2)
// console.log(0.1+0.2==0.3)
// console.log(0.1+0.3===0.30000000000000004)


// var a=b=2
// console.log(a)
// console.log(b)

// var arr=['c','b','a']
// var newArr=arr.sort()
// console.log(arr)
// console.log(newArr)


// var arr=['c','b','a']
// var newArr=arr.toSorted()
// console.log(arr)
// console.log(newArr)


// var startDate=new Date().getTime()
// console.log(startDate)
// console.log(startDate+1000)

//371=3*3*3+7*7*7+1*1*1

// var num=371;
// var res=0
// var temp=num
// var rev=0
// while(num>0)
// {

//     rev=num%10
//     res=(rev*rev*rev)+res
// //    console.log(res)
//   num=Math.floor(num/10)

// }

// console.log(res)
// if(res==temp)
// {
//     console.log(` ${temp} is a armstrong number`)
// }
// else
// {
//     console.log(` ${temp} is not a armstrong number`)
// }

// function first()
// {
//     console.log("first number")
// }
// function second(x)
// {

//     console.log("second number")
// }
// second(first())

// var radious=[3,1,2,4]
// function kiran(radious)
// {
//     var result=[]
//     for(var i=0;i<radious.length;i++)
//     {
//         result.push((2*Math.PI*radious[i]))
//     }

//     console.log(result)
// }
// kiran([3,1,2,4])

// var radious=[3,1,2,4]
// radious.forEach((element)=>{
//     var result=[]
//     result.push(Math.PI*element*element)
//     // console.log(result)
// }

// )
// var radious=[3,1,2,4]
// var area=function(radious){

//     return Math.PI*radious*radious
// }


// var calculate=function(radious,value)
// {
//     var output=[]
//     for(var i=0;i<radious.length;i++)
//     {
//           output.push(value(radious[i]))
//     }
//     return output


// }
// console.log(calculate([3,1,2,4],area))


// function value(element)
// {
//     return element*2 
// }
// var arr=[10,20,30,40,50]
// var arr={
//     name:"kiran",
//     age:20
// }
// var result=Object.entries(arr).map((element)=>{
//     return element
// })


// var a=[1,2,3,4,5]
// var result=a.map((val)=>{
//     return val.toString(2)
// })
// console.log(result)

// function isOdd(x)
// {
//        return x%2;

// }

// var a=[1,2,3,4,5,6]
// var res=a.filter(isOdd)
// console.log(res)



// var arr=[1,2,3,4,5]
// var res=arr.reduce((acc,val)=>{
//     acc=acc+val;
//     return acc;
// })
// console.log(res)



// var arr = [1, 2, 30, 4, 5]
// var res = arr.reduce((acc, val) => {
//     var max=0
//     //  console.log(acc)
//     //  console.log(val)
//       if(acc>val)
//       {
//         max=acc
//       }
//       else
//       {
//         max=val
//       }
//       return max

// })
// console.log(res)


// var arr = [1, 2, 30, 40, 5]
// var res = arr.reduce((max, val) => {

//       if(val>max)
//       {
//         max=val
//       }
//       return max

// },0)
// console.log(res)



// var arr=["kiran","laptop","hyderabad"]

// var obj=Object.assign({},arr)
// console.log(obj)
// var obj={}
// arr.forEach((val,index)=>{
//     obj[`key${index}`]=val
// })
// console.log(obj)





// var data=[
//     {firstName:"Kadapa",lastName:"Andhra",age:20},
//     {firstName:"Bangalore",lastName:"Karnataka",age:30},
//     {firstName:"Hyderabad",lastName:"Telangana",age:40},
//     {firstName:"Chennai",lastName:"Tamil",age:20}
// ]



// var result=data.reduce((acc,val)=>{
//       if(val.age<30)
//       {
//         acc.push(val.firstName)
//       }
//       return acc
// },[])
// console.log(result)


// var res=data.map((val)=>{
//     return val.firstName+" "+val.lastName
// })
// var obj=Object.assign({},res)
// console.log(obj)





// 3.find the first name whose age is less than 30

// var result=data.filter((val)=>{
//     val.age<30
//     // console.log(val.age<30)
// }).map((res)=>{

//     return res.firstName
// })
// console.log(result)


// var result=data.filter((val)=>val.age<30).map((res)=> res)
// console.log(result)
// var result=[]
// data.filter((val)=>{
//     if(val.age<30)
//     {
//          result.push(val.firstName)
//     }
//     // console.log(result)
// })
// console.log(result)


// 1. output=["kadapa andhra",...]
// using map function=>>>>>>>>>
// var res=data.map((val)=>{
//     return val.firstName+val.lastName
// })
// console.log(res)

// using forEach function=>>>>>>>>>
// var result=[]
// data.forEach((val)=>{
//     result.push(val.firstName+" "+val.lastName)
// })
// console.log(result)

//2.output={20:2,30:1,40:1}

// var result=data.reduce((acc,val)=>{

//     if(acc[val.age])
//     {
//         acc[val.age]+=acc[val.age]
//     }
//     else
//     {
//         acc[val.age]=1
//     }

//     return acc

// },{})

// console.log(result)



//remove the duplicate elements from an array

// var a=[1,1,2,4,5,4,5,2,1,3]
// var result=a.reduce((acc,val)=>{

//     if(acc[val]===-1)
//     {
//         acc.push(val)
//     }


//     return acc
// },[])
// console.log(result)


// var arr=[1,1,2,4,5,4,5,2,1,3]

// var newArr=[]
// for(var i of arr)
// {
//     if(newArr.indexOf(i)===-1)
//     {
//     newArr.push(i)
//     }

// }
// console.log(newArr)

// var result=arr.filter((ele,index)=>{
//     return arr.indexOf(ele)===index
// })
// console.log(result)

// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },1000)
// setTimeout(()=>{
//     console.log(3)
// },1000)
// console.log(4)
// console.log(5)


// console.log(3+ +"3")
// console.log(typeof +"3")






// let promise = new Promise(function(resolve, reject){
//     //do something
// });
// console.log(typeof promise)



// let promise=fetch('https://restcountries.com/v3.1/all')
// promise.then((res)=>{
//   res.json().then((result)=>{
//     console.log(result)
//   })
//     })

// console.log(promise)



// var cart=["shoes","watches","mobiles"]

// createOrder(cart)
// .then((data)=>{
//     console.log(data)
//     return data
// })
// .catch((err)=>{
//     console.log(err.message)
// })
// .then((orderId)=>{
//     return proceedToPayment(orderId)
// })
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err.message)
// })
// .then((happen)=>{
//     console.log("after catch block the then will executed successfully")
// })


// function createOrder(cart)
// {
//     var pr=new Promise((resolve,reject)=>{
//         if(!validator(cart))
//         {
//             var err=new Error("cart is not valid")
//             reject(err)
//         }

//     var orderId="12345"
//     resolve(orderId)
//     })
//     return pr
// }
// function proceedToPayment(orderId)
// {
//     return new Promise((resolve,reject)=>{
//         resolve("payment was successful")
//     })
// }

// function validator(cart)
// {
//     return false;
// }




// function dice() {

//     return Math.floor(Math.random() * 6) + 1
// }

// var promise=new Promise((resolve,reject)=>{
//     var n=dice()
//     if(n==6)
//     {
//         resolve(n)
//     }
//     else
//     {
//         var err=new Error("the dice was not 6")
//         reject(err)
//     }
// })
// promise.then((val)=>{
//     console.log(`the dice was ${val}`)
// })
// promise.catch((val)=>{
//     console.log(val)
// })



// function dieToss() {
//     return Math.floor(Math.random() * 6) + 1;  
//   }

//   function tossASix() {
//     return new Promise(function(fulfill, reject) {
//       var n = Math.floor(Math.random() * 6) + 1;
//       if (n === 6) {
//         fulfill(n);
//       } else {
//         reject(n);
//       }
//     });
//   }

//   function logAndTossAgain(toss) {
//     console.log("Tossed a " + toss + ", need to try again.");
//     return tossASix();
//   }

//   function logSuccess(toss) {
//     console.log("Yay, managed to toss a " + toss + ".");
//   }

//   function logFailure(toss) {
//     console.log("Tossed a " + toss + ". Too bad, couldn't roll a six");
//   }

//   tossASix()
//     .then( null,logAndTossAgain)   
//     .then( null,logAndTossAgain)   
//     .then(logSuccess, logFailure); 


// tossASix()
// .then((toss)=>
// {
//     console.log("Tossed a " + toss + ", need to try again.");
//     return toss;

// })
// .catch((val)=>{
//         console.log(val)
//     })

// .then((toss)=>{
//     console.log("Yay, managed to toss a " + toss + ".");
// })



// function add(a,b)
// {
//     return new Promise((resolve,reject)=>{
//         var sum=a+b
//         console.log(sum)
//       if(!Number(sum))
//       {
//         var err=new Error("plese enter a number only")
//         reject(err)
//       }
//       else
//       {
//       resolve(sum)
//       }
//     })
// }
// add(2,2)

// .then((result)=>{
//     // console.log(result)
//     return result+10  //14
// })
// // .catch((err)=>{
// //     console.log(err)
// // })
// .then((result)=>{
//     console.log(result)
//     return resul+10 //24
// })
// .then((result)=>{
//     console.log(result)  //24
//     // return result+10
// })


// function first()
// {
//     var name="kiran"
//     function second()
//     {
//         return `my name is ${name}`
//     }
//     return second
// }
// var a=first()
// console.log(a())


// var a=function(name){
//     console.log(name)
// }
// a("kiran")


// function first(a,b,callback)
// {
//     callback()
//     var sum=a+b
//     console.log(sum)
// }
// first(7,5,function()
// {
//     console.log("addition")
// })

// function add(a,b)
// {
//     // console.log(a+b)
//     return a+b
// }
// var res=add(7,7)
// console.log(res)
// function square(num)
// {
//     console.log(num*num)
// }
// square(res)



// function add(a,b,callback)
// {
//     var sum=a+b
//     callback(sum)
//     console.log(sum)
//     callback(sum)


// }

// add(7,7,function(num)
// {
//       console.log(num*num)
// })



// function add(a,b)
// {
//     console.log(a+b)
// }
// function multiply(a,b)
// {
//     console.log(a+b)
// }
// function calculate(a,b,operation)
// {
//     operation(a,b)
// }
// calculate(4,4,add)




// function first(call)
// {
//     setTimeout(()=>{
//         console.log("first number")
//         console.log("second number")
//         console.log("third number")
//     },2000)
//     // console.log("first number")
//     call()
// }
// function second()
// {
//     setTimeout(()=>{
//         console.log("fourth number")
//         console.log("fifth number")

//     },1000)
// }
// first(second)



// function first()
// {
//     setTimeout(()=>{
//         console.log("first number")
//         setTimeout(()=>{
//             console.log("second number")
//             setTimeout(()=>{
//                 console.log("third number")
//                 setTimeout(()=>{
//                     console.log("fourth number")
//                     setTimeout(()=>{
//                         console.log("fifth number")
//                     },1000)
//                 },1000)
//             },2000)
//         },2000)
//     },2000)

// }
// first()




/// by using callbacks


// function add(a,b,callback)
// {
//     setTimeout(()=>{
//         callback(a+b)
//     },1000)
// }

// add(1,2,(sum)=>{
//     console.log(sum)
//     add(3,sum,(sum1)=>{
//         console.log(sum1)
//         add(4,sum1,(sum2)=>{
//             console.log(sum2)
//         })
//     })
// })



//// by using promises

// function add(a,b)
// {

//     return new Promise((resolve,reject)=>{
//         var res=a+b
//         // console.log(res)
//          if(typeof res==="number")
//          {
//             setTimeout(()=>{
//                 resolve(res)
//             },1000)
//          }
//          else{
//             var err=new Error("something is missing")
//             reject(err)
//          }
//     })

// }
// add(1,2)
// .then((sum)=>{
//     console.log(sum)
//     return add(3,sum)
// })
// .then((sum1)=>{
//     console.log(sum1)
//     return add(4,sum1)
// })
// .then((sum2)=>{
//     console.log(sum2)
//     // return sum2
// })



//// by using async await

// function add(a,b)
// {
//     return new Promise((resolve,reject)=>{
//          resolve(a+b)
//     },1000)
// }
// (async()=>{
//     var sum=await add(1,2)
//     console.log(sum)
//     var sum1=await add(3,sum)
//     console.log(sum1)
//     var sum2=await add(4,sum1)
//     console.log(sum2)
// })()




// var data=fetch('https://jsonplaceholder.typicode.com/todos/1')
// data.then((res)=>{
//     res.json().then((val)=>{
//         console.log(val)
//     })
// })





// var obj={  
//       name:"kiran",
//       age:20,
//       gender:'M'

// }
// var covert  = Object.keys(obj).map(function(key)  
//  {  
//     console.log(key)
//   return [(key), obj[key]];  
// });  

// console.log(covert)


// var a=[10,20,30,40,50,60]
// var b=a.splice(2,1,900)
// console.log(b)
// console.log(a)

// var a="my name is kiran"
// var res=a.split(" ")
// console.log(res)


// console.error(new Error("kiran"))


// for(var  i=0;i<10;i++)
// {
//     console.log(i)
// }
// console.log(i)


// console.log(__dirname)

// console.log('-->',"kiran")





// var data=[
//     {name:"Kadapa",lastName:"AndhraPradesh",age:60},
//     {name:"Bangalore",lastName:"Karnataka",age:60},
//     {name:"Hyderabad",lastName:"Telangana",age:70},
//     {name:"Mumbai",lastName:"Maharastra",age:30},
// ]
// 1. output=["kadapa andhra",...]
// var res=data.map((ele)=>{
//     return ele.name+" "+ele.lastName
// })
// console.log(res)

// var result=[]
// data.forEach((ele)=>{
//       result.push(ele.name+" "+ele.lastName)
// })
// console.log(result)

//2.output={20:2,30:1,40:1}
// var obj={}
// data.filter((ele)=>{
//        if(obj[ele.age])
//        {
//          obj[ele.age]+=obj[ele.age]
//        }
//        else
//        {
//         obj[ele.age]=1
//        }
// })
// console.log(obj)






// var count=0
// for(let i=2;i<=100;i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         if(i%j==0)
//     {
//         count++
//     }
//     }


// if(count==2)
// {
//     console.log(i)

// }
// count=0
// }



// let count=0
// let i,j 
// for(j=2;j<=100;j++)
// {
// for( i=1;i<=j;i++)
// {
//   if(j%i==0)
//   count++

// }

// if(count==2)

// console.log(j)
// count=0



// }




// function factorial(num)
// {
//     if(num==0)
//     {
//         return 1
//     }
//     else
//     {
//        return num*factorial(num-1)
//     }
// //    return result
// }

// console.log(factorial(5))



// var newArr=[]
// function kiran(value)
// {
// for(var i=0;i<value.length;i++)
// {
//     if(typeof value[i]==="object")
//     {
//         kiran(value[i])
//     }
//     else
//     {
//         newArr.push(value[i])
//     }
//     console.log(newArr)  
// }
// return newArr
// }
// // console.log(newArr)
// console.log(kiran([1,2,3,[4,5,6],[7,8],9,10]))


// var fruits=new Map()
// fruits.set('apple',500)
// fruits.set('banana',200)
// fruits.set('kivi',300)
// console.log(fruits.get('apple'))

// var data=new Set([1,2,3,1,2])
// console.log(data.keys())

// console.log("first")
// setTimeout(()=>{
//     console.log("second")
// })
// console.log("third")


// var a=10;
// let b=0;
// var result=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })
// result.then((data)=>{
//     console.log(a+data)
// })

// async()=>{
//     var data=await result
//     console.log(a+data)
// }


// console.log("first")
// console.log("second")
// setTimeout(()=>{
//     console.log("third ")
// },2000)

// var result=new Promise((resolve,reject)=>{
//     resolve("fourth")
// })
// result.then((data)=>{
//     console.log(data)
// })

//     console.log("fifth")


// function value(obj,property)
// {
//     return obj[property]
// }

// let car={
//     name:"maruthi",
//     cost:23000
// }
// let bike={
//     model:"pulsar",
//     year:2000
// }
// console.log(value(bike,'model'))



// var arr=[1,2,3,1,5,6,4,2,3]
// var result=[]
// for(var i=0;i<arr.length;i++)
// {
//     if(arr.indexOf(arr[i])===-1)
//     {
//         result.push(i)
//     }


// }
// console.log(result)

// var arr=[1,1,2,4,5,4,5,2,1,3]

// var newArr=[]
// for(var i=0;i<arr.length;i++)
// {
//     if(newArr.indexOf(i)===-1)
//     {
//     newArr.push(arr[i])
//     }

// }
// console.log(newArr)

// var arr=[1,2,3,1,5,6,4,2,3]
// var result=[]
// var data=arr.reduce((acc,ele)=>{
//     if(acc.indexOf(ele)===-1)
//     {
//            acc.push(ele)
//     }
//     return acc

// },[])
// console.log(data)

// var a=[10,20,30,40,50]
// var b=a.splice(0,1,500)
// console.log(b)
// console.log(a)




// function kiran(arr)
// {
//      var result=[]
//      for(var i of arr)
//      {
//         if(result.indexOf(i)===-1)
//         {
//             result.push(i)
//         }
//      }
//      console.log(result)
// }

// kiran([1,2,3,1,2,4,5,4,6,5])





// console.log(5<=5)

// var num=20
// if(num/2==0)
// {
//     console.log("even number")
// }
// else
// {
//     console.log("odd number")
// }

// console.log(20/2)

// console.log("first number")
//  function display()
// {
//     var result=new Promise((resolve,reject)=>{
//         resolve("welcome to nodejs")
//     })

//     var res= result;
//     console.log(res)
// }
// display()
// console.log("second number")


// for(var i=0;i<10;i++)
// {
//     // console.log(i)
// }
// console.log(i)


// var a=[1,2,3,4,5,1]
// var b=a.every((ele)=>{
//     if(ele%2==0)
//     return ele
// })
// console.log(b)

// var a=[1,2,3,4,2,3,4,1]
// var result=[]

// for(var i=0;i<a.length;i++)
// {

//     if(result.indexOf(a[i])==-1)
//     {
//         result.push(a[i])
//     }

//     console.log(result)
// }
// console.log(result)

// function kiran()
// {
//     return kiran()
// }
// kiran()


//missing numbers

// var arr=[1,5]
// var count=5
// var missing=[]
// for(var i=1;i<=count;i++)
// {
//        if(arr.indexOf(i)==-1)
//        {
//         missing.push(i)
//        }
// }
// console.log(missing)



// var a="my name is kiran"
// var b=a.split(" ")[0]
// console.log(b)



// var a=[1,2,3,4,5]
// console.log(a)
// console.log(...a)


// var a=['My', 'name', 'is', 'Jack'];
// console.log(a)
// console.log(...a)




// var data=[
//     {name:"Kadapa",lastName:"AndhraPradesh",age:60},
//     {name:"Bangalore",lastName:"Karnataka",age:60},
//     {name:"Hyderabad",lastName:"Telangana",age:70},
//     {name:"Mumbai",lastName:"Maharastra",age:30},
// ]
// console.log(data)




// function Student(){
//     this.fname="kiran",
//     this.age=20,
//     this.greet=function()
//     {
//         console.log(`welcome to js cousrse ${this.fname}`)
//     }

// }
// var result=new Student()
// result.greet()


// function Student(fname,age,course){
//   this.name=fname,
//   this.age=age,
//   this.course=course
// }
// var result=new Student('kiran',23,'javaScript')
// console.log(result.course)


// class Student{
//     constructor(){
//         this.fname="kiran"
//     }
//     greet()
//     {
//         console.log(`welcome to js ${this.fname}`)
//     }
// }
// var result=new Student()
// console.log(result)
// result.greet()






// class Parent{
//     constructor()
//     {
//         this.fname="kiran"
//     }
//     greet(){
//         console.log("welcome to js course")
//     }

// }
// class Child extends Parent{
//     constructor()
//     {
//         super();
//         this.fname="nodeJs"
//         this.age=20

//     }

//    greet(){
//     console.log("welcome to nodejs tutorial")
//    }

// }

// var result=new Child()
// console.log(result)
// result.greet()




// class Child {
//     constructor()
//     {

//         this.count=0

//     }

//    greet(){
//     this.count++
//    }
//    displayCount()
//    {
//     console.log(`the count number is ${this.count}`)
//    }

// }

// var result=new Child()
// console.log(result)
// result.greet()
// result.displayCount()


//file system


// var fs=require('fs')
// fs.readFile('./file.txt','utf-8',(err,data1)=>{
//     console.log(data1)
//     fs.readFile(`./${data1}.txt`,'utf-8',(err,data2)=>{
//         fs.writeFile('./append.txt','welcome to JAVASCRIPT tutorial','utf-8',(err,data3)=>{
//             console.log("success")
//         fs.readFile(`./append.txt`,'utf-8',(err,data3)=>{
//             console.log(data3)
//             fs.writeFile(`./final.txt`,`${data1}\n${data3}`,'utf-8',(err,res)=>{
//                 console.log("both files combined succesfully")
//             })
//         })
//         })
//     })
// })





//http server


// var fs=require('fs')
// var http=require('http')
// http.createServer((req,res)=>{
//     const route=req.url
//     if(route==='/' || route==='/product'){
//     res.end('welcome to new product!')
//     }
//     else if(route==='/api')
//     {
//         fs.readFile('./database.json','utf-8',(err,data)=>{
//             if(err)
//             {
//                 console.log(err)
//             }
//             else 
//             {
//                 var result=JSON.parse(data)
//                 console.log(result[0])
//                 res.end('api')
//             }
//         })
//     }
//     else
//     {
//         res.writeHead(404)
//         res.end('page was not found')
//     }
// })
// .listen(5000,()=>{
//     console.log("server running on 5000 port")
// })


// var fs=require('fs')
// setTimeout(()=>{
//     console.log("kiran")
// },2000)


// console.log("first number")
// fs.readFile('./file.txt','utf-8',(err,data)=>{
//     console.log(data)
//     setTimeout(()=>{
//         console.log("event loop")
//     },1000)
// })


// console.log("second number")



// function kiran(data)
// {
//   return data%2==0
// }

// var arr=[11,20,33,40,50]
// var res=arr.find(kiran)
// console.log(res)

// var a=[10,20,30,40,50]

// var res=a.filter(element=>element!==30)
// console.log(res)


// var a=2
// for(var i=1;i<=10;i++)
// {

//     var res=a*i

//     console.log(`${a}*${i}=${res}`)

// }




// var http=require('http');
// var server=http.createServer((req,res)=>{
//     if(req.url==='/')
//     {
//        res.end('home page')
//     }
//     else if(req.url==='/slow')
//     {
//         for(let i=0;i<6000000000;i++)
//         {

//         }
//         res.writeHead(200,{'contentType':'text/html'})
//         res.end('without cluster')
//     }
// })
// server.listen(4000,()=>{
//     console.log("server running")
// })




// var cluster=require('cluster')
// var http=require('http')
// if(cluster.isMaster)
// {
//     console.log(`master process ${process.pid} started`);
//     cluster.fork();
//     cluster.fork();
// }
// else
// {
//     console.log(`worker ${process.pid} started`);

// var server=http.createServer((req,res)=>{
//     if(req.url==='/')
//     {
//        res.end('home page')
//     }
//     else if(req.url==='/slow')
//     {
//         for(let i=0;i<6000000000;i++)
//         {

//         }
//         res.writeHead(200,{'contentType':'text/html'})
//         res.end('without cluster')
//     }
// })
// server.listen(4000,()=>{
//     console.log("server running")
// })
// }





// const cluster = require("cluster");
// const http = require("http");


// if (cluster.isMaster) {
//   console.log(`Master process ${process.pid} is running`);
//   //fork workers.
//   cluster.fork();
//     cluster.fork();
// } else {
//   const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Home page");
//     } else if (req.url === "/slow-page") {
//       for (let i = 0; i < 6000000000; i++) {} // Simulate CPU work
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Slow Page");
//     }
//   });

//   server.listen(8000, () => console.log("Server is running on port 8000"));


// }


// var numerator=10;
// var denaminator='a';
// try{
//     console.log(numerator/denaminator)
//     console.log(a)
// }
// catch(err){
//          console.log("error occured")
//          console.log(err.message)
// }



// try {
//     console.log('first')
//     console.log("second")
//     console.log('third')

// } catch (e) {
//   console.log( "won't work" );
//   console.log(e.message)
// }
// finally{
//     console.log("kiran")
// }


// var data=[
//     {
//         "_id": "64beac5e5a278f87bb65e485",
//         "name": "Australia",
//         "rating": 3,
//         "__v": 0
//     },
//     {
//         "_id": "64bead09dfe43edd008364f6",
//         "name": "NewZelland",
//         "rating": 15,
//         "__v": 0
//     },
//     {
//         "_id": "64bebd7183c77b18d1b53b9d",
//         "name": "england",
//         "rating": 2,
//         "__v": 0
//     }
// ]

// // var res=data.forEach(element=>element._id)
// // console.log(res)


// data.forEach(element=>console.log(element._id))


// var str="    welcome to nodejs           "
// var res=str.trim()
// console.log(res)

// console.log(process.argv[2])

// var query={ difficulty: 'easy',page:1,sort:10,limit:100,fields:"something" }
// const queryData={...query}

// // console.log(queryData)
// const excludeField=['page','sort','limit','fields']
// excludeField.forEach(el=>delete queryData[el])
// console.log(queryData)



// https://dog.ceo/api/breeds/image/random



// var fs=require('fs')
// var superAgent=require('superagent')
// fs.readFile(`${__dirname}/dog.txt`,'utf-8',(err,data)=>{
//     if(err) return err.message
//     console.log(data)
//     superAgent.get(`https://dog.ceo/api/breed/${data}/image/random`)
//     .end((err,res)=>{
//         console.log(res.body.message)
//     })
// })



// var a=[10,20,30,40,50]
// for(var i=0;i<=a.length;i++)
// {
//     console.log(a[i])
// }


// var a=[10,20,30,40,50]
// var b=[100,200,300]
// var c=[99,88,77]
// console.log(a.concat(b,c))


// var a=[10,20,30,40,50]
// function mul(val)
// {
//     console.log(val*2)
// }
// a.forEach(mul)

// var a=[10,20,30,40,50]
// var b=[]
// for(var i=0;i<a.length;i++)
// {
//     b.push(a[i])

// }
// console.log(b)

// a.forEach(element=>b.push(element))
// console.log(b)



// var a=[10,20,30,40,50]

// a.forEach((ele)=>{
//     if(ele==40)
//     {
//         a.shift();
//     }

// })
// console.log(a)

// var a=[1,3,5,7,2,9,33,21,34]

// var b=a.find((ele)=>ele%2==0)
// console.log(b)

// var a=["c","java","c++","nodejs","javascript"]

// var b=a.indexOf("java")
// console.log(b)


// var a=[1,2,3,4,1,2,3,4,5]
// var b=[]
// for(var i=0;i<a.length;i++)
// {

//     if(b.indexOf(a[i])===-1)
//     {
//         b.push(a[i])
//     }

// }
// console.log(b)



// var a=[1,2,3,4,1,2,3,4,5]
// var b=[]
// a.forEach((ele)=>{
//     if(!b.includes(ele))
//     {
//         b.push(ele)
//     }
// })
// console.log(b)



// var a=[1,2,3,4,1,2,3,4,5]
// var b=[]
// a.forEach((ele)=>{
//     if(!b.includes(ele))
//     {
//         b.push(ele)
//     }
// })
// console.log(b)



// var a=[1,2,3,4,5,6,7,1]
// var b=a.map(ele=>ele*2)
// console.log(b)

//input
// const employees = [
//     { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
//     { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//     { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
//     { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
// ];

// Output      netEarning=salary+bonus-tax

// [
//   { name: 'Adam', netEarning: 4500 },
//   { name: 'Noah', netEarning: 7000 },
//   { name: 'Fabiano', netEarning: 1800 },
//   { name: 'Alireza', netEarning: 4600 }
// ]


// var result=(obj)=>{
//     var newObj={};
//     newObj.name=obj.name;
//     newObj.earnings=obj.salary+obj.bonus-obj.tax;
//     return newObj
// }

// var finalResult=employees.map(result)
// console.log(finalResult)


// var a=[1,2,3,4,5,6,7,8,9,10]

// var sum=a.reduce((acc,ele)=>acc+ele)
// console.log(sum)


// var a=[1,2,1,3,2,4,3,5,4,5]
// var res=a.reduce((acc,ele)=>{
//         if(acc.indexOf(ele)===-1)
//         {
//              acc.push(ele)
//         }
//         return acc
// },[])
// console.log(res)


// var a=[1,2,3,4,5]
// var b=[]
// for(var i=a.length-1;i>=0;i--)
// {
//        b.push(a[i])   
// }
// console.log(b)

// var a=[1,2,3,4,5,6,7,8]
// var b=a.splice(0,1,100)
// console.log(b)
// console.log(a)

// var a="welcome to nodeJs"
// var b=a.concat(" tutorial")
// console.log(b)



// var a=[1,2,3,4,[5,6],7,[8,9],10]
// var b=[]
// function add(val)
// {
// for(var i=0;i<val.length;i++)
// {
//     if(typeof val[i]!=='object')
//     {
//          b.push(val[i])   
//     }
//     else
//     {
//         add(val[i])
//     }

// }

// return b;
// }
// var res=add([1,2,3,4,[5,6],7,[8,9],10])
// console.log(res)



// function recursive(value)
// {
//     console.log(value)

//     newValue=value-1
//     if(newValue>0)
//     {
//         recursive(newValue)
//     }
// }
// recursive(10)





// var a="welcome to a nodejs tutorial"
// var b=a.split(" ")
// console.log(b[0])


// var a="            welcome to a nodejs tutorial"
// // var b=a.trim()
// console.log(a)




// var a={
//     fname:"kiran",
//     age:20,
//     greet:function (){console.log(`hello ${this.fname}`)}
// }
// a.greet()


// function Value()
// {
//     this.fname="kiran",
//     this.age=20
// }
// var res=new Value()
// console.log(res.fname)


// class Value{
//     constructor(){
//         this.val="NodeJs"
//     }
// }
// var res=new Value()
// console.log(res.val)




// var a=[{name:"kiran"},{age:20}]
// var b=JSON.stringify(a)
// var c=b.toString()
// console.log()
// var a=["nodejs","javascript",["react","c"]]
// console.log(a.toString())


// var[a,b,c]=[10,20,30]
// console.log(b)


// var a=["my","name","is","kiran"]
// console.log(...a)


// var a=["nodeJs","JavaScript","java"]
// var b=Object.assign({},a)
// console.log(b['0'])


// from:
// const arr = [
//     {
//         sid: 123,
//         name: 'aaa'
//     },
//     {
//         sid: 456,
//         name: 'bbb'
//     },
//     {
//         sid: 789,
//         name: 'ccc'
//     }
// ];
// to:
// {
//   '123': { sid: 123, name: 'aaa' },
//   '456': { sid: 456, name: 'bbb' },
//   '789': { sid: 789, name: 'ccc' }
// }



// const result = arr.reduce((obj, cur) => ({...obj, [cur.sid]: cur}), {})
// console.log(result)

// var data=['a', 'b', 'c']
// var res=data.reduce((acc,ele)=>({...acc,[ele]:ele}),{})
// console.log(res)



// let people = [
//     { name: "John", age: 21 },
//     { name: "Oliver", age: 55 },
//     { name: "Michael", age: 55 },
//     { name: "Dwight", age: 19 },
//     { name: "Oscar", age: 21 },
//     { name: "Kevin", age: 55 },
//   ];


//   var res=people.reduce((acc,ele)=>({...acc,[ele.age]:ele}),{})
//   console.log(res)

//  people.forEach(ele=>console.log(ele))

//   Output

// {
//   '19': [ { name: 'Dwight', age: 19 } ],
//   '21': [ { name: 'John', age: 21 }, { name: 'Oscar', age: 21 } ],
//   '55': [
//     { name: 'Oliver', age: 55 },
//     { name: 'Michael', age: 55 },
//     { name: 'Kevin', age: 55 }
//   ]
// }

//   function groupBy(objectArray, property) {
//     return objectArray.reduce(function (accumulator, currentObject) {
//       let key = currentObject[property];
//       if (!accumulator[key]) {
//         accumulator[key] = [];
//       }
//       accumulator[key].push(currentObject);
//       return accumulator;
//     }, {});
//   }

//   let groupedPeople = groupBy(people, "age");
//   console.log(groupedPeople);



// let people = [
//     { name: "John", age: 21 },
//     { name: "Oliver", age: 55 },
//     { name: "Michael", age: 55 },
//     { name: "Dwight", age: 19 },
//     { name: "Oscar", age: 21 },
//     { name: "Kevin", age: 55 },
//   ];

//   {
//   '19': [ { name: 'Dwight', age: 19 } ],
//   '21': [ { name: 'John', age: 21 }, { name: 'Oscar', age: 21 } ],
//   '55': [
//     { name: 'Oliver', age: 55 },
//     { name: 'Michael', age: 55 },
//     { name: 'Kevin', age: 55 }
//   ]
// }



// function node(data,property)
// {
//     return data.reduce((acc,element)=>{
//         let key=element[property]
//         console.log(key)
//         if(!acc[key])
//         {
//             acc[key]=[];
//         }
//         acc[key].push(element)
//         return acc

//     },{})

// }
// var res=node(people,"age")
// console.log(res)


// var a=[1,2,3,1]
// var acc={}
// for(var i=0;i<a.length;i++)
// {
//     if(!acc[i])
//             {
//                 acc[i]=[];
//             }
//     // acc[i].push(a[i])

// }
// console.log(acc)


// var a=[1,2,3,4]
// var obj={}
// a.forEach((element,index)=>{
//    obj[`${index}`]=element

// })
// console.log(obj)

// var a=[1,2,3,4]
// var b=Object.assign({},a)
// console.log(b)

// var a=[1,2,3,4]
// var b=a.reduce((acc,ele)=>({...acc,[ele]:ele}),{})
// console.log(b)

// var a=[1,2,3,4]
// a.forEach((ele)=>{
//    console.log({...{},[ele]:ele})
// })


// var a={ difficulty: 'easy' ,name:"kiran"}

// var b={...a};
// console.log(b)

// var a="price,rating"
// var b=a.split(',').join(' ')
// console.log(b)


// var numbers = {
//     one: 1,
//     two: 2,
//     one:1
//   };

//   var keys = [];

//   for (var number in numbers) {
//     if (numbers.hasOwnProperty(number)) {
//       keys.push(number);
//     }
//   }
//   console.log(keys)


// const numbers = {
//     one: 1,
//   };
//   var res=Object.entries(numbers)
//   console.log(res)
//   res.forEach(([key,value])=>{
//     console.log(key)
//     console.log(value)
//   })

// const obj = {
//     name: 'Jean-Luc Picard',
//     rank: 'Captain'
//   };


//   Object.keys(obj).forEach(ele=>{
//     console.log(ele,":"+obj[ele])
//   })

// const myObject = {
//     someKey: "some value",
//     hello: "World",
//     js: "javascript foreach object",
//   }

//   Object.entries(myObject).forEach(([ele,key])=>{
//     console.log(key)
//   })

// const f2=(a,b)=>a(b)
// const result=f2(a=>a*2,2)
// console.log(result)


// function user()
// {
//   console.log(new.target)
// }
// user()

// var x=true
// if(true){
// console.log(x)
// let x;
// console.log(x)
// x=123
// console.log(x)
// }
// console.log(x)



// let people = [
//     { name: "John", age: 21 },
//     { name: "Oliver", age: 55 },
//     { name: "Michael", age: 55 },
//     { name: "Dwight", age: 19 },
//     { name: "Oscar", age: 21 },
//     { name: "Kevin", age: 55 },
//   ];

// people.filter(ele=>console.log(ele))
// console.log(res)



// const employees = [
//     { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
//     { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//     { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
//     { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
// ];

// var res=employees.map((ele)=>{
//    var newObj={};
//    newObj.name=ele.name;
//    newObj.earninigs=ele.salary+ele.bonus-ele.tax;
//    return newObj
// })
// console.log(res)



// var a=[10,20,30,40]
// var res=a.map(ele=>
//   {
//     return ele/3
//   })
// console.log(a)
// console.log(res)


// var a=[10,20,30,40]
// var b={}
// a.forEach((ele,index)=>{
//    b[`key${index}`]=ele
// })
//  console.log(b)


// var a=[1,2,3,4]
// var b=a.reduce((acc,ele)=>({...acc,[ele]:ele}),{})
// console.log(b)

// const a = [{x:100}, {x:200}, {x:300}];
// a.forEach((ele)=>{

// })

// const a = [{x:100}, {x:200}, {x:300}];
// var res=a.map((ele)=>ele.x).reduce((acc,val)=>{return acc+val})
// console.log(res)
// var finalRes=res/a.length
// console.log(finalRes)

// var a={name:"kiran"}
// var b=Object.entries(a).join(' ').split(',')
// console.log(b)


// const data = [
//   { name: 'John', age: 30, group: 'A' },
//   { name: 'Mary', age: 25, group: 'B' },
//   { name: 'Mike', age: 20, group: 'A' },
//   { name: 'Jane', age: 15, group: 'C' },
//   { name: 'Peter', age: 25, group: 'B' }
// ];

// data.forEach((ele)=>{
//   if(ele.age>20)
//   {
//         ele.voterEligible=true
//   }
//   else
//   {
//     ele.voterEligible=false
//   }
// })
// console.log(data)





// var res=data.filter((ele)=>{
//     return ele.age>25
// })
// console.log(res)




// for(var i=0;i<data.length;i++)
// {
//   console.log(data[i])
// }

// data.forEach((ele,index,arr)=>{
//   console.log(ele,index,arr)
// })


// for(var i of data)
// {
//   console.log(i)
// }


// var obj = [
// 	{ name: 'Max', age: 23 },
// 	{ name: 'John', age: 20 },
// 	{ name: 'Caley', age: 18 }
// ];

// Object.keys(obj).forEach(key => console.log(obj[key]));



// var a=[1,2,3,4]
// var b=a*2
// console.log(b)


// var data=[
//     {firstName:"Kadapa",lastName:"AndhraPradesh",age:60},
//     {firstName:"Bangalore",lastName:"Karnataka",age:30},
//     {firstName:"Hyderabad",lastName:"Telangana",age:70},
//     {firstName:"Mumbai",lastName:"Maharastra",age:60},
// ]


// var res=data.reduce((acc,val)=>{
//   if(val.age<70)
//   {
//      acc.push(val.firstName)
//   }
//   return acc;

// },[])
// console.log(res)

// var res=data.filter((ele)=>ele.age<70).map(ele=>{
//   return ele.firstName
// })
// console.log(res)



//{60:2,30:1,70:1}

// var res=data.reduce((acc,ele)=>{
//  if(acc[ele.age])
//  {
//     acc[ele.age]= acc[ele.age]+1
//  }
//  else
//  {
//       acc[ele.age]=1
//  }
//  return acc;
// },{})
// console.log(res)
// console.log(res)


//list of all names=firstName+lastName

// var res=data.map((ele)=>{
//   var fullName=ele.firstName+" "+ele.lastName;
//   return fullName;
// })
// console.log(res)

// console.log(process.env)





// var fruits=["apple","banana","mango"]
// fruits.forEach((fruit)=>{
//   console.log("i love",fruit)
// })


// console.log("kiran")

// var a="welcome to nodejs tutorial";
// var res=a.startsWith("wel")
// console.log(res)


// setTimeout(()=>{
//   console.log("kiran")
// },2000)


// var a={name:"kiran",age:20}
// var b={...a}
// console.log(b)

// a=10
// console.log(a)
// let a


// function dieToss() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// console.log('1');
// var promise = new Promise(function(fulfill, reject) {
//   var n = dieToss();
//   if (n === 6) {
//     fulfill(n);
//   } else {
//     reject(n);
//   }
//   console.log('2');
// });

// promise.then(function(toss) {
//   console.log('Yay, threw a ' + toss + '.');  
// }, function(toss) {
//   console.log('Oh, noes, threw a ' + toss + '.');  
// });

// console.log('3');






// function dieToss()
// {
//   return Math.floor(Math.random()*6)+1
// }

// var promise=new Promise((success,fail)=>{
//   var n=dieToss();
//   if(n===6)
//   {
//     success(n)
//   }
//   else
//   {
//     fail(n)
//   }
// })

// promise.then((val)=>{
//   console.log(`successfully ${val} was tossed`)
// })
// .catch((err)=>{
//     console.log(`oho it is ${err},better luck next time`)
// })



// function kiran()
// {
//   var a="javaScript"
//   function check()
//   {
//      return `welcome to ${a}`
//   }
// return check;
// }
// var res=kiran()
// console.log(res)
// console.log(res())

// function calculate(x)
// {
//   function multiply(y)
//   {
//       return x*y
//   }
//   return multiply
// }

// var res1=calculate(2)
// console.log(res1)





// function sum()
// {
//   var a=0;
//   function increaseSum()
//   {
//      return a=a+1
//   }
//   return increaseSum
// }

// var res=sum()
// console.log(res())
// console.log(res())
// console.log(res())
// console.log(res())
// var a=10
// console.log(a)



// var a=[10,20,30]
// var b=[...a]
// console.log(b)

// function sum(x,y,z)
// {
//   return x+y+z
// }
// var res=[1,2,3]
// console.log(sum(...res))





// var EventEmitter=require('events');
// var eventEmitter=new EventEmitter();
// eventEmitter.on('action',(name)=>{
//   console.log("event was done by "+name)
// })
// console.log("nodeJs")

// eventEmitter.emit('action','kiran')  

// var buf= Buffer.alloc("hello world",'utf-8');
// console.log(buf)



// var obj={
//   name:"kiran",
//   age:20
// }

// var {name,age}=obj
// console.log(age)


// var a=30
// var b
// var c=a||b
// console.log(c)

// var x;
// console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
// x = 23;
// "use strict";
// x=2;
// // console.log(x)
// var x
// console.log(x)

// var x=2
// var y='2'
// console.log(x==y)
// console.log(x===y)
// var a=100

// function kiran()
// {
//   let a=10
//   console.log(a)
// }

// kiran()

// for(let i=0;i<5;i++)
// {
//   console.log(i)
// }

// var a=2
// var b="3"
// var c=a-b
// console.log(c)
// console.log(typeof a)

// var a='2'
// var b='23'
// var c=a*b
// console.log(c)


// (function()
// {
//   console.log("kiran")
// })()

// var obj={
//   age:20,
//   greet:function(){
//     console.log(this.age)
//   }
// }
// obj.greet()




// (function()
// {
//   console.log("kiran")
// })()

// console.log("one")
// console.log("two")



// function kiran()
// {
//   for(let i=1;i<=5;i++)
//   {
//     setTimeout(()=>{
//       console.log(i)
//     },i*1000)
//   }
// }
// kiran()



// console.log("first number")
// console.log("second number")
// console.log("third number")

// second()
// function first()
// {
//   console.log("first number")
// }


// function second()
// {
//   console.log("second number")
// }

// console.log("kiran")

// function third()
// {
//   console.log("third number")
// }


// second()

// console.log("nodeJs")


// function first(name)
// {
//   console.log("first number is "+name)
// }
// function second()
// {
//   console.log("second number")
// }
// first('kiran',second())





// function add(a,b)
// {
//   console.log(a+b)
// }


// function sub(a,b)
// {
//   console.log(a-b)
// }

// function mul(a,b)
// {
//   console.log(a*b)
// }

// function devide(a,b)
// {
//   console.log(a/b)
// }


// function calculate(num1,num2,callback)
// {
//   return callback(num1,num2)
// }

// calculate(2,3,add)




// function add(a,b,callback)
// {

//  callback(a+b)
// }
// add(1,2,(sum)=>{

//   console.log(sum)
// })



// function add(a,b,callback)
// {
//     callback(a+b)
// }

// add(1,2,(sum)=>{
//   console.log(sum)
//   add(3,sum,(sum1)=>{
//     console.log(sum1)
//     add(4,sum1,(sum2)=>{
//       console.log(sum2)
//       add(5,sum2,(sum3)=>{
//         console.log(sum3)
//         add(6,sum3,(sum4)=>{
//           console.log(sum4)
//           add(7,sum4,(sum5)=>{
//             console.log(sum5)

//           })
//         })
//       })
//     })
//   })
// })


// function add(a,b){
//   return new Promise((resolve)=>{
//     var res=a+b;
//     resolve(res)
//   })
// }
// add(1,2)
// .then((sum)=>{
//    return add(3,sum)
// })
// .then((sum1)=>{
//   return add(4,sum1)
// })
// .then((sum2)=>{
//   return add(5,sum2)

// })
// .then((sum3)=>{
//   console.log(sum3)
// })



// function add(number)
// {

//     console.log(number)
//     var value=number-1
//     if(value>0)
//     {
//       add(value)
//     }

// }
// add(5)





// var a=10
// var a=20
// console.log(a)


// var a=[10,20,30]
// var b={...a}
// console.log(b)


// function add(...args)
// {
//   console.log(args)
// }
// var res=[1,2,3,4,5]
// add(...res)


// function first()
// {
//   console.log("first number")
// }
// console.log("kiran")

// function second()
// {
//   console.log("second number")
// }
// console.log("nodejs")
// first(second())
// console.log("javascript")

// "use strict"
// x=3
// console.log(x)


// var a=new Set([2,4,3,1,1,1,2,4,5])
// console.log(a)

// var a=new WeakSet({a:20,b:10,c:30})
// var b=Object.keys(a)
// console.log(b)


// var a=[1,2,3,4]
// var{w,x,y,z}=a
// console.log(w)


// var a={
//   name:"kiran",
//   age:20,
//   country:"india"
// }
// var {name,age,country}=a
// console.log(age)

// var a=Boolean
// console.log(typeof a)


// (function(){
//   setTimeout(()=> console.log(1),2000);
//   console.log(2);
//   setTimeout(()=> console.log(3),0);
//   console.log(4);
// })();


// function rotateRight(arr,rotations){
//   if(rotations == 0) return arr;
//   for(let i = 0; i < rotations;i++){
//     let element = arr.pop();
//     arr.unshift(element);
//   }
//   return arr;
// }
// rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
// rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]




// function rotationNum(arr,rotations)
// {
//       for(var i=0;i<rotations;i++)
//       {
//         var element=arr.pop();
//         arr.unshift(element)
//       }
//       return arr
// }
// console.log(rotationNum([2, 3, 4, 5, 7], 3))




// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };

// var res=Object.keys(obj).map((key)=>[key,obj[key]])
// console.log(res)

// var res=Object.assign([],obj)
// console.log(res)

// var a=10+ +"10"
// console.log(typeof a)
// console.log(a)



// var a=[10,20,30,40,50]
// var b=Object.assign({},a)
// console.log(b)
// var obj={}
// a.forEach((ele,index)=>{
//    obj[index]=ele

// }
// )
// console.log(obj)
// var obj=Object.fromEntries(a)
// console.log(obj)

// var a = [
//   [
//     1,
//     5
//   ],
//   [
//     2,
//     7
//   ],
//   [
//     3,
//     0
//   ],
//   [
//     4,
//     0
//   ],
//   [
//     5,
//     0
//   ],
//   [
//     6,
//     0
//   ],
//   [
//     7,
//     0
//   ],
//   [
//     8,
//     0
//   ],
//   [
//     9,
//     0
//   ],
//   [
//     10,
//     0
//   ],
//   [
//     11,
//     0
//   ],
//   [
//     12,
//     0
//   ]
// ]

// var a=[
//   [
//     "1",
//     5
//   ],
//   [
//     "2",
//     7
//   ],
//   [
//     "3",
//     0
//   ],
//   [
//     "4",
//     0
//   ],
//   [
//     "5",
//     0
//   ],
//   [
//     "6",
//     0
//   ],
//   [
//     "7",
//     0
//   ],
//   [
//     "8",
//     0
//   ],
//   [
//     "9",
//     0
//   ],
//   [
//     "10",
//     0
//   ],
//   [
//     "11",
//     0
//   ],
//   [
//     "12",
//     0
//   ]
// ]

// var b=[]
// function Arrays(arr)
// {
//   for(var i=0;i<arr.length;i++)
//   {
//     if(typeof arr[i]==='object')
//     {
//       Arrays(arr[i])
//     }
//     else
//     {
//       b.push(arr[i])
//     }
    
//   }
//   return b
// }
// console.log(Arrays(a))





// var a=[10,20,30,40,50]

// var res=a.reduce((acc,value,index)=>{

//   return {...acc,['key'+index]:value}
// },{})
// console.log(res)


// var a=[10,20,30,40,50]
// var acc={}
// var b={...acc,[0]:a}
// console.log(b)


// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 1000);
// }



// function kiran()
// {
//     var largest=arr[0];
//     var smalest=arr[0];
//     for(var i=0;i<arr.length;i++)
//     {
//     if(arr[i]>largest)
//     {
//         largest=arr[i]
//     }
//     if(arr[i]<smalest)
//     {
//        smalest=arr[i]
//     }
// }
//     console.log(largest)
//     console.log(smalest)

// }

// kiran(arr=[10,4,5,6,90,234,1])


// function kiran(arr)
// {
//     var largest=[...arr];
//     var smalest=arr[0];
   
//     console.log(largest)
//     console.log(smalest)

// }

// kiran([10,4,5,6,90,234,1])




// var a=['kiran','ram','kiran','laxman','ram']
// var res=a.reduce((acc,ele)=>{
//  if(acc[ele])
//  {
//     acc[ele]+=1
//  }
//  else
//  {
//     acc[ele]=1
//  }
//  return acc

// },{})
// console.log(res)



// var a="my name is uravakonda kiran"
// var b=a.split('a')
// console.log(b)
// var res=b.length-1
// console.log(`a:${res}`)

// var a="my name is uravakonda kiran"
// var count=0
// for(var i=0;i<a.length;i++)
// {
//    count++
// }
// console.log(count)



// function check(str,letter)
// {
//    var count=0;
//    for(var i=0;i<str.length;i++)
//    {
//       if(str.charAt(i)==letter)
//       {
//          count++
//       }
//    }
//    return count
// }
// console.log(check("school",'o'))




// var a="school"
// var b=a.split('').reduce((acc,ele)=>{
//      if(acc[ele])
//      {
//       acc[ele]=acc[ele]+1
//      }
//      else
//      {
//       acc[ele]=1
//      }
//      return acc
// },{})
// console.log(b)



// function check(str,letter)
// {
//    var count=0;
//    for(var i=0;i<str.length;i++)
//    {
//       if(str.charAt(i)==letter)
//       {
//          count++
//       }
//    }
//    return count
// }
// console.log(check("school",'z'))


// var a=[1,2,1,2,4,5,3,3]

// var b=a.reduce((acc,ele)=>{
//    if(acc.indexOf(ele)==-1)
//       {
//           acc.push(ele)
//       }
//       return acc;
// },[])
// console.log(b)

// var a=[1,2,1,2,4,5,3,3]
// var res=[]
// for(var i=0;i<a.length;i++)
// {
//    if(res.indexOf(a[i])==-1)
//    {
//           res.push(a[i])
//    }
// }
// console.log(res)






// var a=[1,2,1,2,4,5,3,3]
// var res=[]
// for(var i=0;i<a.length;i++)
// {
//    if(!res.includes(a[i]))
//    {
//           res.push(a[i])
//    }
   
// }
// console.log(res)


// function generateOTP()
// {

//     var digits = '0123456789';

//     var otpLength = 4;

//     var otp = '';

//     for(let i=1; i<=otpLength; i++)

//     {

//         var index = Math.floor(Math.random()*(digits.length));
//         console.log(index)
//         console.log(digits[index])

//         otp = otp + digits[index];
        

//     }

//     return otp;

// }
// console.log(generateOTP())
// // generateOTP()




// function generateOTP()
// {
//    var digits="0123456789";
//    var otp=''
//    for(var i=0;i<4;i++)
//    {
//       var index=Math.floor(Math.random()*digits.length)
//       otp=otp+digits[index]
//    }
//    return otp
// }
// console.log(generateOTP())

// import {add} from './first'
// var res=require('./first')

// console.log(add(1,2))
// console.log(subtract(1,2))

// var path=require('path')
// console.log(__filename)
// console.log(__dirname)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))


// console.log(path.format(path.parse(__filename)))

// console.log(path.join('/folder1','folder2','folder3'))
// console.log(path.join('/folder1','folder2','../folder3'))

// console.log(path.join(__dirname,'kiran.js'))



// function greet(name)
// {
//     console.log(`hello ${name}`)
// }

// function higherOrder(callback)
// {
//     var names="kiran"
//     callback(names)
// }

// higherOrder(greet)


// var EventEmitter=require('events')
// var eventEmitter=new EventEmitter();

// eventEmitter.on('action',(name)=>{
//     console.log(`action was done by ${name}`)
// })
// console.log("second")

// eventEmitter.on('action',()=>{
//     console.log(`click the button`)
// })
// eventEmitter.emit('action','kiran')
// console.log("first")



// var buffer=new Buffer.from('kiran')
// buffer.write('kings')
// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(buffer.toString())

// var fs=require('fs')
// var res=fs.readFileSync('./file.txt','utf-8')
// console.log(res)


// var fs=require('fs/promises')

// fs.readFile('./file.txt','utf-8')
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })


// var fs=require('fs')
// var readableStream=fs.createReadStream('./file.txt',{
//     encoding:'utf-8',
//     highWaterMark:2
// })
// console.log('first')
// var writableStream=fs.createWriteStream('./file2x.txt')
// console.log('second')
// readableStream.on('data',(chunk)=>{
//     console.log(chunk)  
//     writableStream.write(chunk)
// })
// console.log('third')




// var http=require('http')
// var server=http.createServer((req,res)=>{
//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Home page");
//       } else if (req.url === "/api") {
//         for (let i = 0; i < 6000000000; i++) {} // Simulate CPU work
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Slow Page");
//       }
    
    
// })

// server.listen(1000,()=>{
//     console.log("server running on 1000 port")
// })



// var cluster=require('cluster')
// var http=require('http')

// if(cluster.isMaster)
// {
//     console.log(`master running on ${process.pid} `)
//     cluster.fork()
//     cluster.fork()
// }else {
//     console.log(`worker started ${process.pid} `)
//     const server=http.createServer((req,res)=>{
//             if (req.url === "/") {
//                 res.writeHead(200, { "Content-Type": "text/plain" });
//                 res.end("Home page");
//               } else if (req.url === "/api") {
//                 for (let i = 0; i < 6000000000; i++) {} // Simulate CPU work
//                 res.writeHead(200, { "Content-Type": "text/plain" });
//                 res.end("Slow Page");
//               }
            
            
//         })
        
//         server.listen(1000,()=>{
//             console.log("server running on 1000 port")
//         })
// }



// var res=['My', 'name', 'is', 'Jack']
// var data=(...res)
// console.log(data)


// var i=1
// var time=setInterval(()=>{
  
//   console.log("welcome to nodejs")
//   i++
//    if(i>5)
//    {
//        clearInterval(time)
//        console.log("program was ended")
//    }
// },1000)




// const {add}=require('./first')
// console.log(add(3,4))

// var res=add(5,5)
// console.log(res)


// var data=['kiran','nodejs','javascript']

// // var res=data[data.length-1]
// var res=data.length-1
// console.log(res)



var express=require('express')
var app=express()
var cookieParser=require('cookie-parser')
var session = require('express-session')

app.use(express.json())

// function middleware(req,res,next)
// {
//       console.log('nodeJs')
//       next()
// }

// // app.use(middleware)

// app.get('/',(req,res)=>{
//     res.send("welcome to nodeJs tutorial")
// })

// app.get('/data',middleware,(req,res)=>{
//     res.send([
//         {
//             id:1,
//             country:"india"
//         },
//         {
//             id:2,
//             country:"australia"
//         },
//         {
//             id:3,
//             country:"england"
//         }
//     ])
// })

//cookies------

// var data=[
//     {item:'apple',cost:100},
//     {item:'banana',cost:50},
//     {item:'coconut',cost:200},
//     {item:'mango',cost:300}
// ]

// app.get('/data',(req,res)=>{
//     res.cookie('kiran','uravakonda',{
//         maxAge:10000,
//         secure:true,
//         httpOnly:true
//     })
//     res.send(data)
// })


//sessionsss------

// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))

// var sessionInfo={
//     id:''
// }


// app.post('/login',(req,res)=>{
//     if(req.body.username='kiran',req.body.password='123')
//     {
//         sessionInfo.id=req.sessionID
//         res.send(req.sessionID)
//     }
//     else
//     {
//         res.send('please check the username and password')
//     }
// })

// app.post('/user',(req,res)=>{
//     if(sessionInfo.id===req.body.id)
//     {
//         res.send([{email:"kiran123556789",age:21},{course:"nodeJs",framework:"expressJs"}])
//     }
//     else
//     {
//         res.send("the session was not active currently")
//     }
// })


// sessions advance------------


// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))

// app.post('/cart/items',(request,res)=>{
    // var {item,quantity}=req.body
    // var cartItems={item,quantity}
    // const {cart}=req.session
    // if(cart)
    // {
    //     console.log("hello world")
    //     req.session.cart.items.push(cartItems)
    // }
    // else
    // {
    //     req.session.cart={
    //         items:[cartItems]
    //     }
    // }

//     const { item, quantity } = request.body;
//   const cartItem = { item, quantity };
//   const { cart } = request.session;
//   if (cart) {
//     request.session.cart.items.push(cartItem);
//   } else {
//     request.session.cart = {
//       items: [cartItem],
//     };
//   }
//     res.sendStatus(201)
// })




// ----------------

// app.use(cookieParser());
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }))

// app.post('/login',(req,res)=>{
//     const {username,password}=req.body;
//     if(username && password)
//     {
//         if(req.session.user)
//         {
//             res.send(req.session.user)
//         }
//         else
//         {
//             req.session.user={
//                username
//             }
//             res.send(req.session)
//         }
        
//     }
//     else{
//         res.sendStatus(401)
//     }
// })
// app.listen(9000,()=>{
//     console.log("server running on 9000 port")
// })



// function add()
// {
//     console.log("hello world")
// }

// console.log(typeof res)
// res()
// console.log(typeof res)
// let res=function ()
// {
//     console.log("hello world")
// }
// console.log(typeof res)
// res()


// function sum(a,b)
// {
//     return a+b
// }
// console.log(sum(1,'2'))













// var arr = [1, 2, [3, [4, 5]], [6, [7]], [8, 9, 10]];

// //output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var finalRes=[]
// function array(arr)
// {

//     for(var i=0;i<arr.length;i++)
//     {
//         if(typeof arr[i]==="object")
//         {
//            array(arr[i])
//         }
//         else
//         {
//             finalRes.push(arr[i])

//         }

//     }
//     return finalRes;
// }
// console.log(array([1, 2, [3, [4, 5]], [6, [7]], [8, 9, 10]]))









var data=[
    {firstName:"Kadapa",lastName:"AndhraPradesh",age:60},
    {firstName:"Bangalore",lastName:"Karnataka",age:30},
    {firstName:"Hyderabad",lastName:"Telangana",age:70},
    {firstName:"Mumbai",lastName:"Maharastra",age:60},
]


//{60:2,30:1,70:1}

var res=data.reduce((acc,ele)=>{
 if(acc[ele.age])
 {
    acc[ele.age]= acc[ele.age]+1
 }
 else
 {
      acc[ele.age]=1
 }
 return acc;
},{})
console.log(res)