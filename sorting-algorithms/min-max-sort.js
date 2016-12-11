// Mix - Max Sorting algoritm. 

function minMaxSort(A) {

    // console.log("###############################");
    // console.log('A (init): ' + A);
    // console.log("###############################");

    // Note. This method is only valid for not duplicated arrays.
    // I will use the max / min method to sort the array and get the swap 
    for (var global = 0; global < Math.ceil(A.length / 2); global += 1) {
        var maxIInit = A.length - 1 - global;
        var minIInit = global;
        var maxI = A.length - 1 - global;
        var max = A[maxI];
        var minI = global; //global
        var min = A[global];
        
        // console.log("Iteration #" + global);
        // console.log("  maxIInit: " + maxIInit);
        // console.log("  minIInit: " + minIInit);
        // console.log("  max: " + max);
        // console.log("  maxI: " + maxI);
        // console.log("  min: " + min);
        // console.log("  minI: " + minI);
        // console.log("-------------------------------");


        // Iterate fisrt time the whole array, and every main iteration leave two outside
        for (var i = global; i <= maxIInit; i += 1) {
            if (A[i] < min) {
                min = A[i];
                minI = i;
            }
            if (A[i] > max) {
                max = A[i];
                maxI = i;
            }
        }

        // Max and Min were founded in reversed positions,
        // We only need to swap once
        if (maxI === minIInit && minI === maxIInit) {
            var temp = A[maxI];
            A[maxI] = A[minI];
            A[minI] = temp;
        } else {
            // Move the min to the lower position
            if (minI !== minIInit) {
                // console.log("Move the min to the lower position.");
                // console.log("Swapping new min A[" + minI + "]=" + A[minI] + " by A[" + minIInit + "]=" + A[minIInit]);
                // console.log("Initial Array: " + A);
                var temp = A[minI];
                A[minI] = A[minIInit];
                A[minIInit] = temp;
                if (minIInit === maxI) {
                    maxI = minI;
                }
                // console.log("Final Array: " + A);

            }

            // Move the max to the higher position
            if (maxI !== maxIInit) {
                // console.log("Move the max to the higher position.");
                // console.log("Swapping new min A[" + maxI + "]=" + A[maxI] + " by A[" + maxIInit + "]=" + A[maxIInit]);
                // console.log("Initial Array: " + A);
                var temp = A[maxI];
                A[maxI] = A[maxIInit];
                A[maxIInit] = temp;
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
