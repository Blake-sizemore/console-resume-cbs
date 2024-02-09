console.log('working');

let resume = {
    name: "Blake",
    career: "unknown",
    description: "This where my desction goes",
    interest: ['interest1', 'interest2', 'interest3', 'interest4'],
    past_jobs_arrObj: [
        {
            company: "company1",
            title: "title1",
            location: "location1",
            description: "description1",
        },
        {
            company: "company2",
            title: "title2",
            location: "location2",
            description: "description2",
        }, {
            company: "company3",
            title: "title3",
            location: "location3",
            description: "description3",
        }, {
            company: "company4",
            title: "title4",
            location: "location4",
            description: "description4",
        },
    ],
    skills: ['skill 1', 'skill 2', 'skill 3', 'skill 4'],

}

console.log("Name: " + resume.name.toUpperCase());
console.log("Career: " + resume.career);
console.log("Desciption: " + resume.description);



function callIntrest() {
    console.log('My interest:');
    for (let i = 0; i < resume.interest.length; i++) {
        const interestNum = resume.interest[i];
        console.log("* " + interestNum);
    }
}

callIntrest();

function callPre() {
    console.log('My Previous Things:');
    for (let i = 0; i < resume.past_jobs_arrObj.length; i++) {
        const skilCompany = resume.past_jobs_arrObj[i].company;
        const skilTitle = resume.past_jobs_arrObj[i].title;
        const skilDescription = resume.past_jobs_arrObj[i].description;

        console.log("*  " + skilCompany);
        console.log("  *" + skilTitle);
        console.log("     *" + skilDescription);
    }
}

callPre();

function callSkill() {
    console.log('My skills:');
    for (let i = 0; i < resume.skills.length; i++) {
        const skilNum = resume.skills[i];
        if (i % 2) {
            console.log("* BAM: " + skilNum);
        } else { console.log("* " + skilNum); }
    }
}

callSkill();