import { h } from "preact";
import style from "./style";

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<img src="https://vonder-challenge.s3-ap-southeast-1.amazonaws.com/Content+Banpu/Core+Value/Character/Hato-character-3.png"/>
	</div>
);

export default Home;