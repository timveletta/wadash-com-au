import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import vercel from '@astrojs/vercel/static';

// https://astro.build/config

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://wadash.com.au',
	integrations: [tailwind(), react()],
	output: 'static',
	adapter: vercel(),
});
