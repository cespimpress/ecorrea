<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $webhook_url = "https://hook.eu1.make.com/usftsv1xtu17crcucbrtfemp23qo2bkk";
    
    $data = [
        'name' => $_POST['name'],
        'phone' => $_POST['phone'],
        'email' => $_POST['email'],
		'subject' => $_POST['subject'],
        'message' => $_POST['message']
    ];

    $options = [
        'http' => [
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($webhook_url, false, $context);

    if ($result === FALSE) {
        // Manejar el error
        echo "Error al enviar los datos";
        exit;
    }

    // Redirigir a la página de agradecimiento
    header('Location: https://ecorrea.landpg.online/thanks/');
    exit;
}
?>
