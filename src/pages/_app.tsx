/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Nav from '../components/nav';

interface AppPropTypes {
  Component: React.FC<any>;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppPropTypes): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
