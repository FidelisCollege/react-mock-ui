import * as React from "react";

export const Logo = (props) => (
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `8rem`, height: `1rem` }}
	>
		<g data-name="Group 4">
			<path
				d="M71.536 16.609h-3.312V.288h5.64l2.88 11.9 2.88-11.9h5.64v16.319h-3.312V3.988h-.36l-3.192 11.9h-3.312l-3.192-11.9h-.36v12.62zm19.224 0h-3.312L91.124.288h6.288l3.672 16.319h-3.316l-.644-2.951h-5.716l-.648 2.952zm2.928-13.585l-1.656 7.752h4.464L94.84 3.024zm11.447 13.584h-3.431l4.7-7.824-4.7-8.496h3.672l3.024 6 3.1-6h3.424l-4.7 8.328 4.7 7.99h-3.671l-3.021-5.638-3.1 5.639z"
				fill="#ed6738"
			/>
			<path
				d="M42.624 16.9a6.79 6.79 0 0 1-4.668-1.4 5.7 5.7 0 0 1-1.548-4.4V.288h3.312V11.16c0 1.895.977 2.856 2.9 2.856s2.9-.961 2.9-2.856V.288h3.32v10.8a5.7 5.7 0 0 1-1.548 4.4 6.79 6.79 0 0 1-4.668 1.412zm-14.376 0a22.708 22.708 0 0 1-4.585-.576l-.864-.167.337-2.569a40.212 40.212 0 0 0 4.919.432c1.688 0 2.544-.71 2.544-2.111a1.414 1.414 0 0 0-.588-1.2 8.41 8.41 0 0 0-2.34-.936 9.575 9.575 0 0 1-3.924-1.884 4.02 4.02 0 0 1-1.14-3.036A4.427 4.427 0 0 1 24.1 1.2 6.345 6.345 0 0 1 28.176 0a27.177 27.177 0 0 1 4.512.48l.864.168-.264 2.616c-2.24-.255-3.847-.384-4.776-.384-1.736 0-2.616.581-2.616 1.728a1.316 1.316 0 0 0 .648 1.176A16.961 16.961 0 0 0 29.58 6.96a8.421 8.421 0 0 1 3.348 1.74 4.12 4.12 0 0 1 .959 2.988 4.828 4.828 0 0 1-1.56 3.888 6.131 6.131 0 0 1-4.079 1.324zm27.311-.287h-3.311V.288h6.336A6.159 6.159 0 0 1 62.9 1.632a5.279 5.279 0 0 1 1.44 4.032 5.185 5.185 0 0 1-2.4 4.7l2.327 6.238h-3.623l-1.9-5.472H55.56v5.472zm0-13.488V8.3h3.073a2.116 2.116 0 0 0 1.751-.72 2.959 2.959 0 0 0 .576-1.9 2.745 2.745 0 0 0-.612-1.872 2.232 2.232 0 0 0-1.764-.7zM10.176 16.609H6.864V.288h5.592l3.936 13.44h.24V.288h3.312v16.319H14.5L10.416 3.168h-.239v13.44zm-6.864 0H0V.288h3.312v16.319z"
				fill="#7e2bd1"
			/>
		</g>
	</svg>
);
export const Comment = (props) => (
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `8rem`, height: `1rem` }}
	>
		<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);
export const Recommend = (props) => (
	<svg
		className={props.className ? `icons ${props.className}` : 'icons'}
		width={`8rem`}
		height={props.size ? `${props.size}rem` : `1rem`}
		fill={props.fill ? `${props.fill}` : `currentColor`}
		onClick={props.doOnClick}
		style={{ width: `8rem`, height: `1rem` }}
	>
		<path fill="none" d="M0 0h24v24H0V0z" viewBox="0 0 24 24" />
		<path d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z" />
	</svg>
);


