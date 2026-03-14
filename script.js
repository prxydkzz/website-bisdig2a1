// ==================== PAGINATION ====================
let currentPage = 1;
const totalPages = 4;


function changePage(direction) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    
    if (!prevBtn || !nextBtn || !pageIndicator) {
        console.error('Pagination elements not found!');
        return;
    }
    
    const currentPageElement = document.getElementById(`page${currentPage}`);
    if (currentPageElement) {
        currentPageElement.style.display = 'none';
    }
    
    currentPage += direction;
    
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    
    const newPageElement = document.getElementById(`page${currentPage}`);
    if (newPageElement) {
        newPageElement.style.display = 'grid';
    }
    
    if (pageIndicator) {
        pageIndicator.textContent = `Halaman ${currentPage} dari ${totalPages}`;
    }
    
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
}

// ==================== SMOOTH SCROLL ====================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            if (href === '#' || !href) return; 
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==================== ANIMASI SCROLL ====================
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 1s ease';
        observer.observe(el);
    });
});

// ==================== INISIALISASI PAGINATION ====================
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = true;
    }
    if (nextBtn) {
        nextBtn.disabled = false;
    }
});

// ==================== LIGHTBOX GALLERY ====================
let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach((img, index) => {
    img.addEventListener('click', function() {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImg.src = galleryImages[index].src;
    lightboxCaption.textContent = galleryImages[index].alt;
    
    lightbox.style.display = 'flex';
    
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxCaption.textContent = galleryImages[currentImageIndex].alt;
}

const lightbox = document.getElementById('lightbox');
if (lightbox) {
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ==================== PENGUMUMAN ====================
const pengumumanData = {
    1: {
        title: "Libur Hari Raya Idulfitri",
        date: "16 Maret 2026",
        tag: "LIBUR",
        content: "Libur Hari Raya Idulfitri pada tanggal 16 Maret 2026"
    },
    2: {
        title: "Aktif Perkuliahan",
        date: "30 Maret 2026",
        tag: "AKADEMIK",
        content: "Perkuliahan efektif masuk kembali sesuai jadwal pada tanggal 30 Maret 2026"
    },
};

function openPengumuman(id) {
    const pengumuman = pengumumanData[id];
    if (!pengumuman) return;
    
    const modal = document.getElementById('pengumumanModal');
    const modalBody = document.getElementById('pengumumanModalBody');
    
    modalBody.innerHTML = `
        <span class="pengumuman-tag">${pengumuman.tag}</span>
        <h3>${pengumuman.title}</h3>
        <p class="pengumuman-date"><i class="fas fa-calendar-alt"></i> ${pengumuman.date}</p>
        <p>${pengumuman.content}</p>
    `;
    
    modal.classList.add('show');
}

function closePengumumanModal() {
    const modal = document.getElementById('pengumumanModal');
    modal.classList.remove('show');
}

const pengumumanModal = document.getElementById('pengumumanModal');
if (pengumumanModal) {
    pengumumanModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closePengumumanModal();
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePengumumanModal();
    }
});

// ==================== BURGER MENU MOBILE ====================
document.addEventListener("DOMContentLoaded", function(){

const burger = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

/* buka menu */
burger.addEventListener("click", function(e){
e.stopPropagation();
navMenu.classList.toggle("active");
});

/* klik menu -> popup hilang */
document.querySelectorAll("#navMenu a").forEach(link=>{
link.addEventListener("click", function(){
navMenu.classList.remove("active");
});
});

/* klik area lain -> popup hilang */
document.addEventListener("click", function(e){
if(!navMenu.contains(e.target) && !burger.contains(e.target)){
navMenu.classList.remove("active");
}
});

});

//======= IZIN MATKUL =======
function toggleIzinForm(){
const form = document.getElementById("izinForm");

if(form.style.display === "block"){
form.style.display = "none";
}else{
form.style.display = "block";
}
}

function kirimIzin(){

const pilihan = document.getElementById("matkulSelect").value;

const pesan = "Assalamu'alaikum Wr. Wb.\n\nAku izin tidak mengikuti perkuliahan hari ini\n\nNama Lengkap:\nNIM:\nHari & Tanggal:\nMata Kuliah:\nAlasan:\n\nTerima kasih";

let nomor = "";

if(pilihan === "sekretaris"){
nomor = "628133181398";
}

else if(pilihan === "ilmu"){
nomor = "6285815109392";
}

else if(pilihan === "keuangan"){
nomor = "6288989135688";
}

else if(pilihan === "pd"){
nomor = "6285704621189";
}

else if(pilihan === "design"){
nomor = "6281230163597";
}

else if(pilihan === "ai"){
nomor = "6285100924303";
}

else if(pilihan === "statistik"){
nomor = "6285235952163";
}

else if(pilihan === "ibadah"){
nomor = "6285704694544";
}

if(nomor !== ""){
window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`);
}

}