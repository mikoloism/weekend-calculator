import WgKeyFunction from './../keys/functin';

const Functions = [
	{ text: '247', value: 'divide' },
	{ text: '215', value: 'times' },
	{ text: '8722', value: 'minus' },
	{ text: '43', value: 'plus' },
	{ text: '61', value: 'equal' },
];

const WgFunctions = () => (
	<div className='wg-calc__bar wg-calc__bar--function'>
		{Functions.map(({ text, value }, index) => (
			<WgKeyFunction
				key={index}
				text={String.fromCharCode(text)}
				value={value}
			/>
		))}
	</div>
);
export default WgFunctions;
