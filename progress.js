// Sample progress data for students
const studentProgressData = {
    name: "John Doe",
    completedQuizzes: 3,
    totalQuizzes: 5,
    completedAssignments: 2,
    totalAssignments: 4
};

// Sample student summary for instructors
const students = [
    { name: "John Doe", completedQuizzes: 3, totalQuizzes: 5, completedAssignments: 2, totalAssignments: 4 },
    { name: "Jane Smith", completedQuizzes: 5, totalQuizzes: 5, completedAssignments: 4, totalAssignments: 4 },
    { name: "Alice Johnson", completedQuizzes: 4, totalQuizzes: 5, completedAssignments: 3, totalAssignments: 4 }
];

// Function to update student progress in real-time
function updateStudentProgress() {
    const studentProgress = document.getElementById('studentProgress');

    // Calculate progress percentage for quizzes and assignments
    const quizProgress = (studentProgressData.completedQuizzes / studentProgressData.totalQuizzes) * 100;
    const assignmentProgress = (studentProgressData.completedAssignments / studentProgressData.totalAssignments) * 100;

    // Display progress for the student
    studentProgress.innerHTML = `
        <p><strong>Student Name:</strong> ${studentProgressData.name}</p>
        <p><strong>Completed Quizzes:</strong> ${studentProgressData.completedQuizzes} out of ${studentProgressData.totalQuizzes} (${quizProgress.toFixed(0)}%)</p>
        <p><strong>Completed Assignments:</strong> ${studentProgressData.completedAssignments} out of ${studentProgressData.totalAssignments} (${assignmentProgress.toFixed(0)}%)</p>
    `;
}

// Function to update instructor's summary of all students
function updateInstructorSummary() {
    const instructorTable = document.querySelector('#instructorTable tbody');
    instructorTable.innerHTML = ''; // Clear existing table rows

    students.forEach(student => {
        const totalProgress = ((student.completedQuizzes / student.totalQuizzes) + (student.completedAssignments / student.totalAssignments)) / 2 * 100;

        // Create a new row for each student
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.completedQuizzes}/${student.totalQuizzes}</td>
            <td>${student.completedAssignments}/${student.totalAssignments}</td>
            <td>${totalProgress.toFixed(0)}%</td>
        `;
        instructorTable.appendChild(row);
    });
}

// Run the functions to update student and instructor views
updateStudentProgress();
updateInstructorSummary();
