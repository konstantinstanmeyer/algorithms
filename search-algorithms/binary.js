export default class Binary {
    binarySearch(arr, target){
        let leftIndex = 0;
        let rightIndex = arr.length - 1;

        while(leftIndex < rightIndex){
            let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
            if (target === arr[middleIndex]){
                return middleIndex;
            }
            if(target < arr[middleIndex]){
                rightIndex = middleIndex - 1;
            } else if (target > arr[middleIndex]){
                leftIndex = middleIndex + 1;
            }
        }
        return -1; // if target is not found
    }

    recursiveBinarySearch(arr, target){
        return this.search(arr, target, 0, arr.length - 1);
    }

    search(arr, target, leftIndex, rightIndex){
        if (leftIndex > rightIndex){
            // no more elements in array left to search
            return -1;
        }

        let middleIndex = Math.floor((leftIndex + rightIndex) / 2 )

        if(target === arr[middleIndex]){
            return middleIndex;
        }

        if (target < arr[middleIndex]){
            return this.search(arr, target, leftIndex, middleIndex - 1);
        } else if (target > arr[middleIndex]){
            return this.search(arr, target, middleIndex + 1, rightIndex);
        }
    }
}