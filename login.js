// login.js - Complete Login/Signup Toggle and Form Handling

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#auth-form');
  const cardTitle = document.querySelector('#card-title');
  const cardSubtitle = document.querySelector('#card-subtitle');
  const submitBtn = document.querySelector('#submit-btn');
  const toggleLink = document.querySelector('#toggle-link');
  const toggleText = document.querySelector('#toggle-text');
  const loginCard = document.querySelector('.login-card');
  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  const googleBtn = document.querySelector('.google-btn');
  
  let isSignupMode = false;

  // Toggle between login and signup
  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMode();
  });

  function toggleMode() {
    isSignupMode = !isSignupMode;
    loginCard.classList.add('mode-switching');
    
    setTimeout(() => {
      loginCard.classList.remove('mode-switching');
    }, 400);

    if (isSignupMode) {
      // Switch to Signup mode
      cardTitle.textContent = 'Create Account';
      cardSubtitle.textContent = 'Join us and start making a difference 🌱';
      submitBtn.textContent = 'Sign Up';
      toggleText.textContent = 'Already have an account?';
      toggleLink.textContent = 'Login';
      
      // Add name field if it doesn't exist
      if (!loginForm.querySelector('input[type="text"]')) {
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.placeholder = 'Full name';
        nameInput.required = true;
        nameInput.classList.add('slide-in');
        loginForm.insertBefore(nameInput, emailInput);
      }
    } else {
      // Switch to Login mode
      cardTitle.textContent = 'Welcome Back';
      cardSubtitle.textContent = 'Track your eco habits and make an impact 🌍';
      submitBtn.textContent = 'Login';
      toggleText.textContent = "Don't have an account?";
      toggleLink.textContent = 'Sign up';
      
      // Remove name field
      const nameInput = loginForm.querySelector('input[type="text"]');
      if (nameInput) {
        nameInput.classList.add('slide-out');
        setTimeout(() => {
          nameInput.remove();
        }, 300);
      }
    }
  }

  // Form submission handler
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const nameInput = loginForm.querySelector('input[type="text"]');
    const name = nameInput ? nameInput.value.trim() : '';

    // Basic validation
    if (isSignupMode && !name) {
      showNotification('Please enter your name', 'error');
      return;
    }

    if (!email || !password) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }

    if (isSignupMode && password.length < 6) {
      showNotification('Password must be at least 6 characters', 'error');
      return;
    }

    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = isSignupMode ? 'Signing up...' : 'Logging in...';
    submitBtn.disabled = true;

    try {
      if (isSignupMode) {
        await simulateSignup(name, email, password);
        showNotification('Account created! Redirecting...', 'success');
      } else {
        await simulateLogin(email, password);
        showNotification('Login successful! Redirecting...', 'success');
      }
      
      // Redirect to index.html after successful login/signup
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
      
    } catch (error) {
      showNotification(error.message || (isSignupMode ? 'Signup failed. Please try again.' : 'Login failed. Please try again.'), 'error');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });

  // Google login handler
  googleBtn.addEventListener('click', async () => {
    const originalText = googleBtn.textContent;
    googleBtn.textContent = 'Connecting...';
    googleBtn.disabled = true;

    try {
      await simulateGoogleLogin();
      showNotification('Google login successful! Redirecting...', 'success');
      
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
      
    } catch (error) {
      showNotification('Google login failed. Please try again.', 'error');
      googleBtn.textContent = originalText;
      googleBtn.disabled = false;
    }
  });

  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Simulate login API call
  function simulateLogin(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password.length >= 6) {
          resolve({ user: { email } });
        } else {
          reject(new Error('Password must be at least 6 characters'));
        }
      }, 1500);
    });
  }

  // Simulate signup API call
  function simulateSignup(name, email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password.length >= 6) {
          resolve({ user: { name, email } });
        } else {
          reject(new Error('Password must be at least 6 characters'));
        }
      }, 1500);
    });
  }

  // Simulate Google login
  function simulateGoogleLogin() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ user: { email: 'user@gmail.com' } });
      }, 1500);
    });
  }

  // Notification system
  function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Styles
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '15px 25px',
      borderRadius: '12px',
      background: type === 'success' 
        ? 'rgba(74, 222, 128, 0.9)' 
        : type === 'error'
        ? 'rgba(248, 113, 113, 0.9)'
        : 'rgba(96, 165, 250, 0.9)',
      color: 'white',
      fontWeight: '500',
      fontSize: '0.9rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      zIndex: '1000',
      animation: 'slideIn 0.3s ease',
      transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Add CSS animation
  if (!document.querySelector('#notificationStyles')) {
    const style = document.createElement('style');
    style.id = 'notificationStyles';
    style.textContent = `
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(100%);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `;
    document.head.appendChild(style);
  }
});