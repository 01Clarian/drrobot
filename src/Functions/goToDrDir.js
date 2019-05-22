import drRobotDir from '../Display/drRobotDir';

const goToDrDir = (name)=>{
	console.log(name, drRobotDir[name], "ha")
	window.open(drRobotDir[name], "_self");
}

export default goToDrDir;