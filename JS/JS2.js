
// Answer for Jewels and Stones
var numJewelsInStones = function (Jewels, Stones) {
    let ans = 0;
    const all = {};
    for (const jewel of Jewels) {
        all[jewel] = true;
    }

    for (const stone of Stones) {
        if (stone in all) {
            ans += 1;
        }
    }
    return ans;
};
