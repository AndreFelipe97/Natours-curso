import React from 'react';

import logoWhite from '../../assets/images/logo-white.png'
import { Header, LogoBox, TextBox, HeadingPrimary } from './styles';

const HeaderComponent: React.FC = () => {
    return (
        <Header>
            <LogoBox>
                <img src={logoWhite} alt="logo" className="logo" />
            </LogoBox>

            <TextBox>
                <HeadingPrimary>
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">is where life happens</span>
                </HeadingPrimary>
                <a href="#" className="btn btn-white btn-animated">Discorver our tours</a>
            </TextBox>
        </Header>
    );
}

export default HeaderComponent;