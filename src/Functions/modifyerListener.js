const modifyerListener = (string, keyWord) =>{
	let modifyers = [
		'really',
		'very',
		'a little',
		'pretty',
		'kind a',
		'sort of',
		'a bit'
	];

	let LowerString = string.toLowerCase();
 	let result = modifyers.filter(modifyer => LowerString.includes(modifyer))
 	if(result.length>0){
	 	return result[0];
	} else{
		return 'waiting';
	}
}; 

export default modifyerListener;