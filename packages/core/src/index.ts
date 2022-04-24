import 'module-alias/register.js';

import Koa from 'koa';

// eslint-disable-next-line import/order
import { configDotEnv } from './env-set/dot-env';

configDotEnv();

/* eslint-disable import/first */
import initApp from './app/init';
import { initConnectors } from './connectors';
import envSet from './env-set';
import initI18n from './i18n/init';
/* eslint-enable import/first */

(async () => {
  try {
    await envSet.load();
    const app = new Koa({
      proxy: envSet.values.trustingTlsOffloadingProxies,
    });
    await initConnectors();
    await initI18n();
    await initApp(app);
  } catch (error: unknown) {
    console.log('Error while initializing app', error);
  }
})();
