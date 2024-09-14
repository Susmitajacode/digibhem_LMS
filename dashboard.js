function showContent(section) {
    let contentArea = document.getElementById('content');

    if (section === 'students') {
        contentArea.innerHTML = `
          <h2>Student List</h2>
          <ul>
              <li>John Doe - Grade 10</li>
              <li>Jane Smith - Grade 9</li>
              <li>Mike Johnson - Grade 11</li>
          </ul>
      `;
    } else if (section === 'teachers') {
        contentArea.innerHTML = `
          <h2>Teacher List</h2>
          <ul>
              <li>Mr. Anderson - Mathematics</li>
              <li>Ms. Green - Science</li>
              <li>Mrs. Brown - English</li>
          </ul>
      `;
    } else if (section === 'assignments') {
        contentArea.innerHTML = `
          <h2>Assignments</h2>
          <ul>
              <li>Math Homework - Due: 15th Sept</li>
              <li>Science Project - Due: 20th Sept</li>
              <li>English Essay - Due: 18th Sept</li>
          </ul>
      `;
    } else if (section === 'messages') {
        contentArea.innerHTML = `
          <h2>Messages</h2>
          <p>You have no new messages.</p>
      `;
    }
}
