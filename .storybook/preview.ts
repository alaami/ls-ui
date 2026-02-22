import type { Preview } from "@storybook/react-native-web-vite";
import '../src/app/global.css';

const preview: Preview = {
    // Tree shaking seems to be discarding styles, make a reference to confuse it.
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    },
    
};
export default preview;

