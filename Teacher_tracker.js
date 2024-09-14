// Array to store teacher data
let teachers = [];

// Function to add a new teacher
function addTeacher() {
    // Get the input values
    const name = document.getElementById('teacherName').value;
    const subject = document.getElementById('subject').value;
    const classTime = document.getElementById('classTime').value;

    // Validate inputs
    if (name === "" || subject === "" || classTime === "") {
        alert("Please fill all the fields.");
        return;
    }

    // Create a teacher object and add to array
    const teacher = {
        name: name,
        subject: subject,
        classTime: classTime
    };

    teachers.push(teacher);

    // Clear the form
    document.getElementById('teacherForm').reset();

    // Update the table with new teacher data
    displayTeachers();

    // Show success message
    document.getElementById('message').innerHTML = "Teacher added successfully!";
}

// Function to display the list of teachers in the table
function displayTeachers() {
    const tbody = document.querySelector('#teacherTable tbody');
    tbody.innerHTML = ""; // Clear previous entries

    teachers.forEach((teacher, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = teacher.name;

        const subjectCell = document.createElement('td');
        subjectCell.textContent = teacher.subject;

        const timeCell = document.createElement('td');
        timeCell.textContent = teacher.classTime;

        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(subjectCell);
        row.appendChild(timeCell);

        // Append row to the table body
        tbody.appendChild(row);
    });
}
