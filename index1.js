document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('login-form');
    const signoutBtn = document.getElementById('signout-btn');
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const userDisplay = document.getElementById('user-display');
    const errorMsg = document.getElementById('error-msg');

   
    const switchView = (hideElement, showElement) => {
        hideElement.classList.remove('active');
       
        setTimeout(() => {
            showElement.classList.add('active');
        }, 50); 
    };

    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;

       
        if (email && password) {
            errorMsg.classList.remove('show');
            
            const name = email.split('@')[0];
           
            userDisplay.textContent = name.charAt(0).toUpperCase() + name.slice(1);
            
            
            loginForm.reset();
            
            
            switchView(loginView, dashboardView);
        } else {
            errorMsg.classList.add('show');
        }
    });

   
    signoutBtn.addEventListener('click', () => {
        
        switchView(dashboardView, loginView);
    });
});