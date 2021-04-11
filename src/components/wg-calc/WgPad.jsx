import WgKey from './WgKey';
const WgPad = ({ children, store }) => {
	const { state, setState } = store;
	return (
		<div className='wg-calc__pad'>
			<div className='wg-calc__side wg-calc__side--left'>
				<div className='wg-calc__bar wg-calc__bar--miscs'>
					<WgKey
						text='C'
						data-key='clear'
						value='clear'
						type='misc'
					/>
					<WgKey
						text='&#177;'
						data-key='plus-minus'
						value='plus-minus'
						type='misc'
					/>
					<WgKey
						text='&#37;'
						data-key='precent'
						value='precent'
						type='misc'
					/>
				</div>
				<div className='wg-calc__bar wg-calc__bar--nums'>
					<WgKey text='7' data-key='7' value={7} />
					<WgKey text='8' data-key='8' value={8} />
					<WgKey text='9' data-key='9' value={9} />
					<WgKey text='4' data-key='4' value={4} />
					<WgKey text='5' data-key='5' value={5} />
					<WgKey text='6' data-key='6' value={6} />
					<WgKey text='1' data-key='1' value={1} />
					<WgKey text='2' data-key='2' value={2} />
					<WgKey text='3' data-key='3' value={3} />
					<WgKey text='0' data-key='0' value={0} />
					<WgKey text='.' data-key='point' value={'point'} />
				</div>
			</div>
			<div className='wg-calc__side wg-calc__side--right'>
				<div className='wg-calc__pad--funcs'>
					<WgKey
						type='func'
						text='&#247;'
						data-key='divide'
						value='divide'
					/>
					<WgKey
						type='func'
						text='&#215;'
						data-key='times'
						value='times'
					/>
					<WgKey
						type='func'
						text='&#8722;'
						data-key='minus'
						value='minus'
					/>
					<WgKey
						type='func'
						text='&#43;'
						data-key='plus'
						value='plus'
					/>
					<WgKey
						type='func'
						text='&#61;'
						data-key='equal'
						value='equal'
					/>
				</div>
			</div>
		</div>
	);
};
export default WgPad;
