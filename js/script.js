document.addEventListener('DOMContentLoaded', function() {
    
    // --- Accordion Enhancement (Optional: Close others when one opens) ---
    const detailsElements = document.querySelectorAll('.content-detail');

    detailsElements.forEach(detail => {
        detail.addEventListener('toggle', event => {
            if (detail.open) {
                // --- Uncomment below to close others when one opens ---
                // detailsElements.forEach(otherDetail => {
                //     if (otherDetail !== detail && otherDetail.open) {
                //         otherDetail.removeAttribute('open');
                //     }
                // });
            }
        });
    });


    // --- Quiz/Toggle Answer Functionality ---
    const toggleButtons = document.querySelectorAll('.toggle-answer-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling; // Assumes the answer <p> is immediately after the button
            if (answer && answer.classList.contains('answer')) {
                if (answer.style.display === 'none' || answer.style.display === '') {
                    answer.style.display = 'block';
                    button.textContent = 'Sembunyikan Jawaban';
                } else {
                    answer.style.display = 'none';
                    button.textContent = 'Tampilkan Jawaban';
                }
            }
        });
    });

});
