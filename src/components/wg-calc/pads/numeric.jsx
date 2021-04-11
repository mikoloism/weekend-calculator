import WgKeyNumber from './../keys/number';

const Keys = [
	{ text: '7', value: 7 },
	{ text: '8', value: 8 },
	{ text: '9', value: 9 },
	{ text: '4', value: 4 },
	{ text: '5', value: 5 },
	{ text: '6', value: 6 },
	{ text: '1', value: 1 },
	{ text: '2', value: 2 },
	{ text: '3', value: 3 },
	{ text: '0', value: 0 },
	{ text: '.', value: 'point' },
];

const WgNumeric = () => (
	<div className='wg-calc__bar wg-calc__bar--numeric'>
		{Keys.map(({ text, value }, index) => (
			<WgKeyNumber key={index} text={text} value={value} />
		))}
	</div>
);
export default WgNumeric;
