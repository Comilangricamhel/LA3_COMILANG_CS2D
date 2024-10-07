let limit = prompt("Enter the limit of the double loop:");

    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            console.log(`[${i}] [${j}] Added value is ${i + j}`);
        }
    }
}
