function longLongVowels(st){
	st = st.replace(/a{2,}/g,"aa");
	st = st.replace(/e{2,}/g,"ee");
	st = st.replace(/i{2,}/g,"ii");
	st = st.replace(/o{2,}/g,"oo");
	st = st.replace(/u{2,}/g,"uu");
	console.log(st);
}

longLongVowels("goooood cheeeese man");