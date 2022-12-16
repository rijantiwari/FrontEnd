// 1)Write a simple JavaScript program to join all elements of the following array into a string.

//  const array=["Apple","Banana","Orange","Mango"]
//  output=>Apple,Banana,Orange,Mango
//         Apple+Banana+Orange+Mango

const array=["Apple","Banana","Orange","Mango"]
let joinedFruits = array.join();
console.log(joinedFruits);

// 2)Write a simple JavaScript program to reverse an array without using array.reverse() method 
//  const data=[1,2,3,4,5,6]
//  output=[6,5,4,3,2,1]
const data = [1,2,3,4,5,6]
let output=[ ];
for (var i = data.length - 1; i >= 0; i--) {
    output.push(data[i]);
    for(var j=0; j < data.length; j++){
        console.log(data[i]);
    }
}

// 3)   
//  const data = [1, 2, 1, 2, 3];
//  output= [1, 2, 3]

const data1 = [1,2,1,2,3];
// for(var i =0; i < data1.length;i++){

// }
const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
let output1 = data1.filter(unique);
// function filterUnique(num){
//     if (output1[num] != num){
//         console.log(num)
//     }
// }

  console.log(output1);

//   4)Write a method that returns array of age
// const data=[{name:"Jack",age:"22"},{name:"David",age:"18"},{name:"Rohit",age:"4"}]
// outpput=>[24,18,4]

const arr=[{name:"Jack",age:"22"},{name:"David",age:"18"},{name:"Rohit",age:"4"}]
let araryOfAge=arr.filter(filterByAge);
function filterByAge(object){
    let outputAge=[]
    outputAge.push(object.age)
    for(var i=0; i < outputAge.length; i++){
        console.log(outputAge[i]);
    }
}

// 5)Write a method to find minumum and maximum values 
//  const data=[10,100,3,200,5,6]
//  output: max=>200
//         min=>3


const arrData=[10,100,3,200,5,6]
console.log(Math.min(...arrData));
console.log(Math.max(...arrData));

// 6)Write a method to sort array without using sort method 
// const data= [4, 50, 1, 5, 8];
// output =[1,4,5,8,50]

const sortArr=[4,50,1,5,8];
for (let i = 0; i < sortArr.length; i++) {
    for (let j = i + 1; j < sortArr.length; j++) {
      if (sortArr[i] > sortArr[j]) {
        temp = sortArr[i];
        sortArr[i] = sortArr[j];
        sortArr[j] = temp;
      }
    }
  }
  console.log("Sorted array=>", sortArr);

//   7)const peoples = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         weight: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         weight: '136',
//         eye_color: 'black',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         weight: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         weight: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];
// a)write a method to get array of peoples with weight greater than 100method to get array of peoples with weight greater than 100
// b)write a method to get array of peoples with height less than 200
// c)write a method to get all male characters
// d)write a method to get all female characters
// e))write a method to get array of objects with just name and height properties 
const peoples = [
        {
            name: 'Luke Skywalker',
            height: '172',
            weight: '77',
            eye_color: 'blue',
            gender: 'male',
        },
        {
            name: 'Darth Vader',
            height: '202',
            weight: '136',
            eye_color: 'black',
            gender: 'male',
        },
        {
            name: 'Leia Organa',
            height: '150',
            weight: '49',
            eye_color: 'brown',
            gender: 'female',
        },
        {
            name: 'Anakin Skywalker',
            height: '188',
            weight: '84',
            eye_color: 'blue',
            gender: 'male',
        },];

        // method to get array of peoples with weight greater than 100
        let weightHundred = peoples.filter(getWeightHundred);
        function getWeightHundred(obj){
                if(obj.weight > 100){
                console.log(obj);
                }  
        }
// b)write a method to get array of peoples with height less than 200
console.log("----------------------------------------Height less than 200------------------------");
        let getHeight = peoples.filter(getHeightHun);
        function getHeightHun(obj){
            if(obj.height < 200){
                console.log(obj)

            }
        }
console.log("--------------Male Characters------------");
        let maleCharacter = peoples.filter(getMaleCharacter);
        function getMaleCharacter(obj){
            if(obj.gender === 'male'){
                console.log(obj);
            }
        }

// d)write a method to get all female characters
console.log("--------------FeMale Characters------------");
        let femaleCharacter = peoples.filter(getfemaleCharacter);
        function getfemaleCharacter(obj){
            if(obj.gender === 'female'){
                console.log(obj);
            }
        }
// e))write a method to get array of objects with just name and height properties

let nameAndheight = peoples.filter(getPeople);
function getPeople(obj){
    return {fullname:`${obj.name} ${obj.height}`}
}