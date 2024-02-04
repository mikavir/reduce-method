  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [ 0, 1, 2, 3 ,4 ];
// let sum = nums.reduce((acc, curr) => acc + curr);
let sum = nums.reduce((acc, curr) => {
  console.log(
    "accummalator:", acc,
    "current:", curr,
    "total:", acc + curr,
  );
  return acc + curr;
}, 10);

console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience , 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// {developer: 12, designer: 4} <-- what we want
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {})

// grouping by names
let nameByProfession = teamMembers.reduce((acc, cur) => {
  let group = cur.profession;
  if (!acc[group]) {
    acc[group] = [];
  }
  acc[group].push(cur.name);
  return acc;
}, {})
console.log(nameByProfession);

