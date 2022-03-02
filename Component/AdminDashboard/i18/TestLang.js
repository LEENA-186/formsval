import React from 'react';
import { withTranslation} from 'react-i18next';

class TestLang extends React.Component {
  
  NextHandler = () => {
  }

  render() {
    console.log(this.props, 'props')
    const { t } = this.props;
    return (
      <div>
          <label>
            {t('home.Hello')}
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          
          <button onClick={this.NextHandler}>
            {t('home.description')}
          </button>
      
          <label>
            {t('home.GoodMorning')}
          </label>

       </div>
    )
    }
  }


export default withTranslation()(TestLang);