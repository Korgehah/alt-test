import { useEffect, useState } from 'react';
import axios from 'axios';

/* styles */
import './assets/scss/index.scss';
/* components */
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Select } from './components/Select';
import { Header } from './components/Header';
import { Checkbox } from './components/Checkbox';
import { Footer } from './components/Footer';

interface FormProps {
  categories: { id: string; name: string }[];
  countries: { id: string; name: string }[];
  languages: { id: string; name: string }[];
}

const Form = ({ categories, countries, languages }: FormProps) => {
  return (
    <form className='form'>
      <span className='form__head'>Заполните заявку</span>
      <div className='form__content'>
        <div className='form__section'>
          <div className='form__title'>Юридическое лицо</div>
          <Input placeholder={'Название юридического лица*'} />
          <div className='form__short-inputs'>
            <Select placeholder='Категория*' selectItems={categories} />
            <Select placeholder='Страна*' selectItems={countries} />
          </div>
        </div>
        <div className='form__section'>
          <div className='form__title'>Представитель юридического лица</div>
          <div className='form__short-inputs'>
            <Input placeholder='Имя*' />
            <Input placeholder='Фамилия*' />
            <Select
              placeholder='Обращение*'
              selectItems={[
                { id: '1', name: 'мужчина' },
                { id: '2', name: 'женщина' },
              ]}
            />
            <Select
              placeholder='Предпочтительный язык*'
              selectItems={languages}
            />
            <Input placeholder='Должность*' />
            <Input placeholder='Ваш корпоративный e-mail*' />
          </div>
        </div>
        <div className='form__section'>
          <div className='form__title'>Профессиональные интересы</div>
          <Input placeholder='Целевые рынки*' />
          <Input placeholder='Интересующие отрасли*' />
          <Input placeholder='Сообщение' />
        </div>
        <Checkbox>
          Подтверждаю, что являюсь уполномоченным представителем указанного
          юридического лица или индивидуального предпринимателя
        </Checkbox>
        <div className='form__button-section'>
          <Checkbox smallText>
            Нажимая кнопку “Запросить демо-доступ” Вы принимаете{' '}
            <a className='checkbox__inner-link' href='#'>
              пользовательское соглашение
            </a>{' '}
            и подтверждаете согласие с{' '}
            <a className='checkbox__inner-link' href='#'>
              правилами использования и обработки персональных данных
            </a>
          </Checkbox>
          <button className='button-container form__button-container'>
            <Button className='form__button'>Запросить демо-доступ</Button>
          </button>
        </div>
      </div>
    </form>
  );
};

const App = () => {
  const [categories, setCategories] = useState<[]>([]);
  const [countries, setCountries] = useState<[]>([]);
  const [languages, setLanguages] = useState<[]>([]);
  const url = 'https://export.alt-test.ru';

  const getAllCategories = () => {
    axios
      .get(`${url}/api/v1/public/user_category/input_list`)
      .then((response) => {
        setCategories(response.data.data);
      });
  };

  const getAllCountries = () => {
    axios.get(`${url}/api/v1/public/country/input_list`).then((response) => {
      setCountries(response.data.data);
    });
  };

  const getAllLanguages = () => {
    axios.get(`${url}/api/v1/public/lang/input_list`).then((response) => {
      setLanguages(response.data.data);
    });
  };

  useEffect(() => {
    getAllCategories();
    getAllCountries();
    getAllLanguages();
  }, []);

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
          <Form
            categories={categories}
            countries={countries}
            languages={languages}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { App };
