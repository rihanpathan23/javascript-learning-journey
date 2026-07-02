import './style.css'

document.querySelector('#app').innerHTML = `
<nav class="sticky top-0 z-50 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
  <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
    
    <a href="#" class="text-xl font-bold text-white flex items-center gap-2">
      <span class="text-indigo-400 text-2xl">⭐</span> Star Store
    </a>

    <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
      <li><a href="#" class="hover:text-indigo-400 transition-colors duration-200">Home</a></li>
      <li><a href="#" class="hover:text-indigo-400 transition-colors duration-200">Categories</a></li>
      <li><a href="#" class="hover:text-indigo-400 transition-colors duration-200">Products</a></li>
      <li><a href="#" class="hover:text-indigo-400 transition-colors duration-200">Offers</a></li>
      <li><a href="#" class="hover:text-indigo-400 transition-colors duration-200">Contact</a></li>
    </ul>

    <div class="flex items-center gap-4">
      <button class="p-2 text-gray-300 hover:text-white transition-colors duration-200" aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      
      <button class="relative p-2 text-gray-300 hover:text-white transition-colors duration-200" aria-label="Cart">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
      </button>

      <button class="md:hidden p-2 text-gray-300 hover:text-white" id="mobile-menu-btn" aria-label="Toggle Menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <div id="mobile-menu" class="hidden absolute top-20 left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl md:hidden flex-col items-center py-6 space-y-6">
      <a href="#" class="text-white hover:text-indigo-400 font-medium">Home</a>
      <a href="#" class="text-white hover:text-indigo-400 font-medium">Categories</a>
      <a href="#" class="text-white hover:text-indigo-400 font-medium">Products</a>
      <a href="#" class="text-white hover:text-indigo-400 font-medium">Offers</a>
      <a href="#" class="text-white hover:text-indigo-400 font-medium">Contact</a>
    </div>
  </div>
</nav>

<section class="reveal-section bg-gray-950 text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 opacity-0 transform translate-y-10 transition-all duration-1000">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <div class="flex flex-col space-y-6">
      <span class="inline-block w-fit px-4 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-sm font-medium tracking-wide">
        ⭐ Premium Tech Store
      </span>
      
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
        Upgrade Your Tech Lifestyle at <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Star Store</span>
      </h1>
      
      <p class="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
        Discover a curated collection of cutting-edge gadgets and premium hardware designed to elevate your daily digital experience.
      </p>
      
      <div class="flex flex-wrap gap-4 pt-4">
        <button class="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/20">
          Shop Now
        </button>
        <button class="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 border border-gray-700">
          Explore Products
        </button>
      </div>
    </div>

    <div class="relative flex justify-center items-center">
      <div class="absolute w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl opacity-50"></div>
      
      <div class="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-gray-800 cursor-pointer">
         <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop" alt="Premium Smartwatch" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
         
         <div class="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-left">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <span class="text-yellow-400 text-sm font-bold mb-1 block">BEST SELLER</span>
               <h3 class="text-2xl font-bold text-white">Apple Watch Ultra</h3>
               <p class="text-gray-300 mb-4 text-sm max-w-xs">Experience the ultimate adventure companion with aerospace-grade titanium.</p>
               <button class="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                  View Details
               </button>
            </div>
         </div>
      </div>
    </div>
  </div>
</section>

<section class="reveal-section bg-gray-950 py-20 px-6 md:px-12 lg:px-24 opacity-0 transform translate-y-10 transition-all duration-1000">
  <div class="max-w-7xl mx-auto">
    <div class="mb-16 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Shop by Categories</h2>
      <p class="text-gray-400 text-lg">Explore our premium collection of technology products.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a href="#" class="group relative p-8 bg-gray-900 border border-gray-800 rounded-2xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] hover:-translate-y-2">
        <div class="text-5xl mb-6 transform group-hover:scale-110 transition-transform">📱</div>
        <h3 class="text-xl font-bold text-white mb-2">Smartphones</h3>
        <p class="text-gray-400 text-sm">Experience the latest flagship mobile technology.</p>
      </a>

      <a href="#" class="group relative p-8 bg-gray-900 border border-gray-800 rounded-2xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] hover:-translate-y-2">
        <div class="text-5xl mb-6 transform group-hover:scale-110 transition-transform">💻</div>
        <h3 class="text-xl font-bold text-white mb-2">Laptops</h3>
        <p class="text-gray-400 text-sm">High-performance machines for work and creativity.</p>
      </a>

      <a href="#" class="group relative p-8 bg-gray-900 border border-gray-800 rounded-2xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] hover:-translate-y-2">
        <div class="text-5xl mb-6 transform group-hover:scale-110 transition-transform">🎧</div>
        <h3 class="text-xl font-bold text-white mb-2">Audio</h3>
        <p class="text-gray-400 text-sm">Immersive sound quality with noise-canceling tech.</p>
      </a>
    </div>
  </div>
</section>

<section class="reveal-section bg-gray-950 py-20 px-6 md:px-12 lg:px-24 opacity-0 transform translate-y-10 transition-all duration-1000">
  <div class="max-w-7xl mx-auto">
    <div class="mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Featured Products</h2>
      <p class="text-gray-400 text-lg">Explore our best-selling premium gadgets.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <article class="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-2 flex flex-col">
        <div class="h-64 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="MacBook">
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex text-yellow-400 mb-2 text-sm">★★★★★</div>
          <h3 class="text-xl font-bold text-white mb-1">MacBook Pro M3</h3>
          <p class="text-gray-400 text-sm mb-4 flex-grow">Mind-blowing performance with the latest Apple Silicon.</p>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-xl font-bold text-indigo-400">$1999.00</span>
            <button class="px-5 py-2 bg-gray-800 border border-gray-700 hover:bg-indigo-600 text-white font-semibold rounded-full text-sm transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </article>

      <article class="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-2 flex flex-col">
        <div class="h-64 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Headphones">
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex text-yellow-400 mb-2 text-sm">★★★★★</div>
          <h3 class="text-xl font-bold text-white mb-1">Sony WH-1000XM5</h3>
          <p class="text-gray-400 text-sm mb-4 flex-grow">Industry-leading noise cancellation and premium sound.</p>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-xl font-bold text-indigo-400">$398.00</span>
            <button class="px-5 py-2 bg-gray-800 border border-gray-700 hover:bg-indigo-600 text-white font-semibold rounded-full text-sm transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </article>

      <article class="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-2 flex flex-col">
        <div class="h-64 overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="PS5">
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex text-yellow-400 mb-2 text-sm">★★★★☆</div>
          <h3 class="text-xl font-bold text-white mb-1">PlayStation 5 Console</h3>
          <p class="text-gray-400 text-sm mb-4 flex-grow">Experience lightning-fast loading and 4K gaming.</p>
          <div class="flex items-center justify-between mt-auto">
            <span class="text-xl font-bold text-indigo-400">$499.00</span>
            <button class="px-5 py-2 bg-gray-800 border border-gray-700 hover:bg-indigo-600 text-white font-semibold rounded-full text-sm transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>

<section class="reveal-section px-6 py-12 md:px-12 lg:px-24 opacity-0 transform translate-y-10 transition-all duration-1000">
  <div class="relative w-full rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 p-8 md:p-16 overflow-hidden shadow-2xl border border-white/10">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/30 rounded-full blur-[128px]"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]"></div>

    <div class="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="flex flex-col space-y-6">
        <span class="inline-block w-fit px-4 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-200 text-sm font-semibold tracking-wide uppercase">
          🔥 Limited Time Offer
        </span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Up to 50% OFF on <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">Premium Tech</span>
        </h2>
        <p class="text-lg text-gray-300 max-w-md">
          Upgrade your workspace and entertainment setup with our best-in-class electronics. Don't wait—these deals vanish soon.
        </p>
        <div class="flex flex-wrap gap-4 pt-2">
          <button class="px-8 py-4 bg-white hover:bg-gray-100 text-indigo-950 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
            Shop Deals
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="reveal-section py-20 px-6 md:px-12 lg:px-24 opacity-0 transform translate-y-10 transition-all duration-1000">
  <div class="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 md:p-16 shadow-2xl">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
      
      <div class="flex-1 space-y-4 text-center lg:text-left">
        <span class="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide uppercase">
          📧 Stay Updated
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-white">Get Exclusive Deals First</h2>
        <p class="text-gray-400 text-lg">Join our newsletter to receive the latest updates, special promotions, and tech news directly to your inbox.</p>
      </div>

      <div class="flex-1 w-full max-w-lg">
        <form id="newsletter-form" class="flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            id="email-input"
            placeholder="Enter your email address" 
            class="flex-grow px-6 py-4 bg-gray-950 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
          >
          <button 
            type="submit" 
            class="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
        <p id="form-message" class="mt-4 text-sm text-center sm:text-left px-4 h-5"></p>
      </div>
      
    </div>
  </div>
</section>

<footer class="bg-gray-950 border-t border-gray-900 pt-16 pb-8 px-6 md:px-12 lg:px-24">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <a href="#" class="text-2xl font-bold text-white flex items-center gap-2">
      <span class="text-indigo-400">⭐</span> Star Store
    </a>
    <p class="text-gray-500 text-sm">&copy; 2026 Star Store. All Rights Reserved.</p>
  </div>
</footer>
`;

const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-10');
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-section').forEach(section => {
  observer.observe(section);
});

const hamburgerBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu'); 

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });
}

const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email-input');
const formMessage = document.getElementById('form-message');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      formMessage.textContent = "Please enter your email.";
      formMessage.className = "mt-4 text-sm font-medium text-red-400 text-center sm:text-left px-4";
    } else if (!emailRegex.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.className = "mt-4 text-sm font-medium text-red-400 text-center sm:text-left px-4";
    } else {
      formMessage.textContent = "Thank you for subscribing!";
      formMessage.className = "mt-4 text-sm font-medium text-green-400 text-center sm:text-left px-4";
      emailInput.value = '';
      
      setTimeout(() => {
        formMessage.textContent = "";
      }, 3000);
    }
  });
}

document.querySelectorAll('button').forEach(button => {
  if (button.id === 'mobile-menu-btn' || button.type === 'submit') return; 

  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.pointerEvents = 'none';
    ripple.style.transition = 'transform 0.6s linear, opacity 0.6s linear';
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.style.transform = 'scale(4)';
      ripple.style.opacity = '0';
    }, 10);
    
    setTimeout(() => ripple.remove(), 600);
  });
});