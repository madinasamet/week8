function getSecondLargest(nums) {
    nums.sort(function(a, b){return b - a});
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if (nums[i] == nums[0]){
            k++;
        }
    }
    return nums[k];
}