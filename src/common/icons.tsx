import * as React from "react";


export const IconRecommend = (props) => (
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `24px` }}
	>
		<path fill="none" d="M0 0h24v24H0V0z" viewBox="0 0 24 24" />
		<path d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z" />
	</svg>
);
export const IconReport = (props) => (
	<svg
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
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `24px` }}
	>

			<path fill="none" d="M0 0h24v24H0V0z" />
			<path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" />

	</svg>
);
export const IconLikeFilled = (props) => (
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `24px` }}
	>

			<path fill="none" d="M24 24H0V0h24v24z" />
			<path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 00-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84A2.34 2.34 0 009.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z" />

	</svg>
);
export const IconBookMark = (props) => (
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `24px` }}
	>

			<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
			<path d="M0 0h24v24H0z" fill="none" />

	</svg>
);
export const IconAttachment = (props) => (
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `24px` }}
	>
		<svg width={24} height={24} {...props}>
			<path fill="none" d="M0 0h24v24H0V0z" />
			<path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 015 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 005 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
		</svg>
	</svg>
);
export const IconFileInsert = (props) => (
	<svg
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
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `24px` }}
	>

			<circle cx={12} cy={12} r={3.2} />
			<path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
			<path d="M0 0h24v24H0z" fill="none" />

	</svg>
);
export const IconFiledownload = (props) => (
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `24px` }}
	>

			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />

	</svg>
);
export const IconGoogle = (props) => (
	<svg viewBox="0 0 512 512"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `24px`, height: `24px` }}
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
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `20px` }}
	>
		<path
			d="M10 6H6v4H4V6H0V4h4V0h2v4h4v2z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);
export const IconDown = (props) => (
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `39`, height: `24` }}
	>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
	</svg>
);
export const IconAttach = (props) => (
	<svg  viewBox="0 0 512.092 512.092"
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={``}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `20px`, height: `` }}
	>
		<path d="M312.453 199.601a116.167 116.167 0 00-20.053-16.128 119.472 119.472 0 00-64.427-18.859 118.952 118.952 0 00-84.48 34.987L34.949 308.23a119.466 119.466 0 00-34.91 84.318c-.042 65.98 53.41 119.501 119.39 119.543a118.7 118.7 0 0084.395-34.816l89.6-89.6a8.534 8.534 0 00-6.059-14.592h-3.413a143.626 143.626 0 01-54.613-10.581 8.533 8.533 0 00-9.301 1.877l-64.427 64.512c-20.006 20.006-52.442 20.006-72.448 0-20.006-20.006-20.006-52.442 0-72.448l108.971-108.885c19.99-19.965 52.373-19.965 72.363 0 13.472 12.679 34.486 12.679 47.957 0a34.134 34.134 0 009.899-21.675 34.137 34.137 0 00-9.9-26.282z" />
		<path d="M477.061 34.993c-46.657-46.657-122.303-46.657-168.96 0l-89.515 89.429a8.533 8.533 0 00-1.792 9.387 8.532 8.532 0 008.021 5.205h3.157a143.357 143.357 0 0154.528 10.667 8.533 8.533 0 009.301-1.877l64.256-64.171c20.006-20.006 52.442-20.006 72.448 0 20.006 20.006 20.006 52.442 0 72.448l-80.043 79.957-.683.768-27.989 27.819c-19.99 19.965-52.373 19.965-72.363 0-13.472-12.679-34.486-12.679-47.957 0a34.139 34.139 0 00-9.899 21.845 34.137 34.137 0 009.899 26.283 118.447 118.447 0 0034.133 23.893c1.792.853 3.584 1.536 5.376 2.304 1.792.768 3.669 1.365 5.461 2.048a67.799 67.799 0 005.461 1.792l5.035 1.365c3.413.853 6.827 1.536 10.325 2.133 4.214.626 8.458 1.025 12.715 1.195H284.461l5.12-.597c1.877-.085 3.84-.512 6.059-.512h2.901l5.888-.853 2.731-.512 4.949-1.024h.939a119.456 119.456 0 0055.381-31.403l108.629-108.629c46.66-46.657 46.66-122.303.003-168.96z" />

	</svg>
);
export const IconUpload = (props) => (
	<svg  viewBox="0 0 512 512"
		  className={props.className ? `icons ${props.className}` : 'icons'}
		  width={``}
		  height={props.size ? `${props.size}rem` : `1rem`}
		  fill={props.fill ? `${props.fill}` : `currentColor`}
		  onClick={props.doOnClick}
		  style={{ width: `20px`, height: `` }}
	>
		<path d="M259.257 0c-10.794 0-19.542 8.748-19.542 19.542v310.066c0 10.794 8.748 19.542 19.542 19.542s19.542-8.748 19.542-19.542V19.542C278.799 8.748 270.051 0 259.257 0z" />
		<path d="M380.73 106.224L272.598 5.257c-7.511-7.009-19.164-7.009-26.675 0L137.79 106.224c-7.888 7.367-8.318 19.731-.951 27.619a19.475 19.475 0 0014.285 6.208c4.781 0 9.569-1.739 13.334-5.257l94.798-88.519 94.798 88.519c7.901 7.367 20.258 6.937 27.619-.951 7.362-7.888 6.945-20.252-.943-27.619zM454.677 166.758H350.453c-10.794 0-19.542 8.748-19.542 19.542 0 10.794 8.748 19.542 19.542 19.542h84.682v267.074H76.865V205.842h84.682c10.794 0 19.542-8.748 19.542-19.542 0-10.794-8.748-19.542-19.542-19.542H57.323c-10.794 0-19.542 8.748-19.542 19.542v306.158c0 10.794 8.748 19.542 19.542 19.542h397.354c10.794 0 19.542-8.748 19.542-19.542V186.3c0-10.793-8.748-19.542-19.542-19.542z" />

	</svg>
);

