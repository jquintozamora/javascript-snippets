// Mix - Max Sorting algoritm. 

// TODO. Continue implementing performace improvements.

function minMaxSortV2(A) {

    // console.log("###############################");
    // console.log('A (init): ' + A);
    // console.log("###############################");

    // Note. This method is only valid for not duplicated arrays.
    // I will use the max / min method to sort the array and get the swap 
    var ALength = Math.ceil(A.length / 2);
    for (var global = 0; global < ALength ; global++) {
        var maxIInit = maxI = A.length - 1 - global;
        var minIInit = minI = global;
        var max = A[maxI];
        var min = A[minI];
        
        // console.log("Iteration #" + global);
        // console.log("  maxIInit: " + maxIInit);
        // console.log("  minIInit: " + minIInit);
        // console.log("  max: " + max);
        // console.log("  maxI: " + maxI);
        // console.log("  min: " + min);
        // console.log("  minI: " + minI);
        // console.log("-------------------------------");


        // Iterate fisrt time the whole array, and every main iteration leave two outside
        for (var i = global; i <= maxIInit; i++) {
            var valA = A[i];
            if (valA < min) {
                min = valA;
                minI = i;
            }
            if (valA > max) {
                max = valA;
                maxI = i;
            }
        }

        // Performance
        var valMaxI = A[maxI];
        var valMinI = A[minI];
        var valMinIInit = A[minIInit];
        var valMaxIInit = A[maxIInit];

        // Max and Min were founded in reversed positions,
        // We only need to swap once
        if (maxI === minIInit && minI === maxIInit) {
            A[maxI] = valMinI;
            A[minI] = valMaxI;
        } else {
            // Move the min to the lower position
            if (minI !== minIInit) {
                // console.log("Move the min to the lower position.");
                // console.log("Swapping new min A[" + minI + "]=" + A[minI] + " by A[" + minIInit + "]=" + A[minIInit]);
                // console.log("Initial Array: " + A);
                A[minI] = valMinIInit;
                A[minIInit] = valMinI;
                if (minIInit === maxI) {
                    maxI = minI;
                    valMaxI = valMinI;
                }
                if (maxIInit === minI) {
                    valMaxIInit = valMinIInit;
                }
                // console.log("Final Array: " + A);

            }

            // Move the max to the higher position
            if (maxI !== maxIInit) {
                // console.log("Move the max to the higher position.");
                // console.log("Swapping new min A[" + maxI + "]=" + A[maxI] + " by A[" + maxIInit + "]=" + A[maxIInit]);
                // console.log("Initial Array: " + A);
                A[maxI] = valMaxIInit;
                A[maxIInit] = valMaxI;
                // console.log("Final Array: " + A);
            }
        }
        // console.log("-------------------------------");
    }

    // console.log("###############################");
    // console.log('A (sorted): ' + A);
    // console.log("###############################");
    return A;
}
