function Input({ onChangeHandler, error, placeholder, label, type, id }) {
	return (
		<div className="Form-group">
			<div className="flex flex-row justify-between">
				<label
					htmlFor={id}
					className={`${!!error ? 'Error-mode' : ''}`}
				>
					{label}
				</label>
				<span className="Form-errorMsg">{error}</span>
			</div>
			<input
				placeholder={placeholder}
				className={`Form-input ${!!error ? 'Input-error-mode' : ''}`}
				type={type}
				id={id}
				name={id}
				onChange={onChangeHandler}
			/>
		</div>
	);
}

export default Input;
