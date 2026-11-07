// ---------- Find duplicate elements in an array ----------
//let arr=[10,20,10,30,20,40,10] // duplicate values: 10, 20
//let arr=[1,2,3,4,5] //  no duplicate elements in the array
//let arr=[5,5,5,5,5,5] // duplicate values: 5
let arr=[2,3,2,3,4] // duplicate values: 2, 3

// Method 1: sort + loop
let sorted=arr.sort((a,b)=>a-b); // copy first, so arr is not changed
let found = false; // flag: have we found any duplicate?

for(let i=0 ; i<sorted.length ; i++)
{
  // same as next element, but not same as previous -> print each duplicate only once
  if(sorted[i]===sorted[i+1] && sorted[i]!==sorted[i-1])
  {

    console.log("Duplicate values: " + sorted[i]); // 10, 20
    found=true
  } 
}
if(!found)
  {
  console.log("No duplicate elements in the array")
}

