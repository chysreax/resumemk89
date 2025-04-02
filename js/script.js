document.addEventListener('DOMContentLoaded', function() {

    // --- Accordion Enhancement (No changes needed for dark mode) ---
    // Optional: Close others when one opens (uncomment if desired)
    // const detailsElements = document.querySelectorAll('.content-detail');
    // detailsElements.forEach(detail => {
    //     detail.addEventListener('toggle', event => {
    //         if (detail.open) {
    //             detailsElements.forEach(otherDetail => {
    //                 if (otherDetail !== detail && otherDetail.open) {
    //                     otherDetail.removeAttribute('open');
    //                 }
    //             });
    //         }
    //     });
    // });


    // --- Quiz/Toggle Answer Functionality with Smooth Transition ---
    const toggleButtons = document.querySelectorAll('.toggle-answer-btn');

    toggleButtons.forEach(button => {
        const answer = button.nextElementSibling; // Assumes the answer <p> is immediately after the button

        // Initially hide answers using the 'hidden' class for transition
        if (answer && answer.classList.contains('answer')) {
             answer.classList.add('hidden'); // Add hidden class initially
             answer.style.display = 'block'; // Keep it in the layout flow but hidden by class styles
        }

        button.addEventListener('click', () => {
            if (answer && answer.classList.contains('answer')) {
                // Check if the answer is currently hidden (has the 'hidden' class)
                const isHidden = answer.classList.contains('hidden');

                if (isHidden) {
                    // Show the answer: remove 'hidden' class
                    answer.classList.remove('hidden');
                    button.textContent = 'Sembunyikan Jawaban';
                } else {
                    // Hide the answer: add 'hidden' class
                    answer.classList.add('hidden');
                    button.textContent = 'Tampilkan Jawaban';
                }
            }
        });
    });

});
