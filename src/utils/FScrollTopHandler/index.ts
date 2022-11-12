import { FUseStateSafe } from "../FUseStateSafe";
/**
 * _Remarks: This function may be deprecated in the future._
 */
export function FScrollTopHandler() {
	const [scrollTop, setScrollTop] = FUseStateSafe(0);
	const onScroll = (event: any) => setScrollTop(event.target.scrollTop);
	return { scrollTop, onScroll };
}
