import WgKeyMisc from './../keys/misc';

const Miscs = [
	{ text: '67', value: 'clear' },
	{ text: '177', value: 'plus-minus' },
	{ text: '37', value: 'precent' },
];

const WgPadMisc = () => (
	<div className='wg-calc__bar wg-calc__bar--miscs'>
		{Miscs.map(({ text, value }, index) => (
			<WgKeyMisc
				key={index}
				text={String.fromCharCode(text)}
				value={value}
			/>
		))}
	</div>
);
export default WgPadMisc;
