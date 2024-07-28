document.getElementById('whatsapp-button').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var whatsappMessage = `Hello Azhar,
My Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`;

    var whatsappUrl = `https://wa.me/+6281223080881?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
});
