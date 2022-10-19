/**
 * Removes the __typename_ of an object.
 */
export const FRemoveTypeName = (value: any) => {
	if (value === undefined || value === null) {
		return value;
	} else if (Array.isArray(value)) {
		const newArray = [...value];
		for (let index = 0; index < newArray.length; index++) {
			let newValue = FRemoveTypeName(newArray[index]);
			newArray[index] = newValue;
		}
		return newArray;
	} else if (typeof value === "object") {
		let { __typename, ...remain } = JSON.parse(JSON.stringify(value));
		let newObject = remain;
		Object.keys(newObject).forEach((key) => {
			let newValue = FRemoveTypeName(newObject[key]);
			newObject[key] = newValue;
		});
		return newObject;
	}
	return value;
};
