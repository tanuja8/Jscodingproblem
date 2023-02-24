// let arr=[2,5,7,4,6,8,9,20,15,27]
// let arr1=arr.filter(val=> val >10)
// console.log(arr1)


let team=[
    {
        name:"Aftab",
        position:"developer"
    },
    {
        name:"Ramiz",
        position:"ui designer"
    },
    {
        name:"Afreen",
        position:"developer"
    },
    {
        name:"Sahil",
        position:" content manager"
    },
    {
        name:"Saba",
        position:"ui designer"
    },
    {
        name:"Safaque",
        position:"developer"
    },
    {
        name:"Arhan",
        position:"developer"
    },
];

let developer=team.filter(val=>val.position=="developer");
console.log(developer);