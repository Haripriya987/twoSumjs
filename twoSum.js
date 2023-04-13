function twoSum(arr,target){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==target){
        return [i,j];
       
      }
    }
  }
  
}
const num1=[1,2,3,5];
console.log(twoSum(num1,4));

//Another way for twoSum  problem
function twoSum(nums,target){
  let map=new Map();
  for(let i=0;i<nums.length;i++){
    let num1=nums[i];
    let num2=target-num1;
    if(map.has(num2)){
      return[i,map.get(num2)];
    }
    map.set(num1,i);
  }
  
}
const nums=[1,2,3,5];
console.log(twoSum(nums,7));