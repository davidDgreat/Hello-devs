let person = {
    name: 'jack',
    age: 18,
    sex: 'SO I USED ES6 HERE TO DESCRIBE MYSELF AND',
    height: ' HOW I USED THE Object.assign to link.',
    bestfood: 'Well im using GITBASH to run my ES6 codes',
    howtorun: 'FEEL FREE TO MAKE PULL REQUESTS AND CONTRIBUTE ANYTHING EXTRA IM STILL UPCOMING SO ILL NEED ANY GUIDE AT ALL',
    fellowjnrdevs: 'AS FOR FELLOW DEVS YOU CAN RUN WITH GITBASH JUST SAVE AS A .JS FILE IN A FOLDER AND RIGHT CLICK AND RUN WITH GITBASH(!!!YOU WILL NEED TO INSTALL GITBASH!!!)'

};
let student = {
    name: 'My name is DavidDreatDev',
    age: 'I am a junior Front-end developer| and an Aspiring MEAN stack dev. i just got used to the ES6 ',
    xp: 'and decided to use it for a quick description',
    whyididthis:'Well some people might ask why i did it well',
    reason: ' I REALLY LIKE LEARNING WITH PRACTICING I FEEL HAPPY DOING IT',
    gitaccount: 'FOLLOW ON TWITTER:@DavidDgreatDev| GITHUB:DavidDgreatDev... Im also a product of HACKTIVIST123(GITHUB).'

};
let newstudent = Object.assign({}, person,
student);

console.log(newstudent.name);
console.log(newstudent.age);
console.log(newstudent.sex);
console.log(newstudent.height);
console.log(newstudent.xp);
console.log(newstudent.bestfood);
console.log(newstudent.howtorun);
console.log(newstudent.fellowjnrdevs);
console.log(newstudent.whyididthis);
console.log(newstudent.reason);
console.log(newstudent.gitaccount);