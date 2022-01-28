// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// Create a Person constructor that has three properties: name, job, and age.
// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?

class Person{
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise(){
        console.log(`${this.name} is about to run a marathon.. in his dreams`)
    }

    fetchJob(){
        console.log(`${this.name} is a ${this.job} at Wells Fargo`)
    }

}

class Programmer{
    constructor(name, job, age, languages, languagesIWantToLearn) {
        this.name = name;
        this.job = job;
        this.age = age;
        this.languages = languages;
        this.languagesIWantToLearn = languagesIWantToLearn;
        this.busy = true;
    }

    completeTask(){
        this.busy = false;
    }

    offerNewTask(){
        if (this.busy === true){
            console.log(`${this.name} cant accept any new tasks right now.`)
        } else if (this.busy == false){
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
    }

    listLanuages(){
        console.log(`Programming languages I know: ${this.languages}`)
    }

    learnLanguages(){
        console.log(`Programming languages I want to learn: ${this.languagesIWantToLearn}`)
    }
}

const brianK = new Person ('Brian K', 'Full Stack Developer', 19);
console.log(brianK);
brianK.exercise();
brianK.fetchJob();

const kBrian = new Programmer('Brian K', 'Full Stack Developer', 19, "JavaScript, HTML/CSS", "Node.js, React")
console.log(kBrian);
kBrian.completeTask();
kBrian.offerNewTask();
kBrian.listLanuages();
kBrian.learnLanguages();
