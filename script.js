// ============================================
// SUSTAINIFY V19 - SCROLLABLE UI JAVASCRIPT
// ============================================

// Scroll to Dashboard
function scrollToDashboard() {
  document.getElementById('dashboard').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// Data
const habits = [
  { 
    id: 1, 
    name: 'Save Water', 
    description: 'Reduce unnecessary water usage', 
    completed: false,
    color: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))',
    btnColor: 'linear-gradient(to right, #3b82f6, #06b6d4)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>`
  },
  { 
    id: 2, 
    name: 'Reduce Plastic', 
    description: 'Avoid single-use plastic items', 
    completed: false,
    color: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))',
    btnColor: 'linear-gradient(to right, #a855f7, #ec4899)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
    </svg>`
  },
  { 
    id: 3, 
    name: 'Save Electricity', 
    description: 'Switch off unused appliances', 
    completed: false,
    color: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(251, 191, 36, 0.3))',
    btnColor: 'linear-gradient(to right, #f59e0b, #fbbf24)',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>`
  }
];

const history = [
  { date: 'Jan 24, 2026', completed: 2, total: 3, percentage: 67 },
  { date: 'Jan 23, 2026', completed: 3, total: 3, percentage: 100 },
  { date: 'Jan 22, 2026', completed: 1, total: 3, percentage: 33 },
  { date: 'Jan 21, 2026', completed: 2, total: 3, percentage: 67 },
  { date: 'Jan 20, 2026', completed: 3, total: 3, percentage: 100 }
];

const achievements = [
  { id: 1, name: 'First Step', description: 'Complete your first habit', unlocked: true },
  { id: 2, name: 'Week Warrior', description: 'Complete 7 days in a row', unlocked: true },
  { id: 3, name: 'Eco Champion', description: 'Complete 30 days in a row', unlocked: false },
  { id: 4, name: 'Water Saver', description: 'Complete water habit 50 times', unlocked: true },
  { id: 5, name: 'Plastic Free', description: 'Complete plastic habit 50 times', unlocked: false },
  { id: 6, name: 'Energy Master', description: 'Complete electricity habit 50 times', unlocked: false }
];

// Tab Switching
function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Toggle Habit
function toggleHabit(id) {
  const habit = habits.find(h => h.id === id);
  if (habit) {
    habit.completed = !habit.completed;
    renderHabits();
    updateProgress();
  }
}

// Add New Habit
function addHabit() {
  const name = prompt('Enter new eco habit:');
  if (name && name.trim()) {
    const colors = [
      { 
        color: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(20, 184, 166, 0.3))', 
        btnColor: 'linear-gradient(to right, #10b981, #14b8a6)' 
      },
      { 
        color: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))', 
        btnColor: 'linear-gradient(to right, #3b82f6, #06b6d4)' 
      },
      { 
        color: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3))', 
        btnColor: 'linear-gradient(to right, #a855f7, #ec4899)' 
      },
      { 
        color: 'linear-gradient(135deg, rgba(244, 63, 94, 0.3), rgba(251, 146, 60, 0.3))', 
        btnColor: 'linear-gradient(to right, #f43f5e, #fb923c)' 
      },
      { 
        color: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(192, 132, 252, 0.3))', 
        btnColor: 'linear-gradient(to right, #6366f1, #c084fc)' 
      }
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    habits.push({
      id: Date.now(),
      name: name.trim(),
      description: 'Custom eco-friendly habit',
      completed: false,
      color: randomColor.color,
      btnColor: randomColor.btnColor,
      icon: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28 L16 12" stroke-width="2" fill="none" stroke="currentColor"/>
        <path d="M16 16 C16 16, 12 14, 10 10 C8 6, 10 4, 12 4 C14 4, 16 8, 16 12" stroke-width="2" fill="none" stroke="currentColor"/>
        <path d="M16 16 C16 16, 20 14, 22 10 C24 6, 22 4, 20 4 C18 4, 16 8, 16 12" stroke-width="2" fill="none" stroke="currentColor"/>
        <ellipse cx="14" cy="11" rx="1.5" ry="2.5" fill="currentColor" stroke="none"/>
        <ellipse cx="18" cy="11" rx="1.5" ry="2.5" fill="currentColor" stroke="none"/>
        <path d="M12 28 L20 28" stroke-width="2" fill="none" stroke-linecap="round" stroke="currentColor"/>
      </svg>`
    });
    
    renderHabits();
    updateProgress();
  }
}

// Render Habits
function renderHabits() {
  const grid = document.getElementById('habitGrid');
  grid.innerHTML = '';

  habits.forEach(habit => {
    const card = document.createElement('div');
    card.className = 'habit-card';
    
    // Create glow element with gradient color
    const glowColor = habit.color.replace('0.3', '1');
    
    card.innerHTML = `
      <div class="habit-glow" style="background: ${glowColor}"></div>
      <div class="habit-header">
        <div class="habit-icon" style="background: ${habit.color}">
          ${habit.icon}
        </div>
        ${habit.completed ? `
          <div class="habit-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        ` : ''}
      </div>
      <h3>${habit.name}</h3>
      <p>${habit.description}</p>
      <button 
        class="habit-btn ${habit.completed ? 'completed' : ''}" 
        style="${!habit.completed ? `background: ${habit.btnColor}` : ''}"
        onclick="toggleHabit(${habit.id})"
      >
        ${habit.completed ? 'Completed ✓' : 'Mark Done'}
      </button>
    `;
    
    grid.appendChild(card);
  });

  // Add "Add New Habit" button
  const addCard = document.createElement('div');
  addCard.className = 'habit-card add-habit-card';
  addCard.innerHTML = `
    <div class="add-icon">+</div>
    <span style="font-weight:600">Add New Habit</span>
  `;
  addCard.onclick = addHabit;
  grid.appendChild(addCard);
}

// Update Progress
function updateProgress() {
  const completedCount = habits.filter(h => h.completed).length;
  const totalCount = habits.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  document.getElementById('score').textContent = percentage;
  document.getElementById('completed').textContent = completedCount;
  document.getElementById('total').textContent = totalCount;
  document.getElementById('progressBar').style.width = `${percentage}%`;
}

// Render History
function renderHistory() {
  const grid = document.getElementById('historyGrid');
  grid.innerHTML = '';

  history.forEach(day => {
    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
      <div class="fact-glow fact-glow-purple"></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;position:relative">
        <div style="display:flex;align-items:center;gap:0.75rem">
          <div style="width:40px;height:40px;border-radius:0.75rem;background:linear-gradient(135deg,rgba(168,85,247,0.3),rgba(236,72,153,0.3));backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.2)">
            <svg viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="2" style="width:20px;height:20px">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>
          <h3 style="font-size:1.125rem;position:relative">${day.date}</h3>
        </div>
        <span style="color:rgba(255,255,255,0.7);font-weight:500">${day.completed}/${day.total} habits</span>
      </div>
      <div style="position:relative;width:100%;height:16px;background:rgba(0,0,0,0.2);backdrop-filter:blur(10px);border-radius:9999px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);margin-bottom:0.5rem">
        <div style="height:100%;background:linear-gradient(to right,#a855f7,#ec4899,#a855f7);border-radius:9999px;width:${day.percentage}%;transition:width 0.5s ease;box-shadow:0 0 20px rgba(168,85,247,0.5)"></div>
      </div>
      <div style="text-align:right;color:#c084fc;font-weight:600;font-size:0.875rem;position:relative">${day.percentage}% Complete</div>
    `;
    grid.appendChild(card);
  });
}

// Render Achievements
function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  grid.innerHTML = '';

  achievements.forEach(achievement => {
    const card = document.createElement('div');
    card.className = 'achievement-card';
    card.style.opacity = achievement.unlocked ? '1' : '0.6';
    card.style.borderColor = achievement.unlocked ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.2)';
    
    card.innerHTML = `
      ${achievement.unlocked ? '<div class="fact-glow fact-glow-amber"></div>' : ''}
      <div class="glass-reflection"></div>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;position:relative">
        <div style="width:64px;height:64px;border-radius:1rem;background:${achievement.unlocked ? 'linear-gradient(135deg,rgba(245,158,11,0.3),rgba(251,191,36,0.3))' : 'rgba(255,255,255,0.05)'};backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:center;border:1px solid ${achievement.unlocked ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.1)'};box-shadow:0 8px 24px rgba(0,0,0,0.2)">
          <svg viewBox="0 0 24 24" fill="none" stroke="${achievement.unlocked ? '#fcd34d' : 'rgba(255,255,255,0.3)'}" stroke-width="2" style="width:32px;height:32px">
            ${achievement.unlocked 
              ? '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>' 
              : '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
            }
          </svg>
        </div>
        ${achievement.unlocked ? `
          <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#10b981,#14b8a6);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(16,185,129,0.4)">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" style="width:20px;height:20px">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        ` : ''}
      </div>
      <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem;position:relative;color:${achievement.unlocked ? 'white' : 'rgba(255,255,255,0.5)'}">${achievement.name}</h3>
      <p style="font-size:0.875rem;margin-bottom:1rem;position:relative;color:${achievement.unlocked ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)'}">${achievement.description}</p>
      ${achievement.unlocked ? '<div style="margin-top:1rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.1);position:relative"><span style="color:#fcd34d;font-size:0.875rem;font-weight:600">Unlocked ✓</span></div>' : ''}
    `;
    
    grid.appendChild(card);
  });
}

// Duplicate facts for infinite scroll
function duplicateFacts() {
  const factsTrack = document.getElementById('factsTrack');
  const factCards = factsTrack.querySelectorAll('.fact-card');
  
  factCards.forEach(card => {
    const clone = card.cloneNode(true);
    factsTrack.appendChild(clone);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderHabits();
  renderHistory();
  renderAchievements();
  updateProgress();
  duplicateFacts();
});
