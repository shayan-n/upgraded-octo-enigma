/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */
// import * as React from 'react';
// import {RemixBrowser} from "@remix-run/react";
// import {startTransition, StrictMode} from "react";
// import {hydrateRoot} from "react-dom/client";
// import * as i18n from "./i18n";
// import i18next from "i18next";
// import {I18nextProvider, initReactI18next} from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";
// import {getInitialNamespaces} from "remix-i18next/client";
//
// import {CacheProvider} from '@emotion/react';
// import {ThemeProvider} from '@mui/material/styles';
// import {Experimental_CssVarsProvider as CssVarsProvider} from '@mui/material/styles';
//
// import CssBaseline from '@mui/material/CssBaseline';
// import ClientStyleContext from './src/ClientStyleContext';
// import createEmotionCache from './src/createEmotionCache';
// import theme from './src/theme';
// // Import the library
// import {library} from '@fortawesome/fontawesome-svg-core'
// // Import whichever icons you want to use
// import {
//     faCheckSquare, faCoffee, faBlog, faPenNib, faPencil, faBoxesStacked, faBox, faTag,
//     faPlus
// } from '@fortawesome/free-solid-svg-icons'
// import {fab} from "@fortawesome/free-brands-svg-icons";
// import {MuiProvider} from "~/MuiProvider";
//
// library.add(fab, faCheckSquare, faCoffee, faBlog, faPenNib, faPencil, faBoxesStacked, faBox, faTag,
//     faPlus
// )
//
// interface ClientCacheProviderProps {
//     children: React.ReactNode;
// }
//
// function ClientCacheProvider({children}: ClientCacheProviderProps) {
//     const [cache, setCache] = React.useState(createEmotionCache());
//
//     const clientStyleContextValue = React.useMemo(
//         () => ({
//             reset() {
//                 setCache(createEmotionCache());
//             },
//         }),
//         [],
//     );
//
//     return (
//         <ClientStyleContext.Provider value={clientStyleContextValue}>
//             <CacheProvider value={cache}>{children}</CacheProvider>
//         </ClientStyleContext.Provider>
//     );
// }
//
// async function hydrate() {
//
//     await i18next
//         .use(initReactI18next) // Tell i18next to use the react-i18next plugin
//         .use(LanguageDetector) // Setup a client-side language detector
//         .use(Backend) // Setup your backend
//         .init({
//             ...i18n, // spread the configuration
//             // This function detects the namespaces your routes rendered while SSR use
//             ns: getInitialNamespaces(),
//             backend: {loadPath: "/locales/{{lng}}/{{ns}}.json"},
//             detection: {
//                 // Here only enable htmlTag detection, we'll detect the language only
//                 // server-side with remix-i18next, by using the `<html lang>` attribute
//                 // we can communicate to the client the language detected server-side
//                 order: ["htmlTag"],
//                 // Because we only use htmlTag, there's no reason to cache the language
//                 // on the browser, so we disable it
//                 caches: [],
//             },
//         });
//
//     startTransition(() => {
//         hydrateRoot(
//             document,
//             <I18nextProvider i18n={i18next}>
//                 <ClientCacheProvider>
//                     <ThemeProvider theme={theme}>
//                         <StrictMode>
//                             <CssBaseline/>
//                             <MuiProvider>
//                                 <RemixBrowser/>
//                             </MuiProvider>
//                         </StrictMode>
//                     </ThemeProvider>
//                 </ClientCacheProvider>
//             </I18nextProvider>
//         );
//     });
// }

// if (window.requestIdleCallback) {
//     window.requestIdleCallback(hydrate);
// } else {
//     // Safari doesn't support requestIdleCallback
//     // https://caniuse.com/requestidlecallback
//     window.setTimeout(hydrate, 1);
// }

import {RemixBrowser} from "@remix-run/react";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {startTransition, StrictMode} from "react";
import {hydrateRoot} from "react-dom/client";
import {I18nextProvider, initReactI18next} from "react-i18next";
import {getInitialNamespaces} from "remix-i18next/client";
import * as i18n from "~/i18n";
import {MuiProvider} from "~/MuiProvider";

async function main() {
    // eslint-disable-next-line import/no-named-as-default-member
    await i18next
        .use(initReactI18next) // Tell i18next to use the react-i18next plugin
        .use(I18nextBrowserLanguageDetector) // Setup a client-side language detector
        .init({
            ...i18n,
            ns: getInitialNamespaces(),
            detection: {
                // Here only enable htmlTag detection, we'll detect the language only
                // server-side with remix-i18next, by using the `<html lang>` attribute
                // we can communicate to the client the language detected server-side
                order: ["htmlTag"],
                // Because we only use htmlTag, there's no reason to cache the language
                // on the browser, so we disable it
                caches: [],
            },
        });

    startTransition(() => {
        hydrateRoot(
            document,
            <I18nextProvider i18n={i18next}>
                <StrictMode>
                    <MuiProvider>
                        <RemixBrowser/>
                    </MuiProvider>
                </StrictMode>
            </I18nextProvider>,
        );
    });
}

main().catch((error) => console.error(error));
