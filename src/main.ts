import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';

import '@/assets/app.css';
import { ViteSetupModule } from './types/ViteSetupModule';
import { extendedRoutes } from '@/router/index';

export const createApp = ViteSSG(
	App,
  { routes: extendedRoutes },
	async ctx => {
		Object.values(
			import.meta.glob<{ install: ViteSetupModule }>('./modules/*.ts', {
				eager: true,
			})
		).map(i => i.install?.(ctx));
	},
	{}
);
