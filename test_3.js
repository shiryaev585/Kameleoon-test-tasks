for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0) {
        console.log("A/B")
    } else if (i % 5 === 0){
        console.log("Testing")
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("A/B Testing")
    }
    console.log(i)
}