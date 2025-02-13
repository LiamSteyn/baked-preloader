<script>
document.addEventListener("DOMContentLoaded", function () {
    let preloader = document.createElement("div");
    preloader.id = "preloader";
    preloader.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

            #preloader {
                position: fixed;
                width: 100%;
                height: 100%;
                background: black;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                color: white;
                font-family: 'Orbitron', sans-serif;
                text-align: center;
            }

            #preloader img {
                width: 100px; /* Adjust size as needed */
                height: auto;
                margin-bottom: 15px;
            }

            #preloader-text {
                font-size: 14px;
                opacity: 0.8;
            }
        </style>
        <img src="https://cdn.jsdelivr.net/gh/LiamSteyn/baked-preloader/loading.gif" alt="Loading...">
        <div id="preloader-text">Powered by LSC Software</div>
    `;

    document.body.appendChild(preloader);

    window.addEventListener("load", function () {
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000);
    });
});
</script>
