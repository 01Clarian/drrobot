import keyWordProcessor from '../Functions/keyWordProcessor';
import adjProcessor from '../Functions/adjProcessor';
import modifyerListener from '../Functions/modifyerListener';

let textProcessor = {
	keyWord: keyWordProcessor,
	adjective: adjProcessor,
	modifyer: modifyerListener
}

export default textProcessor;