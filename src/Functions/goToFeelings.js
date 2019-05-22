import feelingObj from '../Display/feelingObj';

const goToFeelings = (name)=>{
console.log(name, feelingObj[name], "getting closer")
window.open(feelingObj[name]);
}

export default goToFeelings;