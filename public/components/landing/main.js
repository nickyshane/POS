import Logo1 from '../../icons/logo1.png';
import InfoBTN from '../../icons/info_button.png';
import styles from './component.module.css';

export default function Main(root) {
    root.innerHTML = `
        <img class="${styles['logo']}" src="${Logo1}" />
        <div class="${styles['unli']}">
            <div class="${styles['u']}">U</div>
            <div class="${styles['nli']}">nli</div>
        </div>
        <div class="${styles['wings']}">
            <div class="${styles['w']}">W</div> 
            <div class="${styles['ings']}">ings</div>
        </div>
        <a href="../about-us/about-us.html">
            <img class="${styles['info-button']}" src="${InfoBTN}" />
        </a>
        <div class="${styles['where-hunger-meets-unlimited-wings']}">
            Where hunger meets Unlimited Wings
        </div>
    `;

    root.className = styles['home']
}