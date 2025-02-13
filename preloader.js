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
        background-color: white; /* Changed to white background */
        z-index: 9999;
        flex-direction: column;
    `;

    // Create the SVG image element
    const svgImage = document.createElement('img');
    svgImage.id = 'svgImage';
    svgImage.src = 'https://cdn.jsdelivr.net/gh/LiamSteyn/baked-preloader@latest/loading.svg'; // Use your SVG URL
    svgImage.style.cssText = `
        width: 100px;
        height: auto;
    `;

    // Append the SVG image to the overlay
    overlay.appendChild(svgImage);

    // Append the overlay to the body
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
