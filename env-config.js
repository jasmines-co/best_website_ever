
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://toshi-text.herokuapp.com/' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://toshi-text.herokuapp.com/',
  'process.env.CLIENT_ID': 'z5UssdBfYc7R5OOEPBprycmfXrcKIxD1'
}