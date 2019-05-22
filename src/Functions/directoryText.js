
const directoryText = (robotStatus)=>{
	let text = [];
	switch (robotStatus){
		
		case 'start':
			text = [
				'Welcome! I\'m Dr. Robot\'s Assistant Directory... It\'s a pleasure to meet you. :) ... To begin, please choose either Voice or Text Activation or click on Help for more info.',
			]

			return text;

		case 'voice':
			text = [
				'Thank you for selecting the Voice Activation button... Please remember to speak clearly to me so that I may process your words better.',
				'First, test your microphone is connected - your words should be appearing on the screen.',
				'How are you feeling today?',
				'Based on how you are feeling, I will be happy to direct you to the appropriate website in order to serve you better.',
				'If you wish to chat with Dr. Robot please ask me "to speak with Dr. Robot" ',
			]

			return text;

		case 'text':
			text = [
				'Thank you for selecting the Text Activation button.',
				'If you wish to chat with Dr. Robot please type "Speak with Dr. Robot" ',
				'Please type into the text box and click submit upon completion',
				'How are you feeling today?',
				'Based on how you are feeling, I will be happy to direct you to the appropriate website in order to serve you better.',

			]

			return text; 

			case 'help':
			text = [
				'I am still in an embryonic stage, but I\'m looking forward to evolving throughout the centuries Asimov willing.',
				'Do you know who Eliza is?',
				'I wonder what time it is on Mars right now...',
			]

			return text;


		default:
			return ['WARNING SYSTEM ERROR!']
	}
}


export default directoryText;