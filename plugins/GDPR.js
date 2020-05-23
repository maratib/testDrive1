import Vue from "vue";
import vueAnalytics from "vue-analytics";

const getGDPR = localStorage.getItem('GDPR:accepted');

if (typeof getGDPR !== 'undefined' && getGDPR === 'true') {
	Vue.use(vueAnalytics, {
		id: 'UA-165709708-1',
		disabled: false,
		debug: {
			enabled: false,
			trace: false,
			sendHintTask: false
		}
	});
} else if (typeof getGDPR !== 'undefined' && getGDPR === 'false') {
	Vue.use(vueAnalytics, {
		id: 'UA-165709708-1',
		disabled: true,
		debug: {
			enabled: false,
			trace: false,
			sendHintTask: false
		}
	});
}