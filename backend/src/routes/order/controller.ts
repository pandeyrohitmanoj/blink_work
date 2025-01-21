import { Request, Response }  from 'express'
import db from '../../database/knex'
import { getAllOrdersDB, getAllOrdersProductDB } from './db'

const query =``

export async function getOrders(req: Request, res: Response) {
   try { 
    console.log('Started Fetching order details for orders screen')
    const result = await db.raw(`
        SELECT o.id as Order_Id, o.order_description as order_description, c.Count_Of_Product, o.created_at 
        FROM orders o RIGHT JOIN
        ( SELECT COUNT(order_id) as Count_Of_Product, order_id FROM order_product_map GROUP BY order_id ) as c 
         on c.order_id = o.id
        `)
        console.log(`Completed Fetching order details for orders screen`)
    res.json({result: result.rows})
} catch (error) {
    console.log(error)
    res.json({ok: false})
   }
}
export async function getAllOrders(req: Request, res: Response) {
    try {
        console.log(`get all orders from db`)
        const result = await getAllOrdersDB()
        console.log(`completed fetching orders DB`)
        res.json({ok: true, result,})
        console.log('get all orders from db')
    } catch (error) {
    console.log(error)
    res.json({ok: false})
    }
}
export async function getAllOrdersProduct(req: Request, res: Response) {
    try {
        console.log(`fetching getAllOrders`)
        const result = await getAllOrdersProductDB()
        console.log(`completed fetching orders DB`)
        res.json({ok: true, result,})
    } catch (error) {
        console.log(error)
        res.json({ok: false})
    }
}

export async function getOrder(req: Request, res: Response) {
    try {
        const { id, } = req.params
        console.log(`fetching oder by id: ${id}`)
        const user = await db('orders').select('*').where('id',id)
        console.log(`completed fetching oder by id: ${id}`)
        res.json({user})
    } catch (error) {
        console.log(error)
        res.json({ok: false})
    }
}