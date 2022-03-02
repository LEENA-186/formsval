import React,{Suspense} from 'react';
import i18n  from '../../../config/I18n';
import LangMenu from './LangMenu'
import { I18nextProvider } from 'react-i18next';


function I18Example() {
  return ( 
   
    <I18nextProvider i18n={i18n}>
    <Suspense fallback="loading">
        <LangMenu />
    </Suspense>
    </I18nextProvider>
   
  );
}

export default I18Example;
