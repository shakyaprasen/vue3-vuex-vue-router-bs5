import HelloWorld from "../components/HelloWorld.vue";
import ByeWorld from "../components/ByeWorld.vue";

export default [
	{ path: '/bye', component: ByeWorld},
	{ path: '/', component: HelloWorld},
];
