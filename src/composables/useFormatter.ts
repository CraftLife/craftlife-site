import moment from 'moment'
import 'moment/dist/locale/pt-br'

export default function () {
  const formatDate = (date: string) => {
    if (!date) {
      return null
    }
    return moment(date).format('DD/MM/YYYY HH:mm:ss')
  }

  const formatRelativeDate = (date: string) => {
    if (!date) {
      return null
    }
    return moment(date).fromNow()
  }

  const formatCurrency = (value: number) => {
    if (!value) return null
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  return {
    formatDate,
    formatRelativeDate,
    formatCurrency
  }
}
