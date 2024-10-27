(function() {
    // Lista de dominios permitidos
    const allowedDomains = ["idcard.ws", "landpg.online"];

    // Obtener el dominio actual
    const currentDomain = window.location.hostname;

    // Verificar si el dominio actual es exactamente uno de los dominios principales o un subdominio de uno de ellos
    const isAllowed = allowedDomains.some(domain => currentDomain === domain || currentDomain.endsWith(`.${domain}`));

    if (!isAllowed) {
        // Bloquea el acceso y muestra un mensaje de restricción estilizado
        document.body.innerHTML = `
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background-color: #2e2e2eff;
                font-family: Arial, sans-serif;
                text-align: center;
                color: #ffffff;
                padding: 20px;
                box-sizing: border-box;
            ">
                <div style="
                    max-width: 500px;
                    width: 100%;
                    padding: 30px;
                    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
                    background-color: #333;
                    border-radius: 8px;
                    text-align: center;
                ">
                    <!-- Logo centrado con tamaño reducido al 50% -->
                    <img src="https://idcard.ws/logo-idcard.png" alt="Logo IdCard" style="width: 179px; height: 75px; object-fit: contain; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;">

                    <h1 style="font-size: 24px; margin-bottom: 20px;">Para activar su licencia de IdCard</h1>
                    
                    <p style="font-size: 18px; line-height: 1.6; margin-bottom: 20px;">
                        Diríjase al correo: <br>
                        <a href="mailto:licencias@idcard.ws" style="color: #bba56a; text-decoration: none;">licencias@idcard.ws</a>
                    </p>
                    
                    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                        O envíenos un mensaje vía WhatsApp al:
                    </p>

                    <!-- Botón de WhatsApp -->
                    <a href="https://wa.me/12068135051?text=Deseo%20activar%20mi%20licencia%20de%20IdCard%2C%20mi%20copia%20de%20pago%20la%20adjunto%20en%20este%20mensaje%20mi%20nombre%20es%3A" target="_blank" style="
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #bba56a;
                        color: #ffffff;
                        font-size: 16px;
                        text-decoration: none;
                        border-radius: 5px;
                    ">
                        +1 (206) 813-5051
                    </a>

                    <p style="margin-top: 10px; font-size: 16px; color: #bba56a;">
                        Atención al Cliente (Customer Service)
                    </p>
                </div>
            </div>
        `;
    }
})();
