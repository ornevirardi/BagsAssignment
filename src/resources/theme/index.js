import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    purpleTxt: '#7B5BE4',
  },
};

const styles = {
  global: {
    body: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
    },
  },
};

export const theme = extendTheme({ colors, styles });
