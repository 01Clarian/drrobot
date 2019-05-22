import textProcessor from '../Display/textProcessor';
import colorArray from '../Display/colorArray';

const processor = (string, word) =>{
    let keyWord = textProcessor.keyWord(string)
    let modifyer = textProcessor.modifyer(string, word)
    let adjObj = textProcessor.adjective(string, word)
    let complexColor = modifyer+adjObj.adjective;

    if(keyWord !== 'waiting' && adjObj.adjective !== 'waiting'){
      
      if (colorArray.includes(complexColor)){
        return({
          keyWord:keyWord,
          adjective:adjObj.adjective,
          adjType:adjObj.adjType,
          modifyer:modifyer,
          isComplex:true,
        })
      } else {
        return({
          keyWord:keyWord,
          adjType:adjObj.adjType,
          adjective:adjObj.adjective
        })
      }
    } else if (keyWord !== 'waiting'){
      return {keyWord: keyWord}
    } else if (word !== 'waiting' && adjObj.adjective !== 'waiting'){
      

      if (colorArray.includes(complexColor)){
        return { 
          adjective:adjObj.adjective,
          adjType:adjObj.adjType,
          modifyer:modifyer
        }
      } else {
        return { 
          adjType:adjObj.adjType,
          adjective:adjObj.adjective 
        }
      }
        
    };


};

export default processor;