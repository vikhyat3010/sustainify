// ============================================
// COMMUNITY SECTION JAVASCRIPT
// ============================================

// Sample Data
let projects = [
  {
    id: 1,
    name: 'Beach Cleanup Drive',
    description: 'Join us for a morning beach cleanup at Calangute! We\'ll provide all supplies and refreshments.',
    location: 'goa',
    locationName: 'Goa',
    date: '2026-02-15',
    category: 'cleanup',
    participants: 45,
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    name: 'Community Tree Planting',
    description: 'Help us plant 1000 trees in Cubbon Park. All ages welcome!',
    location: 'karnataka',
    locationName: 'Karnataka',
    date: '2026-02-20',
    category: 'planting',
    participants: 78,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    name: 'Recycling Awareness Workshop',
    description: 'Learn about proper recycling techniques and waste reduction strategies in Mumbai.',
    location: 'maharashtra',
    locationName: 'Maharashtra',
    date: '2026-02-18',
    category: 'awareness',
    participants: 32,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    name: 'Yamuna River Cleanup',
    description: 'Clean up the riverside and protect aquatic life. Equipment provided.',
    location: 'delhi',
    locationName: 'Delhi',
    date: '2026-02-22',
    category: 'cleanup',
    participants: 56,
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    name: 'Spice Garden Project',
    description: 'Transform unused urban space into a thriving community spice garden.',
    location: 'kerala',
    locationName: 'Kerala',
    date: '2026-02-25',
    category: 'planting',
    participants: 41,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    name: 'Zero Waste Chennai',
    description: 'Monthly meetup to share tips and track our zero waste journey together.',
    location: 'tamil-nadu',
    locationName: 'Tamil Nadu',
    date: '2026-02-28',
    category: 'awareness',
    participants: 29,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop'
  },
  {
    id: 7,
    name: 'Solar Village Initiative',
    description: 'Learn how to install and maintain solar panels for rural homes.',
    location: 'gujarat',
    locationName: 'Gujarat',
    date: '2026-03-05',
    category: 'awareness',
    participants: 38,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop'
  },
  {
    id: 8,
    name: 'Wetland Restoration',
    description: 'Help restore our local wetlands by removing invasive species.',
    location: 'west-bengal',
    locationName: 'West Bengal',
    date: '2026-03-08',
    category: 'planting',
    participants: 67,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop'
  }
];

let channels = [
  { id: 1, name: 'General Discussion', icon: '💬', members: 1234, active: true },
  { id: 2, name: 'Project Updates', icon: '📢', members: 892, active: false },
  { id: 3, name: 'Tips & Tricks', icon: '💡', members: 756, active: false },
  { id: 4, name: 'Success Stories', icon: '🌟', members: 645, active: false },
  { id: 5, name: 'Questions & Help', icon: '❓', members: 534, active: false }
];

let messages = [
  {
    id: 1,
    author: 'Sarah Green',
    avatar: 'SG',
    text: 'Just completed my first beach cleanup! Collected over 50kg of plastic waste 🌊',
    time: '10:30 AM',
    channelId: 1
  },
  {
    id: 2,
    author: 'Mike Johnson',
    avatar: 'MJ',
    text: 'That\'s amazing Sarah! Which beach was it?',
    time: '10:32 AM',
    channelId: 1
  },
  {
    id: 3,
    author: 'Sarah Green',
    avatar: 'SG',
    text: 'Brighton Beach! The team was incredible, we had about 30 volunteers',
    time: '10:35 AM',
    channelId: 1
  },
  {
    id: 4,
    author: 'Emma Wilson',
    avatar: 'EW',
    time: '10:40 AM',
    channelId: 1
  },
  // Tips & Tricks (Channel 3)
  {
    id: 5,
    author: 'Priya Sharma',
    avatar: 'PS',
    text: 'Tip: Use rice water for watering plants instead of throwing it away! It\'s rich in nutrients 🌱',
    time: '09:00 AM',
    channelId: 3
  },
  {
    id: 6,
    author: 'Rahul Verma',
    avatar: 'RV',
    text: 'Great tip! I also use banana peels as fertilizer for my roses. Works wonders!',
    time: '09:15 AM',
    channelId: 3
  },
  {
    id: 7,
    author: 'Anjali Gupta',
    avatar: 'AG',
    text: 'Did you know switching to LED bulbs can save up to 80% on lighting energy bills?',
    time: '10:00 AM',
    channelId: 3
  },
  {
    id: 8,
    author: 'Vikram Singh',
    avatar: 'VS',
    text: 'Carry a reusable water bottle everywhere. It saves money and reduces plastic waste significantly.',
    time: '10:45 AM',
    channelId: 3
  },
  // Success Stories (Channel 4)
  {
    id: 9,
    author: 'Clean City Group',
    avatar: 'CC',
    text: 'Success Story: Our neighborhood in Pune just hit 500kg of recycled plastic this month! 🎉',
    time: '11:00 AM',
    channelId: 4
  },
  {
    id: 10,
    author: 'Arjun Nair',
    avatar: 'AN',
    text: 'Amazing! We planted 50 saplings in the local park in Kochi last weekend and all are healthy.',
    time: '11:30 AM',
    channelId: 4
  },
  {
    id: 11,
    author: 'Sneha Patel',
    avatar: 'SP',
    text: 'Just completed 100 days of biking to work in Ahmedabad instead of driving. Saved fuel and feel fitter! 🚲',
    time: '12:00 PM',
    channelId: 4
  },
  {
    id: 12,
    author: 'Ravi Kumar',
    avatar: 'RK',
    text: 'Our apartment complex in Hyderabad implemented rainwater harvesting and we are now water self-sufficient!',
    time: '12:30 PM',
    channelId: 4
  },
  // Project Updates (Channel 2)
  {
    id: 13,
    author: 'System',
    avatar: '📢',
    text: 'New Project Alert: Yamuna River Cleanup drive scheduled for Feb 22nd. Volunteers needed!',
    time: '08:00 AM',
    channelId: 2
  },
  {
    id: 14,
    author: 'Project Lead',
    avatar: 'PL',
    text: 'Beach Cleanup in Goa was a massive success! Check the gallery for new photos.',
    time: '09:30 AM',
    channelId: 2
  },
  {
    id: 15,
    author: 'Coordinator',
    avatar: 'CO',
    text: 'Reminder: The Tree Planting event in Bangalore starts at 7 AM this Sunday.',
    time: '10:00 AM',
    channelId: 2
  },
  // Questions & Help (Channel 5)
  {
    id: 16,
    author: 'New Member',
    avatar: 'NM',
    text: 'Hi everyone! How do I start composting at home? Any beginner guides?',
    time: '02:00 PM',
    channelId: 5
  },
  {
    id: 17,
    author: 'Compost Pro',
    avatar: 'CP',
    text: 'Welcome! Start with a simple bin and mix greens (wet waste) and browns (dry leaves/paper). Checking the Tips channel helped me a lot!',
    time: '02:15 PM',
    channelId: 5
  },
  {
    id: 18,
    author: 'Eco Learner',
    avatar: 'EL',
    text: 'Where can I drop off e-waste in Delhi? I have some old batteries and cables.',
    time: '03:00 PM',
    channelId: 5
  },
  {
    id: 19,
    author: 'Admin',
    avatar: 'AD',
    text: 'Check the "Resources" tab on the main dashboard, we have a map of certified e-waste recyclers there.',
    time: '03:10 PM',
    channelId: 5
  }
];

let galleryPhotos = [
  {
    id: 1,
    title: 'Beach Cleanup Success',
    description: 'Our team collected over 200kg of plastic waste from the coastline',
    author: 'Sarah Green',
    date: 'Feb 5, 2026',
    url: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=800&fit=crop'
  },
  {
    id: 2,
    title: 'Tree Planting Day',
    description: 'Planted 150 saplings in the community park with local volunteers',
    author: 'Mike Johnson',
    date: 'Feb 3, 2026',
    url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=800&fit=crop'
  },
  {
    id: 3,
    title: 'Recycling Workshop',
    description: 'Teaching kids about proper waste segregation and composting',
    author: 'Emma Wilson',
    date: 'Feb 1, 2026',
    url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=800&fit=crop'
  },
  {
    id: 4,
    title: 'Community Garden Harvest',
    description: 'First harvest from our urban garden - fresh organic vegetables!',
    author: 'David Lee',
    date: 'Jan 30, 2026',
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=800&fit=crop'
  },
  {
    id: 5,
    title: 'Solar Panel Installation',
    description: 'Successfully installed 20 solar panels on the community center',
    author: 'Lisa Chen',
    date: 'Jan 28, 2026',
    url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=800&fit=crop'
  },
  {
    id: 6,
    title: 'River Cleanup Team',
    description: 'Amazing turnout for our river cleanup initiative this weekend',
    author: 'Tom Brown',
    date: 'Jan 25, 2026',
    url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=800&fit=crop'
  },
  {
    id: 7,
    title: 'Composting Workshop',
    description: 'Learning how to turn food waste into nutrient-rich compost',
    author: 'Anna Martinez',
    date: 'Jan 22, 2026',
    url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=800&fit=crop'
  },
  {
    id: 8,
    title: 'Bike to Work Day',
    description: 'Over 200 participants joined our sustainable commute initiative',
    author: 'James Wilson',
    date: 'Jan 20, 2026',
    url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=800&fit=crop'
  },
  {
    id: 9,
    title: 'Wildlife Conservation',
    description: 'Built bird houses and pollinator gardens for local wildlife',
    author: 'Rachel Kim',
    date: 'Jan 18, 2026',
    url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop'
  }
];

let currentChannel = 1;

// ============================================
// TAB SWITCHING
// ============================================

function switchCommunityTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.community-tab').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

  // Update tab content
  document.querySelectorAll('.community-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(`${tabName}-tab`).classList.add('active');
}

// ============================================
// PROJECTS
// ============================================

function renderProjects(filteredProjects = projects) {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  if (filteredProjects.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: rgba(255,255,255,0.6);">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 48px; height: 48px; margin: 0 auto 1rem; opacity: 0.5;">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p style="font-size: 1.125rem;">No projects found in this location</p>
        <p style="font-size: 0.875rem; margin-top: 0.5rem;">Try selecting a different location or create a new project!</p>
      </div>
    `;
    return;
  }

  filteredProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}" class="project-image">
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">${project.name}</h3>
          <span class="project-category">${getCategoryLabel(project.category)}</span>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-meta">
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            ${project.locationName}
          </div>
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${formatDate(project.date)}
          </div>
        </div>
        <div class="project-stats">
          <div class="stat-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            ${project.participants} joined
          </div>
        </div>
        <button class="join-btn" onclick="joinProject(${project.id})">Join Project</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterProjects() {
  const location = document.getElementById('location-select').value;
  if (location === 'all') {
    renderProjects(projects);
  } else {
    const filtered = projects.filter(p => p.location === location);
    renderProjects(filtered);
  }
}



function joinProject(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (project) {
    project.participants++;
    showNotification(`🎉 Successfully joined "${project.name}"!`, 'success');
    renderProjects(projects.filter(p => document.getElementById('location-select').value === 'all' || p.location === document.getElementById('location-select').value));
  }
}

function getCategoryLabel(category) {
  const labels = {
    cleanup: 'Cleanup',
    planting: 'Planting',
    recycling: 'Recycling',
    awareness: 'Awareness',
    other: 'Other'
  };
  return labels[category] || category;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ============================================
// CREATE PROJECT MODAL
// ============================================

function openCreateProjectModal() {
  document.getElementById('createProjectModal').classList.add('active');
}

function closeCreateProjectModal() {
  document.getElementById('createProjectModal').classList.remove('active');
  document.getElementById('createProjectForm').reset();
}

function createProject(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const newProject = {
    id: projects.length + 1,
    name: formData.get('projectName'),
    description: formData.get('description'),
    location: formData.get('location'),
    locationName: document.querySelector(`option[value="${formData.get('location')}"]`).textContent,
    date: formData.get('date'),
    category: formData.get('category'),
    participants: 1,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop' // Default image
  };

  projects.unshift(newProject);
  renderProjects(projects);
  closeCreateProjectModal();
  showNotification('✅ Project created successfully!', 'success');
}

// ============================================
// CHAT
// ============================================

function renderChannels() {
  const list = document.getElementById('channelsList');
  list.innerHTML = '';

  channels.forEach(channel => {
    const item = document.createElement('div');
    item.className = `channel-item ${channel.active ? 'active' : ''}`;
    item.innerHTML = `
      <span class="channel-icon">${channel.icon}</span>
      <span>${channel.name}</span>
    `;
    item.onclick = () => switchChannel(channel.id);
    list.appendChild(item);
  });
}

function switchChannel(channelId) {
  currentChannel = channelId;
  channels.forEach(c => c.active = c.id === channelId);

  const channel = channels.find(c => c.id === channelId);
  document.getElementById('currentChannelName').textContent = channel.name;
  document.getElementById('channelMembers').textContent = `${channel.members.toLocaleString()} members`;

  renderChannels();
  renderMessages();
}

function renderMessages() {
  const container = document.getElementById('chatMessages');
  const channelMessages = messages.filter(m => m.channelId === currentChannel);

  container.innerHTML = '';

  channelMessages.forEach(message => {
    const div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = `
      <div class="message-avatar">${message.avatar}</div>
      <div class="message-content">
        <div class="message-header">
          <span class="message-author">${message.author}</span>
          <span class="message-time">${message.time}</span>
        </div>
        <div class="message-text">${message.text}</div>
      </div>
    `;
    container.appendChild(div);
  });

  // Scroll to bottom
  container.scrollTop = container.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();

  if (!text) return;

  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const newMessage = {
    id: messages.length + 1,
    author: 'You',
    avatar: 'YO',
    text: text,
    time: time,
    channelId: currentChannel
  };

  messages.push(newMessage);
  renderMessages();
  input.value = '';
}

function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function addChannel() {
  const name = prompt('Enter channel name:');
  if (name && name.trim()) {
    const newChannel = {
      id: channels.length + 1,
      name: name.trim(),
      icon: '📌',
      members: 1,
      active: false
    };
    channels.push(newChannel);
    renderChannels();
    showNotification(`✅ Channel "${name}" created!`, 'success');
  }
}

// ============================================
// GALLERY
// ============================================

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';

  galleryPhotos.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="${photo.url}" alt="${photo.title}">
      <div class="gallery-overlay">
        <div class="gallery-title">${photo.title}</div>
        <div class="gallery-author">by ${photo.author}</div>
      </div>
    `;
    item.onclick = () => openPhotoModal(photo);
    grid.appendChild(item);
  });
}

function handlePhotoUpload(event) {
  const files = event.target.files;
  if (!files.length) return;

  showNotification(`📤 Uploading ${files.length} photo(s)...`, 'info');

  // Simulate upload
  setTimeout(() => {
    Array.from(files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhoto = {
          id: galleryPhotos.length + 1,
          title: file.name.replace(/\.[^/.]+$/, ''),
          description: 'Uploaded from my eco project',
          author: 'You',
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          url: e.target.result
        };
        galleryPhotos.unshift(newPhoto);

        if (index === files.length - 1) {
          renderGallery();
          showNotification('✅ Photos uploaded successfully!', 'success');
        }
      };
      reader.readAsDataURL(file);
    });
  }, 1000);
}

function openPhotoModal(photo) {
  const modal = document.getElementById('photoModal');
  document.getElementById('modalPhoto').src = photo.url;
  document.getElementById('photoTitle').textContent = photo.title;
  document.getElementById('photoDescription').textContent = photo.description;
  document.getElementById('photoAuthor').textContent = `By ${photo.author}`;
  document.getElementById('photoDate').textContent = photo.date;
  modal.classList.add('active');
}

function closePhotoModal() {
  document.getElementById('photoModal').classList.remove('active');
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;

  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '15px 25px',
    borderRadius: '12px',
    background: type === 'success'
      ? 'rgba(16, 185, 129, 0.9)'
      : type === 'error'
        ? 'rgba(248, 113, 113, 0.9)'
        : 'rgba(59, 130, 246, 0.9)',
    color: 'white',
    fontWeight: '600',
    fontSize: '0.9rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    zIndex: '10000',
    animation: 'slideIn 0.3s ease',
    transition: 'all 0.3s ease'
  });

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderChannels();
  renderMessages();
  renderGallery();

  // Close modals on outside click
  document.getElementById('createProjectModal').addEventListener('click', (e) => {
    if (e.target.id === 'createProjectModal') {
      closeCreateProjectModal();
    }
  });

  document.getElementById('photoModal').addEventListener('click', (e) => {
    if (e.target.id === 'photoModal') {
      closePhotoModal();
    }
  });
});