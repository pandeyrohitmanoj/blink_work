import db from "../../database/knex";


export async function getAllOrdersDB() {
    try {
        const result: any = await db.table('orders').select('*')
        return result
    } catch (error) {
        console.error(`Error at getAllOrdersDB:`)
        console.log(error)
    }   
}

export async function getAllOrdersProductDB() {
    try {
        const result: any = await db.table('order_product_map').select('*')
        return result
    } catch (error) {
        console.error(`Error at getAllOrdersDB:`)
        console.log(error)
    }   
}