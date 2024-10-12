<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "your-email@example.com";
    $subject = "New Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Log form submission to a text file
    $log = "logs/form_submissions.txt";
    $log_entry = "Name: $name, Email: $email, Message: $message\n";

    if (mail($to, $subject, $body, $headers)) {
        file_put_contents($log, $log_entry, FILE_APPEND);
        echo "<script>alert('Your message has been sent successfully!'); window.location.href = 'contact.html';</script>";
    } else {
        echo "<script>alert('Failed to send your message. Please try again later.'); window.location.href = 'contact.html';</script>";
    }
}
