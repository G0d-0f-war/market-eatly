import styles from './FooterPenis.module.scss';
import Logo from '../../../../shared/ui/Logo/Logo';
import { BrowserRouter, Link } from 'react-router-dom';
export default function FooterPenis () { 
    const footerArray = [
        {name: 'Blog', path:'/blog'}, 

        {name: 'Pricing', path:'/pricing'}, 
        
        {name:'About us', path:'/'},

        {name: 'Contact', path:'/contact'}];

    return ( 
            <div className={styles.footerBlock}>
            <Logo />
            <ul className={styles.footerArray}>
            {footerArray.map((item, i) => (
                <Link to={item.path} li key={i} className={styles.item}>
                    {item.name}
                </Link>
            ))}
            </ul>
        </div>
    )
};