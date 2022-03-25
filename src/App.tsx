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
import { Multiselect } from './components/Multiselect';
import { useForm } from 'react-hook-form';
import { Footer } from './components/Footer';
import { Textarea } from './components/Textarea';
import { Error } from './components/Error';

const url = 'https://export.alt-test.ru';

interface FormProps {
  categories: { id: string; name: string }[];
  countries: { id: string; name: string }[];
  languages: { id: string; name: string }[];
  industries: { id: string; name: string }[];
  register: Function;
  handleSubmit: Function;
  errors: { [x: string]: any };
  setValue: Function;
  setError: Function;
}

const Form = ({
  categories,
  countries,
  languages,
  industries,
  register,
  handleSubmit,
  errors,
  setValue,
  setError,
}: FormProps) => {
  const [isDisabled, setIsDisabled] = useState<boolean[]>([false, false]);
  const [flag, setFlag] = useState(true);

  const countryCodes: string[] = [];
  const industryCodes: string[] = [];
  const userCountryCodes: string[] = [];
  const userCategoryCodes: string[] = [];
  const langCodes: string[] = [];

  const onSubmit = (data: any) => {
    const getCodes = (
      array: { name: string; id: string }[],
      codesFor: string | string[],
      arrayWithCodes: string[]
    ) => {
      array.forEach((item) => {
        if (codesFor.includes(item.name)) {
          arrayWithCodes.push(item.id);
        }
      });
    };

    getCodes(countries, data.country, countryCodes);
    getCodes(industries, data.industry, industryCodes);
    getCodes(categories, data.user_category, userCategoryCodes);
    getCodes(countries, data.user_country, userCountryCodes);
    getCodes(languages, data.lang, langCodes);

    const dataToSend = { ...data };
    dataToSend.country = countryCodes;
    dataToSend.industry = industryCodes;
    dataToSend.user_category = userCategoryCodes.join();
    dataToSend.user_country = userCountryCodes.join();
    dataToSend.lang = langCodes.join();

    const sendForm = () => {
      axios
        .post(`${url}/api/v1/public/auth/registration_demo`, dataToSend)
        .then((response) => console.log(response))
        .catch((error) => {
          setError(error.message);
        });
    };

    if (flag) {
      setFlag(false);
      sendForm();
      setTimeout(() => setFlag(true), 4000);
    }
  };

  return (
    <form className='form' noValidate onSubmit={handleSubmit(onSubmit)}>
      <span className='form__head'>Заполните заявку</span>
      <div className='form__content'>
        <div className='form__section'>
          <div className='form__title'>Юридическое лицо</div>
          <Input
            placeholder='Название юридического лица*'
            register={register}
            errors={errors}
            required
            name='company_name'
            validationType='company'
            errorText='Введите имя компании'
          />
          <div className='form__short-inputs'>
            <Select
              placeholder='Категория*'
              selectItems={categories}
              register={register}
              required
              name='user_category'
              errors={errors}
              setValue={setValue}
            />
            <Select
              placeholder='Страна*'
              selectItems={countries}
              register={register}
              required
              name='user_country'
              errors={errors}
              setValue={setValue}
            />
          </div>
        </div>
        <div className='form__section'>
          <div className='form__title'>Представитель юридического лица</div>
          <div className='form__short-inputs'>
            <Input
              placeholder='Имя*'
              register={register}
              errors={errors}
              required
              name='name'
              validationType='name'
              errorText='Введите ваше имя'
            />
            <Input
              placeholder='Фамилия*'
              register={register}
              errors={errors}
              required
              name='surname'
              validationType='name'
              errorText='Введите вашу фамилию'
            />
            <Select
              placeholder='Обращение*'
              selectItems={[
                { id: '1', name: 'мужчина' },
                { id: '2', name: 'женщина' },
              ]}
              register={register}
              required
              name='gender'
              errors={errors}
              setValue={setValue}
            />
            <Select
              placeholder='Предпочтительный язык*'
              selectItems={languages}
              register={register}
              required
              name='lang'
              errors={errors}
              setValue={setValue}
            />
            <Input
              placeholder='Должность*'
              register={register}
              errors={errors}
              required
              name='position'
              validationType='position'
              errorText='Введите должность'
            />
            <Input
              placeholder='Ваш корпоративный e-mail*'
              register={register}
              errors={errors}
              required
              name='corporate_email'
              errorText='Введите корректный e-mail'
              validationType='email'
            />
          </div>
        </div>
        <div className='form__section'>
          <div className='form__title'>Профессиональные интересы</div>
          <Multiselect
            MultiselectItems={countries}
            placeholder='Целевые рынки*'
            required
            register={register}
            errors={errors}
            name='country'
            setValue={setValue}
          />
          <Multiselect
            placeholder='Интересующие отрасли*'
            MultiselectItems={industries}
            required
            register={register}
            errors={errors}
            name='industry'
            setValue={setValue}
          />
          <Textarea
            placeholder='Сообщение'
            register={register}
            name='message'
          />
        </div>
        <Checkbox
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
          position={1}
        >
          Подтверждаю, что являюсь уполномоченным представителем указанного
          юридического лица или индивидуального предпринимателя
        </Checkbox>
        <div className='form__button-section'>
          <Checkbox
            smallText
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
            position={2}
          >
            Нажимая кнопку “Запросить демо-доступ” Вы принимаете{' '}
            <a className='checkbox__inner-link' href='##'>
              пользовательское соглашение
            </a>{' '}
            и подтверждаете согласие с{' '}
            <a className='checkbox__inner-link' href='##'>
              правилами использования и обработки персональных данных
            </a>
          </Checkbox>
          <button
            className={`button-container form__button-container ${
              isDisabled.includes(false) ? '--disabled' : ''
            }`}
            disabled={isDisabled.includes(false)}
          >
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
  const [industries, setIndustries] = useState<[]>([]);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
  });

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

  const getAllIndustries = () => {
    axios.get(`${url}/api/v1/public/industry/input_list`).then((response) => {
      setIndustries(response.data.data);
    });
  };

  useEffect(() => {
    getAllCategories();
    getAllCountries();
    getAllLanguages();
    getAllIndustries();
  }, []);

  return (
    <div className='layout'>
      <Error error={error} setError={setError}></Error>
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
            industries={industries}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            setValue={setValue}
            setError={setError}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
