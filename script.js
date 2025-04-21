document.addEventListener('DOMContentLoaded', () => {
    // Don't Click Me button and modal handling
    const ctaButton = document.querySelector('.btn.btn-primary');
    const modal = document.getElementById('click-modal');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.querySelector('.modal-close');

    const translations = {
        he: {
            messages: [
                { text: "הוזהרת! 😈", gif: "assets/rickroll.gif" },
                { text: "לעולם לא אוותר עליך! 🎵", gif: "assets/rickroll.gif" },
                { text: "לעולם לא אאכזב אותך! 🎵", gif: "assets/rickroll.gif" },
                { text: "לעולם לא אברח ואעזוב אותך! 🎵", gif: "assets/rickroll.gif" },
                { text: "עדיין כאן? הנה עוד ריקרול! 🎵", gif: "assets/rickroll.gif" },
                { text: "ריק אסטלי יהיה גאה! 🎤", gif: "assets/rickroll.gif" },
                { text: "זמן למסיבת ריקודים! 💃", gif: "assets/rickroll.gif" },
                { text: "שוב ריקרול! 🕺", gif: "assets/rickroll.gif" }
            ],
            trollMessages: [
                { text: "תפסתי אותך! אתה לא יכול להתאפק מללחוץ, נכון? 😏", img: "assets/troll.png" },
                { text: "עדיין לוחץ? אתה עקשן יותר ממה שחשבתי! 🤪", img: "assets/troll.png" },
                { text: "אתה יודע מה אומרים על סקרנות... 🐱", img: "assets/troll.png" },
                { text: "לחיצה על הכפתור הזה לא תהפוך אותך למיליונר! 💸", img: "assets/troll.png" },
                { text: "ההתמכרות שלך ללחיצות נראית! ☕", img: "assets/troll.png" },
                { text: "מנסה לשבור את האינטרנט? 🌐", img: "assets/troll.png" },
                { text: "הכפתור הזה כמו חור שחור - הוא ממשיך למשוך אותך פנימה! 🕳️", img: "assets/troll.png" },
                { text: "לחצת יותר פעמים ממספר המצמוצים שלי היום! 👁️", img: "assets/troll.png" },
                { text: "האם כפתור העכבר שלך כבר עייף? 🖱️", img: "assets/troll.png" },
                { text: "אתה ממש מסור לכפתור הזה, נכון? 🏆", img: "assets/troll.png" },
                { text: "טוויסט בעלילה: הכפתור לוחץ עליך! 🔄", img: "assets/troll.png" },
                { text: "הישג הושג: לוחץ כפתורים מקצועי! 🎮", img: "assets/troll.png" },
                { text: "חדשות: אדם מקומי לא יכול להפסיק ללחוץ על כפתור! 📰", img: "assets/troll.png" },
                { text: "אזהרה: לחיצה על כפתור ממכרת מאוד! ⚠️", img: "assets/troll.png" },
                { text: "עובדה מהנה: לכפתור הזה אין מטרה! 🎯", img: "assets/troll.png" }
            ],
            buttonTexts: [
                "אל תלחץ עליי",
                "אמרתי אל תלחץ!",
                "באמת... אל תלחץ!",
                "אזהרה אחרונה...",
                "בסדר, ביקשת את זה!",
                "עדיין לוחץ?",
                "אתה אף פעם לא לומד...",
                "שוב מתחילים!",
                "ברצינות?",
                "*מכה על המצח*"
            ]
        },
        en: {
            messages: [
                { text: "You've been warned! 😈", gif: "assets/rickroll.gif" },
                { text: "Never gonna give you up! 🎵", gif: "assets/rickroll.gif" },
                { text: "Never gonna let you down! 🎵", gif: "assets/rickroll.gif" },
                { text: "Never gonna run around and desert you! 🎵", gif: "assets/rickroll.gif" },
                { text: "You're still here? Have another rickroll! 🎵", gif: "assets/rickroll.gif" },
                { text: "Rick Astley would be proud! 🎤", gif: "assets/rickroll.gif" },
                { text: "Dance party time! 💃", gif: "assets/rickroll.gif" },
                { text: "Rickrolled again! 🕺", gif: "assets/rickroll.gif" }
            ],
            trollMessages: [
                { text: "Gotcha! You can't resist clicking, can you? 😏", img: "assets/troll.png" },
                { text: "Still clicking? You're more persistent than I thought! 🤪", img: "assets/troll.png" },
                { text: "You know what they say about curiosity... 🐱", img: "assets/troll.png" },
                { text: "Clicking this button won't make you a millionaire! 💸", img: "assets/troll.png" },
                { text: "Your click addiction is showing! ☕", img: "assets/troll.png" },
                { text: "Are you trying to break the internet? 🌐", img: "assets/troll.png" },
                { text: "This button is like a black hole - it keeps sucking you in! 🕳️", img: "assets/troll.png" },
                { text: "You've clicked more times than I've blinked today! 👁️", img: "assets/troll.png" },
                { text: "Is your mouse button getting tired yet? 🖱️", img: "assets/troll.png" },
                { text: "You're really dedicated to this button, aren't you? 🏆", img: "assets/troll.png" },
                { text: "Plot twist: The button clicks you! 🔄", img: "assets/troll.png" },
                { text: "Achievement Unlocked: Professional Button Clicker! 🎮", img: "assets/troll.png" },
                { text: "Breaking News: Local Person Can't Stop Clicking Button! 📰", img: "assets/troll.png" },
                { text: "Warning: Button clicking is highly addictive! ⚠️", img: "assets/troll.png" },
                { text: "Fun Fact: This button has no purpose! 🎯", img: "assets/troll.png" }
            ],
            buttonTexts: [
                "Don't Click Me",
                "I Said Don't Click!",
                "Really... Don't!",
                "Last Warning...",
                "Ok, You Asked For It!",
                "Still Clicking?",
                "You Never Learn...",
                "Here We Go Again!",
                "Seriously?",
                "*Facepalm*"
            ]
        }
    };

    // Make sure modal is hidden on page load
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }

    if (ctaButton && modal && modalImage && modalText && modalClose) {
        let isFirstClick = true;
        
        // Initialize button text based on language
        const currentLang = localStorage.getItem('language') || 'he';
        ctaButton.textContent = translations[currentLang].buttonTexts[0];
        
        ctaButton.addEventListener('click', () => {
            const lang = localStorage.getItem('language') || 'he';
            if (isFirstClick) {
                // On first click, just change the button text
                ctaButton.textContent = translations[lang].buttonTexts[1];
                isFirstClick = false;
                return;
            }

            // After first click, show modal
            modal.style.display = 'flex';
            modal.classList.add('show');

            // Randomly decide whether to show rickroll or troll message
            const showTroll = Math.random() > 0.5;
            
            if (showTroll) {
                // Show random troll message
                const randomTroll = translations[lang].trollMessages[Math.floor(Math.random() * translations[lang].trollMessages.length)];
                modalImage.src = randomTroll.img;
                modalText.textContent = randomTroll.text;
            } else {
                // Show random rickroll message
                const randomMessage = translations[lang].messages[Math.floor(Math.random() * translations[lang].messages.length)];
                modalImage.src = randomMessage.gif;
                modalText.textContent = randomMessage.text;
            }
            
            modalImage.style.display = 'block';
            modalImage.onerror = () => {
                modalImage.style.display = 'none';
                modalText.textContent = lang === 'he' ? "אופס! התמונה לקחה הפסקת קפה! ☕" : "Oops! Image took a coffee break! ☕";
            };
            
            // Update button text randomly
            ctaButton.textContent = translations[lang].buttonTexts[Math.floor(Math.random() * translations[lang].buttonTexts.length)];
        });

        // Close modal functionality
        const closeModal = () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                // Reset button text to initial state
                const lang = localStorage.getItem('language') || 'he';
                ctaButton.textContent = translations[lang].buttonTexts[0];
                isFirstClick = true;
            }, 300);
        };

        modalClose.addEventListener('click', closeModal);
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        // Set initial theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeToggle.textContent = '🌙';
        } else {
            document.body.classList.remove('light-theme');
            themeToggle.textContent = '☀️';
        }

        // Toggle theme on click
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLightTheme = document.body.classList.contains('light-theme');
            themeToggle.textContent = isLightTheme ? '🌙' : '☀️';
            localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
        });
    }

    // Color theme toggle
    const colorToggle = document.querySelector('.color-toggle');
    const themes = ['theme-purple', 'theme-blue', 'theme-green', 'theme-orange'];
    let currentThemeIndex = -1;

    // Pattern and Background buttons
    const bgPattern = document.getElementById('bgPattern');
    const bgColor = document.getElementById('bgColor');
    let currentPattern = 0;
    let currentBgColor = 0;

    const patterns = [
        'linear-gradient(135deg, var(--bg-color) 0%, #1e1e5f 100%)',
        'linear-gradient(135deg, var(--bg-color) 0%, #2d3436 100%)',
        'linear-gradient(135deg, var(--bg-color) 0%, #6c5ce7 100%)',
        'linear-gradient(135deg, var(--bg-color) 0%, #00b894 100%)',
        'linear-gradient(135deg, var(--bg-color) 0%, #ff6b6b 100%)',
        'linear-gradient(135deg, var(--bg-color) 0%, #feca57 100%)',
        'linear-gradient(135deg, var(--bg-color) 0%, #48dbfb 100%)',
        'linear-gradient(135deg, var(--bg-color) 0%, #7f00ff 100%)'
    ];

    const bgColors = [
        'rgba(10, 10, 35, 0.92)',    // Dark Blue-Grey
        'rgba(0, 0, 0, 0.92)',       // Pure Black
        'rgba(20, 20, 20, 0.92)',    // Dark Grey
        'rgba(40, 40, 40, 0.92)',    // Charcoal
        'rgba(15, 15, 40, 0.92)',    // Navy Blue-Grey
        'rgba(30, 30, 30, 0.92)',    // Darker Grey
        'rgba(12, 12, 30, 0.92)',    // Deep Blue-Grey
        'rgba(20, 20, 45, 0.92)'     // Midnight Blue-Grey
    ];

    if (bgPattern) {
        bgPattern.addEventListener('click', () => {
            currentPattern = (currentPattern + 1) % patterns.length;
            document.body.style.background = patterns[currentPattern];
        });
    }

    if (bgColor) {
        bgColor.addEventListener('click', () => {
            currentBgColor = (currentBgColor + 1) % bgColors.length;
            document.documentElement.style.setProperty('--header-bg', bgColors[currentBgColor]);
        });
    }

    if (colorToggle) {
        // Set initial theme from localStorage
        const savedColorTheme = localStorage.getItem('colorTheme');
        if (savedColorTheme) {
            document.body.classList.add(savedColorTheme);
            currentThemeIndex = themes.indexOf(savedColorTheme);
        }

        colorToggle.addEventListener('click', () => {
            // Remove current theme if any
            if (currentThemeIndex >= 0) {
                document.body.classList.remove(themes[currentThemeIndex]);
            }
            
            // Move to next theme
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            const newTheme = themes[currentThemeIndex];
            
            document.body.classList.add(newTheme);
            localStorage.setItem('colorTheme', newTheme);
            
            // Add a little animation to the button
            colorToggle.style.transform = 'scale(1.2)';
            setTimeout(() => {
                colorToggle.style.transform = 'scale(1)';
            }, 200);
        });
    }

    // Funny footer text rotation is handled in page-specific scripts

    // Initialize skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.setProperty('--level', level);
    });

    // Particle animation
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 30; // Reduced for performance

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.3 - 0.15;
                this.speedY = Math.random() * 0.3 - 0.15;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
                this.size = Math.random() * 2 + 1; // Twinkle effect
            }

            draw() {
                ctx.fillStyle = `rgba(${document.body.classList.contains('light-theme') ? '100, 100, 100' : '255, 255, 255'}, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    // Set default background color if no theme is selected
    if (!document.body.classList.contains('theme-purple') && 
        !document.body.classList.contains('theme-blue') && 
        !document.body.classList.contains('theme-green') && 
        !document.body.classList.contains('theme-orange')) {
        document.body.style.background = 'rgba(0, 0, 0, 0.92)';
    }
});