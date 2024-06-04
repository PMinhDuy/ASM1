import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { I18nextProvider, useTranslation } from 'react-i18next';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { MainErrorFallback } from './shared/components/errors/main';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { StyleProvider } from '@ant-design/cssinjs';
import { createRoot } from 'react-dom/client';
import { queryClient } from './apis/queryClient';
import { store } from './store/store';

const Main = () => {
  const { i18n } = useTranslation();

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <HelmetProvider>
        <I18nextProvider i18n={i18n}>
          <ReduxProvider store={store}>
            <ApolloProvider client={client}>
              <QueryClientProvider client={queryClient}>
                <StyleProvider hashPriority="high">
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </StyleProvider>
              </QueryClientProvider>
            </ApolloProvider>
          </ReduxProvider>
        </I18nextProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
