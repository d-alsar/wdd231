const yearElement = document.querySelector("#currentYear");
const currentYear = new Date().getFullYear();

// This creates a copyright symbol element
const copyrightSymbol = document.createTextNode("© ");

// This adds the copyright symbol and year to the span element
yearElement.appendChild(copyrightSymbol);
yearElement.appendChild(document.createTextNode(currentYear));


const today = new Date();
const dayElement = document.querySelector("#lastModified");

dayElement.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
}).format(today)}</span>`;


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function displayCourses(filter = "All") {
    const coursesContainer = document.querySelector(".courses-container");
    coursesContainer.innerHTML = ""; // Clear existing content

    const filteredCourses = filter === "All" ? courses : courses.filter(course => course.subject === filter);

    // Calculate total credits dynamically
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    // Calculate completed courses and earned credits
    const completedCourses = filteredCourses.filter(course => course.completed);
    const completedCredits = completedCourses.reduce((sum, course) => sum + course.credits, 0);
    
    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.textContent = `${course.subject} ${course.number} - ${course.title} (${course.credits} credits)`;

        if (course.completed) {
            courseDiv.style.backgroundColor = "#fca311"; // Highlight completed courses
            courseDiv.style.color = "black";
            courseDiv.style.border = "2px solid #14213d";
            courseDiv.style.fontWeight = "bold";
        } else {
            courseDiv.style.backgroundColor = "#14213d"; // Default style for uncompleted courses
            courseDiv.style.color = "white";
        }

        courseDiv.style.padding = "10px";
        courseDiv.style.margin = "5px";
        courseDiv.style.borderRadius = "8px";

        coursesContainer.appendChild(courseDiv);
    });

    // Display total credits and completed courses count
    const summaryContainer = document.querySelector(".course-summary");
    summaryContainer.innerHTML = `
        <p><strong>Courses Completed:</strong> ${completedCourses.length}</p>
        <p><strong>Credits Earned:</strong> ${completedCredits}</p>
    `;
}





document.addEventListener("DOMContentLoaded", () => {
    displayCourses();
    
    document.querySelector(".all").addEventListener("click", () => displayCourses("All"));
    document.querySelector(".cse").addEventListener("click", () => displayCourses("CSE"));
    document.querySelector(".wdd").addEventListener("click", () => displayCourses("WDD"));
});


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});