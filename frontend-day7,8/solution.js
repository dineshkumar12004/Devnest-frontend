// Question 1: 
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
    
console.log(Object.keys(student));
   
//Question 2:
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(student.rollno)
delete student.rollno;
console.log(student.rollno);


//Question 3 

var student = { 
    name : "David Rayy",
    sclass : "VI", 
    rollno : 12 
};
var size=0;

for(var i in student){
    size++;
}

console.log(size);

//Question 4

const objs = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]

objs.map(obj =>{ 
    if(obj.readingStatus){
        console.log(`${obj.author}, ${obj.title}`);
    }
});


//Question 5 

const volumeOfCylinder = (height,diameter) => {
    return height * Math.PI * diameter/2 * diameter/2;
}

console.log(volumeOfCylinder(7,7).toFixed(4)); //269.3916




//Question 6

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

console.log('before sorting...');
console.log(library);

library.sort(
    function(a,b){
        if(a.title < b.title){
            return -1;
        }
        else if(a.title > b.title){
            return 1;
        }
        return 0;
});

console.log('after sorting...');
console.log(library);