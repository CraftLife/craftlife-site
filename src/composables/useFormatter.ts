import moment from 'moment'
import 'moment/dist/locale/pt-br'

export default function () {
  function formatDate(date: string) {
    if (!date) {
      return null
    }
    return moment(date).format('DD/MM/YYYY HH:mm:ss')
  }

  function formatRelativeDate(date: string) {
    if (!date) {
      return null
    }
    return moment(date).fromNow()
  }

  return {
    formatDate,
    formatRelativeDate
  }
}
