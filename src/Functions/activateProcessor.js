import goToDrDir from './goToDrDir'
import goToFeelings from './goToFeelings'

const activateProcessor = (keyWord, adjective) =>{
	let action = {}

	let reset = ()=>{
		action.keyWord = 'waiting';
		action.adjective = 'waiting';
		action.isComplex = false;
		return action;

	}
	if(keyWord !== 'waiting' && adjective !== 'waiting'){
		switch (keyWord){
			case 'feeling':
			goToFeelings(adjective);
				break;
			case 'speak':
				goToDrDir(adjective);
				break;
			default:
				console.log('nothing going on')
		};
		return reset();
	
	}
};

export default activateProcessor;