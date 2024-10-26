<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Envío</title>
</head>
<body>

    <form id="myForm">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Correo:</label>
        <input type="email" id="email" name="email" required>
        
        <button type="submit">Enviar</button>
    </form>

    <script>
        document.getElementById("myForm").addEventListener("submit", async function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            try {
                const response = await fetch("https://hook.eu1.make.com/usftsv1xtu17crcucbrtfemp23qo2bkk", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({
                        name: name,
                        email: email
                    })
                });

                if (response.ok) {
                    window.location.href = "thanks/";
                } else {
                    alert("Error al enviar los datos.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Error al enviar los datos.");
            }
        });
    </script>

</body>
</html>
