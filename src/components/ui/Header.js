import React from 'react';
import { IonIcon } from '@ionic/react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li className="header-top-item">
              <IonIcon name="call-outline" aria-hidden="true" />
              <p className="item-title">اتصل بنا:</p>
              <a href="tel:0607257312" className="item-link">0607257312</a>
            </li>
            <li className="header-top-item">
              <IonIcon name="time-outline" aria-hidden="true" />
              <p className="item-title">ساعة الافتتاح:</p>
              <p className="item-text"> 08 am - 09 pm , السبت - الاثنين</p>
            </li>
            <li>
              <ul className="social-list">
                <li>
                  <a href="./" className="social-link">
                    <IonIcon name="logo-facebook" />
                  </a>
                </li>
                <li>
                  <a href="./" className="social-link">
                    <IonIcon name="logo-instagram" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-bottom" data-header>
        <div className="container">
          <a href="./" className="logo">
            AL AKHAWAYN
            <span className="span">Hair Salon</span>
          </a>
          <nav className="navbar container" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-link>
                  الصفحة الرئيسية
                </a>
              </li>
              <li className="navbar-item">
                <a href="#services" className="navbar-link" data-nav-link>
                  خدمات
                </a>
              </li>
              <li className="navbar-item">
                <a href="#pricing" className="navbar-link" data-nav-link>
                  الأثمنة
                </a>
              </li>
              <li className="navbar-item">
                <a href="#gallery" className="navbar-link" data-nav-link>
                  البوم الصور
                </a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link" data-nav-link>
                  معلو
                  م
                </a>
              </li>
              <li className="navbar-item">
                <a href="#testimonials" className="navbar-link" data-nav-link>
                  التعليقات
                </a>
              </li>
              <li className="navbar-item">
                <a href="#contact" className="navbar-link" data-nav-link>
                  اتصل بنا
                </a>
              </li>
            </ul>
          </nav>
          <div className="menu-toggle" data-menu-toggle>
            <ion-icon name="menu-outline" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;