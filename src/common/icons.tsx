import * as React from "react";


export const IconRecommend = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>
		<path fill="none" d="M0 0h24v24H0V0z" viewBox="0 0 24 24" />
		<path d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z" />
	</svg>
);
export const IconReport = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `24px` }}
	>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" />
		<circle cx={12} cy={16} r={1} />
		<path d="M11 7h2v7h-2z" />
	</svg>
);
export const IconComment = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>

			<path fill="none" d="M0 0h24v24H0V0z" />
			<path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" />

	</svg>
);
export const IconLikeFilled = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>

			<path fill="none" d="M24 24H0V0h24v24z" />
			<path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 00-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84A2.34 2.34 0 009.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z" />

	</svg>
);
export const IconBookMark = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>

			<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
			<path d="M0 0h24v24H0z" fill="none" />

	</svg>
);
export const IconAttachment = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>
		<svg width={24} height={24} {...props}>
			<path fill="none" d="M0 0h24v24H0V0z" />
			<path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 015 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 005 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
		</svg>
	</svg>
);
export const IconFileInsert = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `24px` }}
	>

			<path fill="none" d="M0 0h24v24H0V0z" />
			<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />

	</svg>
);
export const IconCamera = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>

			<circle cx={12} cy={12} r={3.2} />
			<path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
			<path d="M0 0h24v24H0z" fill="none" />

	</svg>
);
export const IconFiledownload = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>

			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />

	</svg>
);
export const IconGoogle = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>
		<path
			d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
			fill="#fbbb00"
		/>
		<path
			d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
			fill="#518ef8"
		/>
		<path
			d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
			fill="#28b446"
		/>
		<path
			d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
			fill="#f14336"
		/>
	</svg>
);

export const IconAdd = (props) => (
	<svg viewBox="0 0 24 24"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1.5rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `20px` }}
	>
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);
export const IconDown = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
	</svg>
);
export const IconAttach = (props) => (
	<svg viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>
		<path d="M312.453 199.601a116.167 116.167 0 00-20.053-16.128 119.472 119.472 0 00-64.427-18.859 118.952 118.952 0 00-84.48 34.987L34.949 308.23a119.466 119.466 0 00-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0084.395-34.816l89.6-89.6a8.534 8.534 0 00-6.059-14.592h-3.413a143.626 143.626 0 01-54.613-10.581 8.533 8.533 0 00-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 009.899-21.675 34.137 34.137 0 00-9.9-26.282z" />
		<path d="M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 00-1.792 9.387 8.532 8.532 0 008.021 5.205h3.157a143.357 143.357 0 0154.528 10.667 8.533 8.533 0 009.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 00-9.899 21.845 34.137 34.137 0 009.899 26.283 118.447 118.447 0 0034.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 005.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0055.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z" />

	</svg>
);
export const IconUpload = (props) => (
	<svg  viewBox="0 0 20 20"
		  className={props.className ? `icons ${props.className}` : 'icons'}
		  width={``}
		  height={props.size ? `${props.size}rem` : `1rem`}
		  fill={props.fill ? `${props.fill}` : `currentColor`}
		  onClick={props.doOnClick}
		  style={{ width: `20px`, height: `16px` }}
	>
		<path d="M259.257 0c-10.794 0-19.542 8.748-19.542 19.542v310.066c0 10.794 8.748 19.542 19.542 19.542s19.542-8.748 19.542-19.542V19.542C278.799 8.748 270.051 0 259.257 0z" />
		<path d="M380.73 106.224L272.598 5.257c-7.511-7.009-19.164-7.009-26.675 0L137.79 106.224c-7.888 7.367-8.318 19.731-.951 27.619a19.475 19.475 0 0014.285 6.208c4.781 0 9.569-1.739 13.334-5.257l94.798-88.519 94.798 88.519c7.901 7.367 20.258 6.937 27.619-.951 7.362-7.888 6.945-20.252-.943-27.619zM454.677 166.758H350.453c-10.794 0-19.542 8.748-19.542 19.542 0 10.794 8.748 19.542 19.542 19.542h84.682v267.074H76.865V205.842h84.682c10.794 0 19.542-8.748 19.542-19.542 0-10.794-8.748-19.542-19.542-19.542H57.323c-10.794 0-19.542 8.748-19.542 19.542v306.158c0 10.794 8.748 19.542 19.542 19.542h397.354c10.794 0 19.542-8.748 19.542-19.542V186.3c0-10.793-8.748-19.542-19.542-19.542z" />

	</svg>
);
export const IconleftCaret = (props) => (
	<svg
		  viewBox="0 0 20 20"
		  className={props.className ? `icons ${props.className}` : 'icons'}
		  width={``}
		  height={props.size ? `${props.size}rem` : `1rem`}
		  fill={props.fill ? `${props.fill}` : `currentColor`}
		  onClick={props.doOnClick}
		  style={{ width: `20px`, height: `16px` }}
	>
		<path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
		<path fill="none" d="M0 0h24v24H0V0z" />
	</svg>
);
export const IconRightCaret = (props) => (
    <svg
		viewBox="0 0 20 20"
        className={props.className ? `icons ${props.className}` : 'icons'}
        width={``}
        height={props.size ? `${props.size}rem` : `1rem`}
        fill={props.fill ? `${props.fill}` : `currentColor`}
        onClick={props.doOnClick}
        style={{ width: `20px`, height: `16px` }}
    >
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        <path fill="none" d="M0 0h24v24H0V0z" />
    </svg>
);
export const IconClock = (props) => (
	<svg
		viewBox="0 0 24 24"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
	</svg>
);
export const IconEdit = (props) => (
	<svg
		viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>
		<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);
export const IconMoreVertical = (props) => (
	<svg
		viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>
		<path d="M0 0h24v24H0z" fill="none" />
		<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
	</svg>
);
export const IconTrash = (props) => (
	<svg
		viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `18px`, height: `20px` }}
	>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
	</svg>
);
export const IconAddImage = (props) => (
	<svg
		viewBox="0 0 20 20"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `20px` }}
	>
		<path fill="none" d="M0 0h24v24H0z" />
		<path d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z" />
	</svg>
);
export const IconDownCaret = (props) => (
	<svg
		viewBox="0 0 24 24"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `16px` }}
	>
		<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
		<path fill="none" d="M0 0h24v24H0V0z" />
	</svg>
);
export const IconEye = (props) => (
	<svg
		viewBox="0 0 24 24"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `17px`, height: `17px` }}
	>
		<path d="M0 0h24v24H0z" fill="none" />
		<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
	</svg>
);
export const IconPublish = (props) => (
	<svg
		viewBox="0 0 24 24"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `17px`, height: `17px` }}
	>
		<path d="M0 0h24v24H0z" fill="none" />
		<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
	</svg>
);
export const IconSettings = (props) => (
	<svg
		viewBox="0 0 54 54"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `15px`, height: `15px` }}
	>
		<path d="M51.22 21h-5.052c-.812 0-1.481-.447-1.792-1.197s-.153-1.54.42-2.114l3.572-3.571a2.763 2.763 0 00.814-1.966c0-.743-.289-1.441-.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933 0l-3.571 3.571a1.877 1.877 0 01-1.352.574c-.5 0-.997-.196-1.364-.539A1.873 1.873 0 0133 7.832V2.78A2.783 2.783 0 0030.22 0h-6.44A2.783 2.783 0 0021 2.78v5.052c0 1.218-.997 1.945-1.961 1.945-.354 0-.876-.1-1.351-.574l-3.571-3.571c-1.052-1.052-2.883-1.05-3.933 0l-4.553 4.553a2.764 2.764 0 00-.814 1.967c0 .742.289 1.44.814 1.966l3.572 3.571c.573.574.73 1.364.42 2.114S8.644 21 7.832 21H2.78A2.783 2.783 0 000 23.78v6.438A2.784 2.784 0 002.78 33h5.052c.812 0 1.481.447 1.792 1.197s.153 1.54-.42 2.114l-3.572 3.571a2.763 2.763 0 00-.814 1.966c0 .743.289 1.441.814 1.967l4.553 4.553c1.051 1.051 2.881 1.053 3.933 0l3.571-3.571a1.877 1.877 0 011.352-.574c.963 0 1.96.728 1.96 1.945v5.051A2.782 2.782 0 0023.78 54h6.439a2.784 2.784 0 002.78-2.781v-5.051c0-1.218.997-1.945 1.96-1.945.354 0 .877.1 1.352.574l3.571 3.571c1.052 1.052 2.883 1.05 3.933 0l4.553-4.553a2.764 2.764 0 00.814-1.967c0-.742-.289-1.44-.814-1.966l-3.572-3.571c-.573-.574-.73-1.364-.42-2.114S45.356 33 46.168 33h5.052A2.784 2.784 0 0054 30.219V23.78A2.783 2.783 0 0051.22 21zM34 27c0 3.859-3.141 7-7 7s-7-3.141-7-7 3.141-7 7-7 7 3.141 7 7z" />
	</svg>
);
export const IconFacebook = (props) => (
	<svg viewBox="0 0 96.124 96.123" {...props}
		 className={props.className ? `icons ${props.className}` : 'icons'}
		 width={18} height={18}
		 fill={props.fill ? `${props.fill}` : `currentColor`}
		 onClick={props.doOnClick}
		 >
		<path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 00-1.96 1.961v15.803a1.96 1.96 0 001.96 1.96H36.57v39.876a1.96 1.96 0 001.96 1.96h16.352a1.96 1.96 0 001.96-1.96V54.287h14.654a1.96 1.96 0 001.96-1.96l.006-15.803a1.963 1.963 0 00-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 001.959-1.96V1.98A1.96 1.96 0 0072.089.02z" />
	</svg>
);
export const IconLinkdin = (props) => (
	<svg viewBox="0 0 310 310" {...props}
		 className={props.className ? `icons ${props.className}` : 'icons'}
		 width={18} height={18}
		 fill={props.fill ? `${props.fill}` : `currentColor`}
		 onClick={props.doOnClick}
	>
		<path d="M72.16 99.73H9.927a5 5 0 00-5 5v199.928a5 5 0 005 5H72.16a5 5 0 005-5V104.73a5 5 0 00-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 00-5-5h-59.599a5 5 0 00-5 5v199.928a5 5 0 005 5h62.097a5 5 0 005-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 005 5H305a5 5 0 005-5V194.995c0-49.565-9.451-100.234-79.546-100.234z" />
	</svg>
);
export const IconTwitter = (props) => (
	<svg viewBox="-21 -81 681.335 681" {...props}
		 className={props.className ? `icons ${props.className}` : 'icons'}
		 width={18} height={18}
		 fill={props.fill ? `${props.fill}` : `currentColor`}
		 onClick={props.doOnClick}
	>
		<path d="M200.965 515.293c241.05 0 372.87-199.703 372.87-372.871 0-5.672-.116-11.32-.37-16.938a266.692 266.692 0 0065.37-67.863c-23.48 10.441-48.753 17.461-75.257 20.637 27.055-16.23 47.828-41.895 57.625-72.488a262.838 262.838 0 01-83.215 31.808c-23.914-25.473-57.965-41.402-95.664-41.402-72.367 0-131.058 58.687-131.058 131.031 0 10.29 1.152 20.29 3.398 29.883C205.746 151.61 109.16 99.465 44.531 20.168 33.281 39.531 26.79 62.031 26.79 86.039c0 45.461 23.137 85.606 58.316 109.082-21.5-.66-41.695-6.562-59.351-16.387-.02.551-.02 1.086-.02 1.672 0 63.469 45.172 116.461 105.145 128.469a131.531 131.531 0 01-34.559 4.61c-8.43 0-16.648-.829-24.632-2.364 16.683 52.07 65.066 89.961 122.425 91.024-44.855 35.156-101.36 56.097-162.77 56.097-10.562 0-21.003-.605-31.261-1.816 58 37.176 126.871 58.87 200.887 58.87" />
	</svg>
);
export const IconInstagram = (props) => (
	<svg viewBox="0 0 24 24" {...props}
		 className={props.className ? `icons ${props.className}` : 'icons'}
		 width={18} height={18}
		 fill={props.fill ? `${props.fill}` : `currentColor`}
		 onClick={props.doOnClick}
	>
		<path d="M12.004 5.838a6.157 6.157 0 00-6.158 6.158 6.157 6.157 0 006.158 6.158 6.157 6.157 0 006.158-6.158 6.157 6.157 0 00-6.158-6.158zm0 10.155a3.996 3.996 0 113.997-3.997 3.995 3.995 0 01-3.997 3.997z" />
		<path d="M16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941C-.283 4.325.012 7.435.012 11.996c0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z" />
		<circle cx={18.406} cy={5.595} r={1.439} />
	</svg>
);

