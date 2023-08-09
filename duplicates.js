/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    if (nums.length === 0)
        return 0;


    let sorted = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            sorted.push(nums[i]);
        }
    }


    for (let i = 0; i < sorted.length; i++) {
        nums[i] = sorted[i];
    }

    return sorted.length;
};
