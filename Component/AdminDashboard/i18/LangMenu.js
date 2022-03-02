import React from 'react';
import TestLang from './TestLang'
import { withTranslation} from 'react-i18next';
import Admindashboard from '../Admindashboard';
const LangMenu = (props) => {
  console.log(props)
    const {i18n } = props;
    console.log(i18n)
const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
       <div>
        {/* <TestLang /> */}
        
        <button style={{float:'top'}} onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>French</button><br/>

        <Admindashboard props={props}/>
      </div>
      
  );
}

export default withTranslation()(LangMenu);