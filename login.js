// ==================== LOGIN SYSTEM ====================
const CORRECT_USERNAME = "bisdig";
const CORRECT_PASSWORD = "bisdig25";

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('formMessage');
    
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {

        sessionStorage.setItem("login","true");
        
        message.style.display = 'block';
        message.style.color = '#25D366';
        message.style.backgroundColor = 'rgba(37, 211, 102, 0.1)';
        message.innerHTML = '<i class="fas fa-check-circle"></i> Login berhasil! Redirecting...';
        
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1000);
        
    } else {

        message.style.display = 'block';
        message.style.color = '#ff6b6b';
        message.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
        
        if (username !== CORRECT_USERNAME && password !== CORRECT_PASSWORD) {
            message.innerHTML = '<i class="fas fa-exclamation-circle"></i> Username dan password salah!';
        } else if (username !== CORRECT_USERNAME) {
            message.innerHTML = '<i class="fas fa-exclamation-circle"></i> Username salah!';
        } else {
            message.innerHTML = '<i class="fas fa-exclamation-circle"></i> Password salah!';
        }
        
        setTimeout(function() {
            document.getElementById('password').value = '';
            message.style.display = 'none';
        }, 3000);
    }
});

// ==================== LOGOUT FUNCTION ====================
function logout() {
    sessionStorage.removeItem("login");
    window.location.href = "login.html";
}