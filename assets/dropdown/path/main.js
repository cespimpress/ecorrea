(function() {
    // Dominio principal permitido
    const mainDomain = "idcard.ws", "webcard.site", landpg.online";

    // Obtener el dominio actual
    const currentDomain = window.location.hostname;

    // Verificar si el dominio actual es exactamente el dominio principal o un subdominio de él
    const isAllowed = currentDomain === mainDomain || currentDomain.endsWith(`.${mainDomain}`);

    if (!isAllowed) {
        // Bloquea el acceso y muestra un mensaje de restricción con mejor estilo
        document.body.innerHTML = `
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background-color: #f8f9fa;
                font-family: Arial, sans-serif;
                text-align: center;
                color: #333;
            ">
                <div style="
                    border: 2px solid #dc3545;
                    padding: 30px;
                    max-width: 500px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                    background-color: #fff;
                    border-radius: 8px;
                ">
                    <h1 style="color: #dc3545; font-size: 24px; margin-bottom: 15px;">Este sitio no cuenta con licencia de IdCard</h1>
                    <p style="font-size: 18px; margin-bottom: 15px;">
                        Adquiera su licencia enviando un correo a: <br>
                        <a href="mailto:ventas@idcard.ws" style="color: #007bff; text-decoration: none;">ventas@idcard.ws</a>
                    </p>
                    <p style="font-size: 16px; margin-bottom: 0;">
                        Si ya adquirió su licencia y tiene problemas para visualizar su sitio, comuníquese con soporte en: <br>
                        <a href="mailto:soporte@idcard.ws" style="color: #007bff; text-decoration: none;">soporte@idcard.ws</a>
                    </p>
                </div>
            </div>
        `;
    }
})();
