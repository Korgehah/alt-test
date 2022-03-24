import axios from 'axios';

const domain = 'https://export.alt-test.ru';

axios
  .get(`${domain}/api/v1/public/user_category/input_list`)
  .then((response) => console.log(response));
