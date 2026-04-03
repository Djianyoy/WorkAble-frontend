export const formatDate = (timestamp: unknown) => {
  console.log('RAW:', timestamp)

  if (typeof timestamp !== 'string') return '-'

  try {
    const clean = timestamp.split('.')[0] + 'Z'
    console.log('CLEAN:', clean)

    const date = new Date(clean)

    console.log('DATE:', date)

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