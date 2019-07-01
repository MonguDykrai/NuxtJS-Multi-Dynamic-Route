export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    debugger
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    debugger
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}