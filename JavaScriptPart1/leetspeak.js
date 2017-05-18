function leetspeak(st){

	let myst = '';
    st = st.toUpperCase();
	for(let i =0;i< st.length ;i++){

		if(st.charAt(i) === 'E'){
			myst +='3';
		}else if (st.charAt(i) === 'A'){
			myst +='4';
		} else if(st.charAt(i) === 'G'){
			myst+='6';
		} else if(st.charAt(i) === 'L'){
			myst +='1';
		} else if (st.charAt(i) === 'O'){
			myst += '0';
		} else if (st.charAt(i) === 'S'){
			myst += '5';
		} else if (st.charAt(i) === 'T'){
			myst += '7';
		}
		else{
			myst+=st.charAt(i);
		}
	}
	console.log(myst);

}

leetspeak('leet');