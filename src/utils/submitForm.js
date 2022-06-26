import axios from 'axios';

const SERVER_URL = 'https://frosty-wood-6558.getsandbox.com:443/';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submit = async (values) => {
  return await sleep(500).then(() => {
    axios({
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      url: `${SERVER_URL}dishes`,
      data: values
    }).then(() => {
      console.log('good job')
    }).catch(() => {
      console.log('bad job')
    });
  })
}

export default submit