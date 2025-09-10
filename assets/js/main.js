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
