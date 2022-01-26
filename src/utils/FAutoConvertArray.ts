export const FAutoConvertArray = <T>(data: T | T[] | undefined):T[] => {
    if(!data){
        return []
    }
	return Array.isArray(data) ? data : [data];
};
