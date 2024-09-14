// In-memory data storage
let contentData = [];
let editContentId = null;

// Show specified section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    // Special handling for Manage Content section
    if (sectionId === 'manage') {
        displayContent();
    }
}

// Create new content
function createContent() {
    const title = document.getElementById('courseTitle').value.trim();
    const description = document.getElementById('courseDescription').value.trim();

    if (title && description) {
        const contentItem = {
            id: Date.now(),
            title,
            description
        };
        contentData.push(contentItem);
        document.getElementById('createForm').reset();
        alert('Content created successfully!');
    } else {
        alert('Please fill in all fields.');
    }
}

// Display content in Manage Content section
function displayContent() {
    const contentList = document.getElementById('contentList');
    contentList.innerHTML = '';

    if (contentData.length === 0) {
        contentList.innerHTML = '<p>No content available.</p>';
        return;
    }

    contentData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'content-item';

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => openEditModal(item.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteContent(item.id);

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(editButton);
        div.appendChild(deleteButton);

        contentList.appendChild(div);
    });
}

// Open modal to edit content
function openEditModal(id) {
    editContentId = id;
    const item = contentData.find(content => content.id === id);

    document.getElementById('editTitle').value = item.title;
    document.getElementById('editDescription').value = item.description;

    document.getElementById('editModal').style.display = 'flex';
}

// Close edit modal
function closeModal() {
    document.getElementById('editModal').style.display = 'none';
}

// Save edited content
function saveEdit() {
    const title = document.getElementById('editTitle').value.trim();
    const description = document.getElementById('editDescription').value.trim();

    if (title && description) {
        const item = contentData.find(content => content.id === editContentId);
        item.title = title;
        item.description = description;

        closeModal();
        displayContent();
        alert('Content updated successfully!');
    } else {
        alert('Please fill in all fields.');
    }
}

// Delete content
function deleteContent(id) {
    if (confirm('Are you sure you want to delete this content?')) {
        contentData = contentData.filter(content => content.id !== id);
        displayContent();
    }
}

// Simulate file upload
function uploadFiles() {
    const files = document.getElementById('fileInput').files;
    if (files.length === 0) {
        alert('Please select files to upload.');
        return;
    }

    const uploadStatus = document.getElementById('uploadStatus');
    uploadStatus.textContent = 'Uploading...';

    // Simulate upload delay
    setTimeout(() => {
        uploadStatus.textContent = 'Files uploaded successfully!';
        document.getElementById('uploadForm').reset();
    }, 2000);
}
