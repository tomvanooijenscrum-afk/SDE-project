(function(){
	var yearEl=document.getElementById('year');
	if(yearEl){yearEl.textContent=String(new Date().getFullYear());}
	var toggle=document.querySelector('.nav-toggle');
	var nav=document.getElementById('site-nav');
	if(toggle&&nav){
		toggle.addEventListener('click',function(){
			var open=nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded',open?'true':'false');
		});
	}

	var header = document.querySelector('.site-header');

	// Header: fade to white when scrolling down (sticky behavior)
	if (header) {
		var ticking = false;
		function updateHeaderScrolledState() {
			ticking = false;
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
			header.classList.toggle('is-scrolled', scrollTop > 10);
		}
		window.addEventListener('scroll', function() {
			if (!ticking) {
				ticking = true;
				window.requestAnimationFrame(updateHeaderScrolledState);
			}
		}, { passive: true });
		updateHeaderScrolledState();
	}

	// Add parallax effect to hero section
	var hero = document.querySelector('.hero');
	if (hero) {
		window.addEventListener('scroll', function() {
			var scrolled = window.pageYOffset;
			var rate = scrolled * -0.5;
			hero.style.transform = 'translateY(' + rate + 'px)';
		});
	}

	// Add subtle hover effect on mouse move
	document.addEventListener('mousemove', function(e) {
		var cards = document.querySelectorAll('.card');
		cards.forEach(function(card) {
			var rect = card.getBoundingClientRect();
			var x = e.clientX - rect.left;
			var y = e.clientY - rect.top;
			
			if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
				card.style.boxShadow = '0 8px 25px rgba(37, 99, 235, 0.15)';
			} else {
				card.style.boxShadow = '';
			}
		});
	});

	// Add typing effect to hero title
	var heroTitle = document.querySelector('.hero h1');
	if (heroTitle) {
		var text = heroTitle.textContent;
		heroTitle.textContent = '';
		var i = 0;
		
		function typeWriter() {
			if (i < text.length) {
				heroTitle.textContent += text.charAt(i);
				i++;
				setTimeout(typeWriter, 50);
			}
		}
		
		// Start typing effect after a short delay
		setTimeout(typeWriter, 500);
	}

	// Business card modal functionality
	function openBusinessCard() {
		var modal = document.createElement('div');
		modal.className = 'business-card-modal';
		modal.innerHTML = `
			<div class="business-card-modal-content">
				<div class="business-card-placeholder business-card-modal-placeholder">
					<div class="placeholder-content">
						<div class="business-card-logo">
							<img src="SDE LOGO NB.png" alt="SDE Logo" class="business-card-logo-img">
						</div>
						<p>Van Ooijen</p>
						<p>Structural Design & Engineering</p>
						<hr>
						<p><strong>ing. A.B. van Ooijen PMSE rc</strong></p>
						<p>Directeur</p>
						<hr>
						<p>Lingedijk 24</p>
						<p>4191 VE Geldermalsen</p>
						<p>tel: 0345752516</p>
						<p>mob: 0640219973</p>
					</div>
				</div>
			</div>
		`;
		
		document.body.appendChild(modal);
		document.body.style.overflow = 'hidden';
		
		// Close modal functionality - click anywhere outside the modal content
		modal.addEventListener('click', function(e) {
			if (e.target === modal) {
				document.body.removeChild(modal);
				document.body.style.overflow = 'auto';
			}
		});
	}
	
	// Make openBusinessCard globally available
	window.openBusinessCard = openBusinessCard;

	// Allow keyboard "Enter/Space" on clickable business card previews
	document.addEventListener('keydown', function(e) {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		var target = e.target;
		if (!(target instanceof HTMLElement)) return;
		if (target.classList && target.classList.contains('business-card-placeholder') && target.getAttribute('role') === 'button') {
			e.preventDefault();
			openBusinessCard();
		}
	});

	// Features slider: expand card on hover/focus
	var cardSlider = document.querySelector('.features .card-slider');
	if (cardSlider) {
		var sliderCards = cardSlider.querySelectorAll('.card');
		function clearExpanded() {
			cardSlider.classList.remove('has-expanded');
			sliderCards.forEach(function(c){ c.classList.remove('is-expanded'); });
		}
		sliderCards.forEach(function(card){
			card.setAttribute('tabindex','0');
			card.addEventListener('mouseenter', function(){
				cardSlider.classList.add('has-expanded');
				sliderCards.forEach(function(c){ c.classList.toggle('is-expanded', c === card); });
			});
			card.addEventListener('mouseleave', function(){
				clearExpanded();
			});
			card.addEventListener('focus', function(){
				cardSlider.classList.add('has-expanded');
				sliderCards.forEach(function(c){ c.classList.toggle('is-expanded', c === card); });
			});
			card.addEventListener('blur', function(){
				clearExpanded();
			});
		});
		cardSlider.addEventListener('mouseleave', clearExpanded);
	}
	var form=document.getElementById('contact-form');
	if(form){
		var statusEl=form.querySelector('.form-status');
		function getFormData(){
			var formData=new FormData(form);
			return {
				name: String(formData.get('name')||''),
				email: String(formData.get('email')||''),
				message: String(formData.get('message')||'')
			};
		}
		function buildContent(){
			var data=getFormData();
			var subject='Contact via website SDE';
			var body='Naam: '+data.name+'\nE-mail: '+data.email+'\n\nBericht:\n'+data.message;
			return {subject:subject, body:body};
		}
		form.addEventListener('submit',function(e){
			e.preventDefault();
			var d=getFormData();
			if(!d.name||!d.email||!d.message){
				statusEl.textContent='Vul alle verplichte velden in.';
				return;
			}
			var content=buildContent();
			var to='info@sde-engineering.nl';
			var mailto='mailto:'+to+'?subject='+encodeURIComponent(content.subject)+'&body='+encodeURIComponent(content.body);
			statusEl.textContent='Je e-mailapp wordt geopend...';
			window.location.href=mailto;
		});
		var buttons=document.querySelectorAll('[data-mail-service]');
		if(buttons.length){
			buttons.forEach(function(btn){
				btn.addEventListener('click',function(){
					var d=getFormData();
					if(!d.name||!d.email||!d.message){
						statusEl.textContent='Vul alle verplichte velden in.';
						return;
					}
					var content=buildContent();
					var to='info@sde-engineering.nl';
					var service=btn.getAttribute('data-mail-service');
					var url='';
					switch(service){
						case 'gmail':
							url='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(to)+'&su='+encodeURIComponent(content.subject)+'&body='+encodeURIComponent(content.body);
							break;
						case 'outlook':
							url='https://outlook.live.com/mail/0/deeplink/compose?to='+encodeURIComponent(to)+'&subject='+encodeURIComponent(content.subject)+'&body='+encodeURIComponent(content.body);
							break;
						case 'yahoo':
							url='https://compose.mail.yahoo.com/?to='+encodeURIComponent(to)+'&subject='+encodeURIComponent(content.subject)+'&body='+encodeURIComponent(content.body);
							break;
						default:
							url='mailto:'+to+'?subject='+encodeURIComponent(content.subject)+'&body='+encodeURIComponent(content.body);
					}
					statusEl.textContent='Een nieuw bericht wordt geopend...';
					window.open(url,'_blank','noopener');
				});
			});
		}
	}
})();
