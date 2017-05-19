function cipher(st){
	let myst = '';

	for(let i =0 ;i< st.length;i++){
		if(st.charAt(i) != ' ' ){



			let temp = st.charCodeAt(i);
			

			if(temp >= 97 && temp <=122){
				myst += String.fromCharCode((temp - 97 - 13 + 26) % 26  + 97);
			}
			if(temp >= 65 && temp <= 90){
				myst += String.fromCharCode((temp - 65 -13 + 26) % 26 + 97);
			}



		}else{
			myst+= ' ';
		}
	}

	console.log(myst);	
}

cipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar');