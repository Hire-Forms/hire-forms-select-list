import React from "react";

import List from "hire-forms-list";
import Select from "hire-forms-select";

import {arrayOfStringOrArrayOfKeyValue} from "hire-forms-prop-types";

class SelectList extends React.Component {
	handleListChange(values) {
		this.props.onChange(values);
	}

	handleSelectChange(value) {
		// Use concat instead of push so we don't alter the this.props.
		let values = this.props.values.concat([value]);

		this.props.onChange(values);
	}

	render() {
		return (
			<div className="hire-select-list">
				<List
					onChange={this.handleListChange.bind(this)}
					values={this.props.values} />
				<Select
					async={this.props.async}
					onChange={this.handleSelectChange.bind(this)}
					options={this.props.options}
					placeholder={this.props.placeholder} />
			</div>
		);
	}
}

SelectList.defaultProps = {
	values: [],
	options: [],
	ordered: false
};

SelectList.propTypes = {
	async: React.PropTypes.func,
	onChange: React.PropTypes.func.isRequired,
	options: arrayOfStringOrArrayOfKeyValue,
	ordered: React.PropTypes.bool,
	placeholder: React.PropTypes.string,
	values: arrayOfStringOrArrayOfKeyValue
};

export default SelectList;