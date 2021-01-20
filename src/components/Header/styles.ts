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
    top: 4rem;
    left: 4rem;

    .logo {
        height: 3.5rem;
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
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
    }

    .btn:hover {
        transform: translateY(-.3rem);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
    }

    .btn:active {
        transform: translateY(-.1rem);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
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
        border-radius: 10rem;
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
    margin-bottom: 6rem;

    .heading-primary-main {
        display: block;
        font-size: 6rem;
        font-weight: 400;
        letter-spacing: 3.5rem;
        animation: ${moveInLeft} 1s ease-out;
    }

    .heading-primary-sub {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1.74rem;
        animation: ${moveInRight} 1s ease-out;
    }
`;