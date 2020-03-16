

const buildHistogram = (magazine) => {

    let histogram = {};
    for(let i=0; i<magazine.length; i++){
        if (Object.keys(histogram).includes(magazine[i])){
            histogram[magazine[i]] += 1
        }
        else{
            histogram[magazine[i]] = 1
        }
    }

    return histogram
}

const canBuildNote = () => {

    
}