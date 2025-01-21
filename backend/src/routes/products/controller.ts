import { Request, Response, }  from 'express'
import db from '../../database/knex'
import {  getProductsDB,  } from './db'

type tAddOrder = { 
    orderDescription: string, 
    products: number[], 
    orderId: number
 }

export async function getProducts(req: Request<{}, {}, tAddOrder, {}>, res: Response) {
    try {
        console.log(`started fetching products`)
        const result = await getProductsDB()
        res.json({ok: true, result})
        console.log(`completed fetching products`)

    } catch (error) {
        console.log(error)
        res.json({ok: false})
        
    }
    
}