import useCheckboxes from "../../hooks/useCheckboxes"

export default function CheckboxesComponent({ selected, setSelected}: {selected: number[], setSelected: React.Dispatch<React.SetStateAction<number[]>>}) {
    const { handleClick, loading, Products, } = useCheckboxes(selected, setSelected)
    return <div>
        { loading ? <div>...loading</div> : <div>{
            Products.map( (product ) => {
                return <div key={product.id} className="flex gap-5">
                        <input type='checkbox' name='products' onChange={() => {}} id={`product${product.id}`} 
                        checked={selected.includes(product.id)} value={product.id} onClick={handleClick}/>
                        <label htmlFor={`product${product.id}`} >{product.product_name}</label>
                    </div>
            })
        }
        </div>}
        </div>
    
}