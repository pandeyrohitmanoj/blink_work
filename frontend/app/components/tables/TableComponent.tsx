
import TableHeaders from './TableHeaders'
import TableBody from './TableBody'
import useTableComponent from '@/app/hooks/useTableComponent'

export type tProduct = {
    order_id: number,
    order_description: string,
    count_of_product: number,
    created_at: string,
  }


export default function TableComponent() {
  const { input, setInput, loading, temp, setState } = useTableComponent()
  return (
    <>
    <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>

        {loading ? <span>...loading</span> :
            <table>
                <TableHeaders />
                <TableBody state={temp} setState={setState} />
            </table>
        }
    </>
  )
}
