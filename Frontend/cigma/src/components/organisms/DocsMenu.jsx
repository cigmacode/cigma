import React from 'react';
import DocsItem from '../atoms/DocsItem';
import styles from '../../styles/organisms/DocsMenu.module.scss';
import NavLogo from '../atoms/NavLogo';
import { Link, NavLink } from 'react-router-dom';
function DocsMenu() {
    return (
        <div className={styles.menu}>
            <NavLink
                className={styles.logo}
                activeStyle={{ color: 'black' }}
                style={{ color: 'gray', textDecoration: 'none' }}
                to="/"
            >
                <NavLogo className={styles.logo} />
            </NavLink>
            <NavLink
                className={styles.link}
                activeStyle={{ color: 'black' }}
                style={{ color: 'gray', textDecoration: 'none' }}
                to="/docs/intro"
            >
                <DocsItem itemText={'소개'} />
            </NavLink>
            <NavLink
                className={styles.link}
                activeStyle={{ color: 'black' }}
                style={{ color: 'gray', textDecoration: 'none' }}
                to="/docs/setting"
            >
                <DocsItem itemText={'환경 설정하기'} />
            </NavLink>
        </div>
    );
}

export default DocsMenu;