import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./layout";
import {ThemeProvider} from "@mui/styles";
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./theme/theme";
import {SWRConfig} from 'swr'
import {BrowserRouter} from "react-router-dom";
import {ToastContainer,Bounce} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Box} from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
            <SWRConfig
                value={{
                    fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
                    refreshInterval: 3000,
                    provider: () => new Map()
                }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <ToastContainer position="top-left"
                                    transition={Bounce}
                                    autoClose={5000}
                                    draggable={false}
                                    closeButton={false}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    pauseOnFocusLoss
                                    theme="colored"
                    />
                    <Suspense fallback={<div>Loading ...</div>}>
                        <BrowserRouter>
                            <Layout>
                                <Box className='background-body' />
                                <App/>
                            </Layout>
                        </BrowserRouter>
                    </Suspense>
                </ThemeProvider>
            </SWRConfig>
    </React.StrictMode>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
