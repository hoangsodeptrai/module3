const person ={
    firstName: 'John',
    lastName: 'Doe',
    age : 30,
    gender :'male',
    occupation:'developer',
    nationality: 'American',
    city:'New York',
    hobbies :['reading','football'],
    languages:['VietNam','English'],
    education:{
        degree:'Bachelor',
        major:'Dior',
        university:'CodeGym',
    }
};
const {firstName,gender,education,languages}=person;
console.log(firstName);
console.log(gender);
console.log(education.degree);
console.log(languages[1]);
