
import useDescriptionForm from "../../hooks/useDescriptionForm"
import CheckboxesComponent from "./Checkbox"
import NoOfProduct from "./NoOfProduct"

export function Form() {    
    const {description, handleChange,selected, setSelected,handleSubmit, handleCancel, error} = useDescriptionForm()
    
    return <form onSubmit={handleSubmit} className="min-h-svh w-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl">New Order</h1>
        <NoOfProduct length={selected.length} />
        <input onChange={handleChange} value={description}/>
        <CheckboxesComponent selected={selected} setSelected={setSelected} />
        <div className="flex justify-center items-center gap-14">
            <button className="text-lg rounded bg-red-500 text-white hover:bg-red-700 py-2 px-8" onClick={handleCancel}>Cancel</button>
            <button className="text-lg rounded bg-green-500 text-white hover:bg-green-700 py-2 px-8" type="submit">Submit</button>
        </div>
        {error && 'Problem adding the order'}
    </form>
}

