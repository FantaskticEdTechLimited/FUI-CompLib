import { FUseStateSafe } from "../useStateSafe";

export function FScrollTopHandler() {
	const [scrollTop, setScrollTop] = FUseStateSafe(0);
	const onScroll = (event: any) => setScrollTop(event.target.scrollTop);
	return { scrollTop, onScroll };
}
