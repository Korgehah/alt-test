import React from 'react';

/* styles */
import './assets/scss/index.scss';
/* components */
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Select } from './components/Select';
/* images */
import header_logo from './assets/images/logo.svg';

import axios from 'axios';

const domain = 'https://export.alt-test.ru';

axios
  .get(`${domain}/api/v1/public/user_category/input_list`)
  .then((response) => console.log(response));

const Header = () => {
  return (
    <header className='header'>
      <div className='wrapper header__wrapper'>
        <div className='header__logo-container'>
          <img className='header__logo' src={header_logo} alt='logo' />
        </div>
        <div className='header__menu'>
          <button className='button-container header__button-container'>
            <Button className='header__button'>
              Войти{' '}
              <svg
                className='header__button-icon'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.6669 2L16.2224 2C16.6939 2 17.1461 2.1873 17.4795 2.5207C17.8129 2.8541 18.0002 3.30628 18.0002 3.77778L18.0002 16.2222C18.0002 16.6937 17.8129 17.1459 17.4795 17.4793C17.1461 17.8127 16.6939 18 16.2224 18L12.6669 18'
                  stroke='#0071B8'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.22241 14.4446L12.6669 10.0001L8.22241 5.55566'
                  stroke='#0071B8'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12.6667 10H2'
                  stroke='#0071B8'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Button>
          </button>
          <button className='button-container header__button-container'>
            <Button className='header__switcher'>
              <svg
                className='header__switcher-flag'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.00002 15.9998C12.4183 15.9998 16 12.4181 16 7.99991C16 3.58168 12.4183 0 8.00002 0C3.58173 0 0 3.58168 0 7.99991C0 12.4181 3.58173 15.9998 8.00002 15.9998Z'
                  fill='#F0F0F0'
                />
                <path
                  d='M15.5024 10.7824C15.824 9.91577 16 8.9784 16 7.99985C16 7.0213 15.824 6.08393 15.5024 5.21729H0.497595C0.176032 6.08393 0 7.0213 0 7.99985C0 8.9784 0.176032 9.91577 0.497595 10.7824L8.00002 11.4781L15.5024 10.7824Z'
                  fill='#0052B4'
                />
                <path
                  d='M8.00243 16.0001C11.4422 16.0001 14.3745 13.8291 15.5049 10.7827H0.5C1.63035 13.8291 4.5627 16.0001 8.00243 16.0001Z'
                  fill='#D80027'
                />
              </svg>
              RU
              <svg
                className='header__switcher-arrow'
                width='8'
                height='4'
                viewBox='0 0 8 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.80541 0.186218C6.68099 0.0669523 6.51269 9.34599e-06 6.33726 9.34599e-06C6.16184 9.34599e-06 6.12683 0 6.12683 0L3.48523 9.34599e-06L0.876831 5.31672e-06C0.876831 5.31672e-06 0.841826 9.34599e-06 0.666397 9.34599e-06C0.490968 9.34599e-06 0.322667 0.0669523 0.198252 0.186218C0.136013 0.245746 0.0866121 0.316569 0.0528999 0.394602C0.0191876 0.472634 0.00183105 0.556331 0.00183105 0.640865C0.00183105 0.725398 0.0191876 0.809095 0.0528999 0.887128C0.0866121 0.96516 0.136013 1.03598 0.198252 1.09551L3.01376 3.81059C3.0755 3.8706 3.14894 3.91824 3.22986 3.95075C3.31078 3.98326 3.39757 4 3.48523 4C3.57289 4 3.65968 3.98326 3.7406 3.95075C3.82152 3.91824 3.89496 3.8706 3.9567 3.81059L6.80541 1.09551C6.86765 1.03598 6.91705 0.96516 6.95076 0.887128C6.98447 0.809095 7.00183 0.725398 7.00183 0.640865C7.00183 0.556331 6.98447 0.472634 6.95076 0.394602C6.91705 0.316569 6.86765 0.245746 6.80541 0.186218Z'
                  fill='#222B45'
                />
              </svg>
            </Button>
          </button>
        </div>
      </div>
    </header>
  );
};

const Form = () => {
  return (
    <form className='form'>
      <span className='form__head'>Заполните заявку</span>
      <div className='form__content'>
        <div className='form__section'>
          <div className='form__title'>Юридическое лицо</div>
          <Input placeholder={'Название юридического лица*'} />
          <div className='form__short-inputs'>
            <Select placeholder={'Категория*'} />
            <Select placeholder={'Страна*'} />
          </div>
        </div>
        <div className='form__section'>
          <div className='form__title'>Представитель юридического лица</div>
          <div className='form__short-inputs'>
            <Input placeholder={'Имя*'} />
            <Input placeholder={'Фамилия*'} />
            <Select placeholder={'Обращение*'} />
            <Select placeholder={'Предпочтительный язык*'} />
            <Input placeholder={'Должность*'} />
            <Input placeholder={'Ваш корпоративный e-mail*'} />
          </div>
        </div>
        <div className='form__section'>
          <div className='form__title'>Профессиональные интересы</div>
          <Input placeholder={'Целевые рынки*'} />
          <Input placeholder={'Интересующие отрасли*'} />
          <Input placeholder={'Сообщение'} />
        </div>
      </div>
    </form>
  );
};

const Footer = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

const App = () => {
  return (
    <div className='layout'>
      <Header />
      <main className='main'>
        <div className='wrapper main__wrapper'>
          <h1 className='main__title'>Запросить демо-доступ</h1>
          <h2 className='main__subtitle'>
            Доступ к платформе возможен исключительно для представителей
            юридических лиц или индивидуальных предпринимателей
          </h2>
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
