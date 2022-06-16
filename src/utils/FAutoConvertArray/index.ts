export const FAutoConvertArray = <T>(data: T | T[] | null | undefined):T[] => {
    if(!data || data === null){
        return []
    }
	return Array.isArray(data) ? data : [data];
};
