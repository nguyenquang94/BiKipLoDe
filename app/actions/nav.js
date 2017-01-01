export const SWITCH_TO_DUDOAN_LIST = 'SWITCH_TO_DUDOAN_LIST';
export const SWITCH_TO_NEWS_LIST = 'SWITCH_TO_NEWS_LIST';
export const SWITCH_TO_HOME = 'SWITCH_TO_HOME';
export const SWITCH_TO_TINH_THANH = 'SWITCH_TO_TINH_THANH';

export const GO_TO_HOME_DETAIL = 'GO_TO_HOME_DETAIL';
export const GO_TO_WEBLINK = 'GO_TO_WEBLINK';
export const GO_TO_TINHTHANH_DETAIL = 'GO_TO_TINHTHANH_DETAIL';
export const GO_BACK = 'Navigation/BACK';

export function switchDudoan() {
	return {
		type: SWITCH_TO_DUDOAN_LIST
	};
}

export function switchTinhThanhList() {
	return {
		type: SWITCH_TO_TINH_THANH
	}
}

export function switchHome() {
	return {
		type: SWITCH_TO_HOME
	};
}

export function switchToNews() {
	return {
		type: SWITCH_TO_NEWS_LIST
	};
}

export function goToHomeDetailDetail() {
	return {
		type: GO_TO_HOME_DETAIL
	};
}

export function goToTinhThanhDetail() {
	return {
		type: GO_TO_TINHTHANH_DETAIL
	};
}

export function goToTWebLinkl() {
	return {
		type: GO_TO_WEBLINK
	};
}

export function goBack() {
	return {
		type: GO_BACK
	}
}
