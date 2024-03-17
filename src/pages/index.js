import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box min-width="100px" min-height="100px">
			<Text margin="0px 0px 0px 0px" font="14px --fontFamily-googlePlayfairDisplay">
				Fenrisk Five
			</Text>
		</Box>
		<Box min-width="100px" min-height="100px" display="flex" width="100%">
			<Box
				min-width="100px"
				min-height="100px"
				width="65%"
				margin="2px 2px 2px 2px"
				border-radius="5px"
				border-color="#e6e6e6"
				border-width="1px"
				border-style="solid"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				width="35%"
				margin="2px 2px 2px 2px"
				border-width="1px"
				border-style="solid"
				border-color="#e6e6e6"
				border-radius="5px"
			/>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65dffe620072400020eaa149"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});