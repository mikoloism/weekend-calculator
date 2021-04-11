/* eslint-disable no-unused-vars */
const WgButton = ({
	'data-key': dataKey,
	type = 'num',
	text,
	value,
	method = () => {},
}) => {
	return (
		<button
			className={`wg-calc__key wg-calc__key--${type}`}
			data-key={dataKey}
			value={value}>
			{text}
		</button>
	);
};
const WgKey = WgButton;
const WgPad = ({ children, store }) => {
	const { state, setState } = store;
	return (
		<div class='wg-calc__pad'>
			<div className='wg-calc__side wg-calc__side--left'>
				<div className='wg-calc__pad--miscs'>
					<WgKey text='C' data-key='C' value='C' type='misc' />
					<WgKey text='+/-' data-key='+-' value='+/-' type='misc' />
					<WgKey text='%' data-key='%' value='%' type='misc' />
				</div>
				<div class='wg-calc__pad--nums'>
					<WgButton text='1' data-key='1' value={1} />
					<WgButton text='2' data-key='2' value={2} />
					<WgButton text='3' data-key='3' value={3} />
					<WgButton text='4' data-key='4' value={4} />
					<WgButton text='5' data-key='5' value={5} />
					<WgButton text='6' data-key='6' value={6} />
					<WgButton text='7' data-key='7' value={7} />
					<WgButton text='8' data-key='8' value={8} />
					<WgButton text='9' data-key='9' value={9} />
					<WgButton text='0' data-key='0' value={0} />
					<WgButton text='.' data-key='.' value={'.'} />
				</div>
			</div>
			<div className='wg-calc__side wg-calc__side--right'>
				<div className='wg-calc__pad--funcs'>
					<WgKey type='func' text='=' data-key='=' value='=' />
					<WgKey type='func' text='=' data-key='=' value='=' />
					<WgKey type='func' text='=' data-key='=' value='=' />
					<WgKey type='func' text='=' data-key='=' value='=' />
					<WgKey type='func' text='=' data-key='equal' value='=' />
				</div>
			</div>
		</div>
	);
};
export default WgPad;
