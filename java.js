
    // Introduction to DOM manipulation
    const changeableText = document.getElementById('changeable-text');
    const textChangerBtn = document.getElementById('text-changer');
    
    textChangerBtn.addEventListener('click', function() {
        const welcomeMessage = "Hello Felix M Muriuki! Welcome to your DOM manipulation project at PLP Academy!";
        changeableText.textContent = welcomeMessage;
        changeableText.style.color = "#e74c3c";
        changeableText.style.fontWeight = "bold";
    });
    
    // PLP Academy color
    const styleDemo = document.getElementById('style-demo');
    
    styleDemo.addEventListener('mouseover', function() {
        this.style.backgroundColor = "#e74c3c";  // PLP red
        this.style.color = "white";
        this.style.border = "2px solidrgb(199, 31, 185)";  // PLP dark blue
    });
    
    styleDemo.addEventListener('mouseout', function() {
        this.style.backgroundColor = "#ecf0f1";
        this.style.color = "black";
        this.style.border = "1px solidrgb(255, 0, 0)";
    });
    
    // Felix's student information
    const toggleBtn = document.getElementById('toggle-element');
    const specialElement = document.getElementById('special-element');
    
    toggleBtn.addEventListener('click', function() {
        specialElement.classList.toggle('hidden');
        
        if (specialElement.classList.contains('hidden')) {
            toggleBtn.textContent = "Show Student Info";
        } else {
            toggleBtn.textContent = "Hide Student Info";
        }
    });
    
    // Ani header with PLP colors
    const heading = document.getElementById('main-heading');
    const plpColors = ['#e74c3c', '#2c3e50', '#3498db'];  // PLP brand colors
    let currentColor = 0;
    
    setInterval(function() {
        heading.style.color = plpColors[currentColor];
        currentColor = (currentColor + 1) % plpColors.length;
    }, 1000);
});
