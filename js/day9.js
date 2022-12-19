

const data = [
    { food: {name:"pizza", id: 2 }, qty: 1 },
    { food: {name:"momo",id: 3 }, qty: 5 },
    { food: { name:"pizza",id: 2 }, qty: 9 }
  ];

const finalResult=(arr)=>{
    const filteredArray = arr.filter((obj)=> {
        return obj.food.id === 2;
    })
    let addQty = filteredArray.reduce( (acc,item) => {

        return acc + item.qty
    },0)
    const newData =[filteredArray[0]].map((currentValue) => {
        return { name:currentValue.food.name, qty: addQty}

    },[])
    return newData;
}
console.log(finalResult(data))
// let filterFood = data.filter(item => item.food.id == 2);

// let outputResult = filterFood.map((acc,item) => {

//     acc.push({name:filterFood.food.name, qty:addQty})
//    return outputResult
// },[]);
// console.log(outputResult)