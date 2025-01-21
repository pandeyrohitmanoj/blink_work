
  const headers = ['Order Id', 'Order Description', 'Count of Products', 'Created Date', '']

export default function TableHeaders() {
  return (
    <thead>
      <tr>
        {headers.map( (header,index) => {
            return <th key={`header${index}`} className='px-2 py-1'>{header}</th>
        })}
        </tr>
    </thead>
  )
}
