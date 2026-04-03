export const formatDate = (timestamp: unknown) => {
  if (typeof timestamp !== 'string') return '-'

  try {
    const clean = timestamp.split('.')[0] + 'Z'

    const date = new Date(clean)

    if (isNaN(date.getTime())) return '-'

    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch (err) {
    console.error(err)
    return '-'
  }
}