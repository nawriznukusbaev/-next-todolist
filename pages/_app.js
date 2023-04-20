import { Provider } from 'react-redux';
import {wrapper} from "../redux/store";


function MyApp({ Component, ...rest }) {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;