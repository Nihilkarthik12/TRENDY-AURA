  function submitFeedback(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you for your feedback, ${name}! We'll get back to you at ${email} soon.`);
            document.querySelector('.contact-form').reset();
        }
