document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.faqs-whole-container-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.faqs-whole-container-toggle-icon');
            
            // Hide all answers except the one clicked
            document.querySelectorAll('.faqs-whole-container-answer').forEach(ans => {
                if (ans !== answer) {
                    ans.style.display = 'none';
                }
            });
            
            // Toggle display of the clicked answer
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            
            // Reset all icons to plus sign
            document.querySelectorAll('.faqs-whole-container-toggle-icon').forEach(toggleIcon => {
                toggleIcon.textContent = '+';
            });

            // Toggle icon of the clicked question
            icon.textContent = answer.style.display === 'block' ? '-' : '+';
        });
    });
});
