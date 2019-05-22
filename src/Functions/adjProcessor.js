import drRobotDir from '../Display/drRobotDir';
import feelingObj from '../Display/feelingObj';

const adjProcessor = (string, keyWord) =>{
	
	let adjectives = [];
	switch (keyWord){
		case 'feeling':
			adjectives = {
				feeling:Object.keys(feelingObj),
				speaktorobot:[]
			}
			break;

		case 'speak':
			adjectives= {
				speaktorobot:Object.keys(drRobotDir),	
				feeling:[]

			}
			break;

		default:
			adjectives = {
				speaktorobot:[],
				feeling:[]

			};
	};

	let lowerString = string.toLowerCase();
 	let speaktorobot = adjectives.speaktorobot;
	 let feeling = adjectives.feeling;
 	const adjFilter = (arr)=>{
 		return arr.filter(adjective => lowerString.includes(adjective))
 	}

 	let objMaker = ()=>{
 		if (adjFilter(speaktorobot).length !== 0){
 			return {
 				adjective: adjFilter(speaktorobot)[0],
 				adjType:'website',
			 }
			} else if (adjFilter(feeling).length !== 0){
				return {
					adjective: adjFilter(feeling)[0],
					adjType:'feeling',
				}
 		}
 	}

 	let result = objMaker();

 	if(result !== undefined){
	 	console.log(result)
	 	return result;
	} else{
		return {adjective:'waiting', adjType:'waiting'};
	}
}; 

export default adjProcessor;