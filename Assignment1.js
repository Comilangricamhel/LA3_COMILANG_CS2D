 let score = prompt("Enter your score:");
 console.log("RESULT");
    
    let grade = score >= 97 ? console.log("Your equivalent Grade is “1.00” Exellent")
                score >= 94 ? console.log("Your equivalent Grade is “1.25 Exellent")
                score >= 91 ? console.log("Your equivalent Grade is “1.50” Above Average")
                score >= 88 ? console.log("Your equivalent Grade is “1.75” Above Average")
                score >= 85 ? console.log("Your equivalent Grade is “2.00” Average")
                score >= 82 ? console.log("Your equivalent Grade is “2.25” Avarage")
                score >= 79 ? console.log("Your equivalent Grade is “2.50” Below Average")
                score >= 76 ? console.log("Your equivalent Grade is “2.75” Below Average")
                score >= 73 ? console.log("Your equivalent Grade is “3.00” Below Average")
                score >= 70 ? 4.00 : 5.00;
               
    if (score >= 90) {
        console.log("HIGH PASS, Candidate for Cum Laude");
    } else if (score >= 80) {
        console.log(n"AVERAGE PASS");
    } else if (score >= 75) {
        console.log("LOW PASS");
    } else {
        console.log("FAILED, Needs Improvement");
    } else {
        console.log("Score Input Error")}    
