import React, { Component } from 'react';
import Section from '../../../Section';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail, faHiking, faUtensilSpoon, faHome } from '@fortawesome/free-solid-svg-icons';
export default class BulletsSection extends Component {
  render() {
    return (
      <Section className="bullets-section">
        <h2>מה תמצאו בMapo?</h2>
        <p>
          בתור ישראלי במדינה זרה אתה מחפש את השפה שלך ואתה רוצה למצוא את כל הדברים השווים סביבך.
          MaPo מגישה לך הכל במקום אחד, עם המלצות מישראלים כמוך.
        </p>
        <ul>
          <li>
            <div className="icon">
            <FontAwesomeIcon icon={faHiking} />
            </div>
            <strong>אטרקציות</strong>
            <p>כל האטרקציות החמות נמצאות בMaPo: אתרי תיירות, מסלולים, פארקים ועוד.. </p>
          </li>
          <li>
          <div className="icon">
            <FontAwesomeIcon icon={faCocktail} />
            </div>
            <strong>בילויים</strong>
            <p>ברים, הופעות, ומועדונים הם רק חלק מנקודות הבילוי שתמצאו בMaPo.</p>
          </li>
          <li>
          <div className="icon">
            <FontAwesomeIcon icon={faUtensilSpoon} />
            </div>
            <strong>מסעדות</strong>
            <p>
              כל המסעדות ודוכני המזון הכי טעימים במקום אחד, ביחד עם המלצות מישראלים שיחסכו לך זמן
              וקלקולי קיבה.
            </p>
          </li>
          <li>
          <div className="icon">
            <FontAwesomeIcon icon={faHome} />
            </div>
            <strong>לינה</strong>
            <p>
              מלונות , דירות , אכסניות , ואפילו גסטהאוסים, עומדים לרשותכם עם כל הפרטים שאתם צריכים.
            </p>
          </li>
        </ul>
      </Section>
    );
  }
}
