import React from 'react';
import profileImage from '../assets/profile.png';

export default function Hero() {
    return (
        <header className="hero">
            <h1 className="hero-title">안녕하세요,</h1>
            <h2 className="hero-subtitle">창의적인 프론트엔드 개발자 최재성입니다.</h2>
            <img src={profileImage} alt="Profile" className="profile-image" />
            <p className="hero-description">사용자 경험을 고민하고, 코드를 통해 감동을 만듭니다.</p>
        </header>
    );
}
