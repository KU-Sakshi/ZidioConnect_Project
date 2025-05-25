// frontend/js/recruiter/jobs/postJob.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('post-job-form');
  const submitButton = form.querySelector('button[type="submit"]');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    feedback.textContent = '';
    feedback.className = '';

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Disable submit during processing
    submitButton.disabled = true;
    submitButton.textContent = 'Posting...';

    // Collect form data
    const jobData = {
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      location: form.location.value.trim(),
      type: form.type.value,
      salary: form.salary.value.trim(),
      requirements: form.requirements.value.trim(),
      deadline: form.deadline.value
    };

    try {
      // Simulate API request (replace this with actual API call)
      await fakeApiPostJob(jobData);

      feedback.textContent = 'Job posted successfully!';
      feedback.className = 'feedback-success';

      form.reset();

    } catch (error) {
      feedback.textContent = 'Failed to post job. Please try again later.';
      feedback.className = 'feedback-error';
      console.error('Post job error:', error);

    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Post Job';
    }
  });
});

// Simulated API call function returning a resolved promise after delay
function fakeApiPostJob(data) {
  return new Promise((resolve) => {
    console.log('Job data submitted:', data);
    setTimeout(() => resolve({ status: 'success' }), 1200);
  });
}
