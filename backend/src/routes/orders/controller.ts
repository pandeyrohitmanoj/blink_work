import { Request, Response, }  from 'express'
import db from '../../database/knex'
import { addorderProduct, addOrders, deleteOrderDB, updateOrderDB } from './db'

type tAddOrder = { 
    orderDescription: string, 
    products: number[], 
 }

export async function addOrder(req: Request<{}, {}, tAddOrder, {}>, res: Response) {
    try {
        console.log(`started adding order`)

        const { orderDescription, products,  } = req.body
        const orderId = await addOrders(orderDescription)
        console.log(`${orderId} is created`)
        if(!orderId) throw new Error(`No order id created`)
        const orderProducts = products.map( productId => {
            return addorderProduct(orderId, productId)
        })

        console.log('order_product_map updated')
        await Promise.all(orderProducts)

        res.json({ok: true})
        console.log(`complted adding order`)

    } catch (error) {
        console.log(error)
        res.json({ok: false})
        
    }
    
}

type tParamsUO = { id: string, }
type tBodyUO = { orderDescription: string }

export async function updateOrder(req: Request<tParamsUO, {}, tBodyUO,{}>, res: Response) {
    try {
        console.log(`started updating order`)
        const { id, } = req.params
        const { orderDescription, } = req.body
        await updateOrderDB(orderDescription, parseInt(id))
        res.json({ ok: true })
        console.log(`complted adding order`)
    } catch (error) {
        console.log(error)
        res.json({ok: false})
    }
}

type tParamsDO = { id: string}
export async function deleteOrder( req: Request<tParamsDO, {}, {}, {}>, res: Response ) {
    try {
        console.log(`complted deleting order`)
        const { id, } = req.params
        await deleteOrderDB(parseInt(id))
        res.json({ok: true})
        console.log(`complted deleting order`)
    } catch (error) {
        console.log(error)
        res.json({ok: false})        
    }
}