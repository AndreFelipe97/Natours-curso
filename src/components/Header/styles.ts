import styled from 'styled-components';
import BkgHeader from '../../assets/images/hero.jpg';
import { moveInRight, moveInLeft, moveInBottom } from './animations';

export const Header = styled.header`
    height: 95vh;
    background-image:
        linear-gradient(
            to right bottom,
            rgba(126, 213, 111, .8),
            rgba(40, 180, 131, .8)),
        url(${BkgHeader});
    background-size: cover;
    background-position: top;
    position: relative;

    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export const LogoBox = styled.div`
    position: absolute;
    top: 40px;
    left: 40px;

    .logo {
        height: 35px;
        animation: ${moveInRight} 1s ease-out;
    }
`;

export const TextBox = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .btn:link,
    .btn:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 15px 40px;
        display: inline-block;
        border-radius: 100px;
        transition: all .2s;
        position: relative;
    }

    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
    }

    .btn:active {
        transform: translateY(-1px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
    }

    .btn-white {
        background-color: #fff;
        color: #777;
    }

    .btn::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }

    .btn::after {
        background-color: #fff;
    }

    .btn:hover::after {
        transform: scale(1.4) scaleY(1.6);
        opacity: 0;
    }

    .btn-animated {
        animation: ${moveInBottom} .5s ease-out .75;
        animation-fill-mode: backwards;
    }
`;

export const HeadingPrimary = styled.h1`
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 60px;

    .heading-primary-main {
        display: block;
        font-size: 60px;
        font-weight: 400;
        letter-spacing: 35px;
        animation: ${moveInLeft} 1s ease-out;
    }

    .heading-primary-sub {
        display: block;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 17.4px;
        animation: ${moveInRight} 1s ease-out;
    }
`;