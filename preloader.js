document.addEventListener("DOMContentLoaded", function () {
    // Create Preloader Element
    let preloader = document.createElement("div");
    preloader.id = "preloader";
    preloader.innerHTML = `
        <style>
            #preloader {
                position: fixed;
                width: 100%;
                height: 100%;
                background: white;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
            }
            .loader {
                border: 5px solid #f3f3f3;
                border-top: 5px solid #3498db;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
        <div class="loader"></div>
    `;
    
    document.body.appendChild(preloader);

    // Hide Preloader After FlutterFlow App Loads
    window.addEventListener("load", function () {
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000); // Adjust delay if necessary
    });
});
