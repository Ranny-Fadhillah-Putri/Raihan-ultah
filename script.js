document.addEventListener("DOMContentLoaded", function () {
    const celebrateBtn = document.getElementById('celebrateBtn');
    const backBtn = document.getElementById('backBtn');
    const balloon4 = document.getElementById('balloon4');
    const specialMessage = document.getElementById('specialMessage');

    if (celebrateBtn) {
        celebrateBtn.addEventListener('click', () => {
            window.location.href = 'gallery.html';
        });
    }

    if (balloon4) {
        balloon4.addEventListener('click', () => {
            specialMessage.style.display = 'block';
            setTimeout(() => {
                specialMessage.style.display = 'none';
            }, 3000);
        });
    }

    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon) => {
        const randomDuration = Math.random() * 5 + 5;
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 + 50;
        balloon.style.animation = `fly ${randomDuration}s linear infinite`;
        balloon.style.transform = `translateY(${randomY}vh) translateX(${randomX}vw)`;
    });
});

// Membuka modal dan menampilkan gambar ukuran asli
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    
    modal.style.display = "flex";
    modalImg.src = img.src;
}

// Menutup modal saat diklik
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}


