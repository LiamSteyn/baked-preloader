<script>
    // Create the overlay (preloader container)
    const overlay = document.createElement('div');
    overlay.id = 'loader';
    overlay.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 9999;
        flex-direction: column;
        color: black;
        font-family: 'Orbitron', sans-serif;
        text-align: center;
    `;

    // Create the SVG image element
    const svgImage = document.createElement('img');
    svgImage.id = 'svgImage';
    svgImage.src = 'https://cdn.jsdelivr.net/gh/LiamSteyn/baked-preloader@latest/loading.svg'; // Use your SVG URL
    svgImage.style.cssText = `
        width: 100px;
        height: auto;
        margin-bottom: 15px;
    `;

    // Create the loading text
    const loadingText = document.createElement('div');
    loadingText.id = 'loadingText';
    loadingText.innerText = 'Powered by LSC Software';
    loadingText.style.cssText = `
        font-size: 14px;
        opacity: 0.8;
    `;

    // Append elements to the overlay
    overlay.appendChild(svgImage);
    overlay.appendChild(loadingText);

    // Append overlay to the body
    document.body.appendChild(overlay);

    // Function to hide the overlay
    function hideOverlay() {
        overlay.style.display = 'none';
    }

    // Hide the overlay when DOMContentLoaded (simulating external script loading)
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(hideOverlay, 100); // Adjust time as needed
    });

    // Fallback: Hide overlay when all external resources are fully loaded
    window.addEventListener('load', hideOverlay);
</script>
