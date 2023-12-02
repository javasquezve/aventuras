document.addEventListener("DOMContentLoaded", function () {
    const photoGallery = document.getElementById("photoGallery");

    // Nombres de las imágenes
    const photoFileNames = [
        "imagen1.jpg",
        "imagen2.jpg",
        "imagen3.jpg",
        "imagen4.jpg",
        "imagen5.jpg",
        "imagen6.jpg",
        // Agrega más nombres de imágenes según sea necesario
    ];

    // Ruta completa para las imágenes
    const basePath = window.location.href.replace("index.html", "");

    // Agrega dinámicamente las fotos al álbum
    photoFileNames.forEach((fileName) => {
        const photoElement = document.createElement("img");
        photoElement.src = basePath + fileName;
        photoElement.alt = "Imagen de Navidad";
        photoElement.classList.add("photo");

        // Agrega un evento para abrir la imagen en una nueva pestaña al hacer clic
        photoElement.addEventListener("click", function () {
            window.open(basePath + fileName, "_blank");
        });

        photoGallery.appendChild(photoElement);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const acceptButton = document.getElementById("acceptButton");
    const container = document.querySelector(".container");

    acceptButton.addEventListener("click", function () {
        // Cambia el contenido del contenedor al emoji 🥳🙌🎆🥳
        container.innerHTML = '<div class="celebration-emoji">🥳🙌🎆🥳 Te amo </div>';

        // Puedes agregar más acciones aquí si es necesario

        // Puedes agregar más acciones aquí si es necesario

        // Elimina la clase de animación después de un tiempo para que pueda reproducirse de nuevo
        setTimeout(() => {
            container.classList.remove("celebration-animation");
        }, 2000); // La duración de la animación es 2 segundos
    });
});
