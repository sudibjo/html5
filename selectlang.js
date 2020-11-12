let lang = localStorage.getItem('lang');

		if (lang == 'en'||lang=='id') {} else {
			lang = 'en';
  			localStorage.setItem('lang', lang)
		}

		lang = lang.toLowerCase();
		lang = lang.substring(0, 2);

		let elem = document.getElementById('selectlang');
		
		if (elem != null) {
  			
			elem.value = lang;
			let number = elem.innerHTML.indexOf(lang + "\">") + 3;
			let retval = elem.innerHTML.slice(0, number) + " selected " + elem.innerHTML.slice(number)
			elem.innerHTML = retval;

			function selectLanguage(inlang) {
				let elems = document.getElementsByClassName(inlang);
				for (let i = 0; i < elems.length; i++) {
					elems[i].style.display ='inline-block';
				}  
			}
  	
			let eelems = document.getElementsByClassName("langs");
				
			for (let i = 0; i < eelems.length; i++) {
				eelems[i].style.display ='none';
			}
			selectLanguage(lang + "lang");
  
  				let hiddencont = document.getElementsByClassName('krhidden');
  				
  				if(hiddencont.length>0){
  				if(lang =='kr'){
  					for (let i = 0; i < hiddencont.length; i++) {
						hiddencont[i].style.display ='none';
					}
  				}
  				if(lang != 'kr'){
 					for (let i = 0; i < hiddencont.length; i++) {
						hiddencont[i].style.display ='block';
					}
  				}
  				}
  
			document.getElementById("selectlang").onchange = function(){
				let eelems = document.getElementsByClassName("langs");
			
				for (let i = 0; i < eelems.length; i++) {
					eelems[i].style.display ='none';
				}
				let lang = document.getElementById('selectlang').value;
    			let hiddencont = document.getElementsByClassName('krhidden');
  				
  				if(hiddencont.length>0){
  				if(lang =='kr'){
  					for (let i = 0; i < hiddencont.length; i++) {
						hiddencont[i].style.display ='none';
					}
  				}
  				if(lang != 'kr'){
 					for (let i = 0; i < hiddencont.length; i++) {
						hiddencont[i].style.display ='block';
					}
  				}
  				}
  
				localStorage.setItem('lang', lang)
				selectLanguage(lang + 'lang');
			};
		}
		M.AutoInit();
