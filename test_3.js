for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' A/B Testing');
    } else if (i % 3 === 0) {
        console.log(i + ' A/B');
    } else if (i % 5 === 0) {
        console.log(i + ' Testing');
    } else console.log(i);
}
