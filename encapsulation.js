class Teacher {
    #name;
    #subject;
    constructor(name, subject) {
        this.#name = name;
        this.#subject = subject;
    }

    #grade(marks) {
        let grade;
        if(marks >= 90)
            grade = "O"
        else if(marks >= 75 && marks < 90) 
            grade = "A"
        else 
            grade = "F"
        console.log('Your grade is', grade);
    };

    getGrade(marks) {
        console.log(this.#name);
        console.log(this.#subject);
        this.#grade(marks);
    }
}

const obj = new Teacher("Nitish", "Operating System");
obj.getGrade(80);