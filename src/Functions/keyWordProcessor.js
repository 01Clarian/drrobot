const keyWordProcessor = (string) =>{
	let keyWords = [
		'feeling',
		'speak',
	]
	let lowerString = string.toLowerCase();
 	let result = keyWords.filter(kWord => lowerString.includes(kWord))
 	if(result.length>0){
	 	return result[0];
	} else {
		return 'waiting'
	}

};

export default keyWordProcessor;