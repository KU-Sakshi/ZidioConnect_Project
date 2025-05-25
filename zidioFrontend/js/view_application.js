// Sample applications data for demonstration
const applications = [
    { id: 1, name: "Alice Johnson", jobTitle: "Frontend Developer", status: "Pending" },
    { id: 2, name: "Bob Smith", jobTitle: "Marketing Specialist", status: "Pending" },
    { id: 3, name: "Charlie Brown", jobTitle: "Frontend Developer", status: "Pending" },
];

// Function to load applications to the table
function loadApplications() {
    const applicationList = document.getElementById('applicationList');
    applicationList.innerHTML = '';
    applications.forEach(app => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${app.name}</td>
            <td>${app.jobTitle}</td>
            <td>${app.status}</td>
            <td>
                <button onclick="acceptApplication(${app.id})">Accept</button>
                <button onclick="rejectApplication(${app.id})">Reject</button>
            </td>
        `;
        applicationList.appendChild(row);
    });
}

// Function to accept an application
function acceptApplication(appId) {
    alert(`Application with ID ${appId} accepted.`);
    // Implement scheduling logic here
}

// Function to reject an application
function rejectApplication(appId) {
    alert(`Application with ID ${appId} rejected.`);
}

// Function to view applications for a job
function viewApplications(jobId) {
    alert(`Viewing applications for job ID ${jobId}`);
    // Load respective applications based on job ID in real implementation
}

// Function to close a job
function closeJob(jobId) {
    alert(`Job ID ${jobId} closed.`);
    // Implement closing logic here
}

// Load applications on page load
document.addEventListener('DOMContentLoaded', loadApplications);
