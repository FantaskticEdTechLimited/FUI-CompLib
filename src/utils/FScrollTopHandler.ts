import { FUseStateSafeHandler } from "./FUseStateSafe";

export function FScrollTopHandler() {
	const [scrollTop, setScrollTop] = FUseStateSafeHandler(0);
	const onScroll = (event: any) => setScrollTop(event.target.scrollTop);
	return { scrollTop, onScroll };
}
