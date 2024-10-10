import data from "./data.js";

// const finalArr = [];
// for(let obj of data){
//     const fullName = `${obj.name.first.} ${obj.name.last}`;
//     // console.log(fullName);
    
//     const birthday = new Date(obj.dob.date).toDateString();
//     finalArr.push({fullName, birthday});
// }
// console.log(finalArr);

const finalArr = data.map(obj) => {
    const fullName = `${obj.name.first} ${obj.name.last}`;
    const birthday = new Date(obj.dob.date).toDateString();
    return{fullName, birthday};
});

console.log(finalArr);