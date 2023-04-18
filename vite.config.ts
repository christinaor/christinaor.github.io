import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/sent': "http://localhost:3333"
    }
  },
  plugins: [react(), EnvironmentPlugin('all', {prefix: ''})],
})


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// import { defineConfig, loadEnv } from 'vite';

// export default ({ mode }) => {
//     // Load app-level env vars to node-level env vars.
//     process.env = {...process.env, ...loadEnv(mode, process.cwd())};

//     // console.log(process.env)

//     return defineConfig({
//       // To access env vars here use process.env.KEY_IN_ENV
//     });
// }