// script.js

// 1. Smooth Scrolling untuk navigasi ke section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Efek Navbar: Ganti warna/background saat di-scroll
// Ini memberikan nuansa yang lebih profesional dan membantu keterbacaan
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        // Ganti warna saat scroll turun lebih dari 50px
        header.style.backgroundColor = '#000000'; // Hitam pekat
        header.style.boxShadow = '0 2px 5px rgba(255, 255, 255, 0.1)';
    } else {
        // Kembali ke warna semi-transparan awal
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// 3. Efek Animasi Sederhana Saat Scroll (Optional, untuk nilai seni/tampilan)
// Anda bisa menggunakan Intersection Observer untuk memunculkan elemen (misal: skill, pengalaman) secara halus saat masuk ke viewport.
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } 
        // Anda bisa tambahkan else untuk menghilang saat keluar dari viewport
    });
}, {
    threshold: 0.1 // Berapa persen elemen terlihat sebelum di-trigger
});

// Tambahkan class 'fade-in' di HTML/CSS dan amati elemen-elemen ini
document.querySelectorAll('.skill-item, .experience-item, .about-text').forEach(el => {
    observer.observe(el);
    el.classList.add('fade-in-element'); // Tambahkan class ini di HTML/CSS
});

/* Tambahkan styling di CSS Anda:
.fade-in-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-element.visible {
    opacity: 1;
    transform: translateY(0);
}
*/