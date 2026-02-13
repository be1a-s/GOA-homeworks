// 3) შექმენით manualMap და manualFilter თქვენი ხელით გაკეთებული map-ისა და filter-ის ფუნქციები, გატესტეთ ორივე

const Manualmap = (arr,callback) => {
    let result = [];
    for(let i=0;i<arr.length;i++){
        let currentValue = arr[i];
        let newvalue = callback(currentValue,i,arr)
        result.push(newvalue)
    }
    return result
}

const manualFilter = (arr,callback) => {
    let result = [];
    for(let i=0;i<arr.length;i++){
        let currentValue = arr[i];
        if  (callback(currentValue,i,arr)){
         result.push(currentValue)   
        } 
    }
    return result
}