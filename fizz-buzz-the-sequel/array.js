Array.prototype.bubbleSort = function() {
    let swapped = true
    while(swapped){
        swapped = false
        for(let i = 0; i < this.length-1; i++){
            if(this[i] > this[i+1]){
                let placeholder = this[i]
                this[i] = this[i+1]
                this[i+1] = placeholder
                swapped = true
            }
        }
    }
    return this
  // this = the array
}

Array.prototype.insertionSort = function() {
  for(let i = 0; i < this.length; i++){
      let val = this[i]

      let j = i-1
      while(j>=0 && this[j]>val){
        this[j+1] = this[j]
        j--
      }
      this[j+1] = val
  }
}

Array.prototype.linearSearch = function(number) {
    this.sort()
    for(let i = 0; i < this.length; i++){
        if(this[i] == number){
            return i
        }       
    }
    return -1
  // this = the array
  // return index where number is found
}

Array.prototype.binarySearch = function(number) {
  // this = the array
  // return index where number is found
    this.sort()
    let mid = this.length / 2
    let first = 0
    let last = this.length - 1

    while(first < last){
        if(this[mid] == number){
            return mid
        }

        else if(this[mid] < number){
            first = mid + 1
            mid = first + last / 2        
        }

        else{
            last = mid - 1
            mid = first + last / 2        
        }
    }
}

let array = [9001, 25, 5, 12, -46,22,33,65,1,21]

// console.log(array.bubbleSort())
console.log(array.binarySearch(22)) // [-46, 5, 12, 25, 9001]
// array.linearSearch(12) // 3
// array.binarySearch(9001) // 0