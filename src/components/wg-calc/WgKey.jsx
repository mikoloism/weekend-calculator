const WgKey = ({
	'class-name': className = 'wg-calc__key--numeric',
	text,
	value,
	click = () => {},
}) => {
	return (
		<button
			className={`wg-calc__key ${className}`}
			data-key={value}
			title={`${value}(${text})`}
			onClick={click}
			value={value}>
			{text}
		</button>
	);
};
export default WgKey;
