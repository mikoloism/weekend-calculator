const WgKey = ({
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
export default WgKey;
