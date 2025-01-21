import db from "../../database/knex";

export async function addOrders(orderDescription: string) {
    try {
        const [{id}] = await db.table('orders').insert({
            order_description:orderDescription,
        }).returning('orders.id')
        return id
    } catch (error) {
        console.log(error)
    }
}

export async function addorderProduct(orderId: number, productId: number) {
    try {
        await db.table('order_product_map').insert({
            order_id: orderId,
            product_id: productId
        })
    } catch (error) {   
        console.log(`Error at addorderProduct: ${error}`)
    }
}

export async function updateOrderDB(orderDescription: string,id: number) {
    try {
        await db.table('orders').update({
            orderDescription
        }).where({
            id,
        })
    } catch (error) {
        
    }
}

export async function deleteOrderDB(orderId: number) {
try {
    await db.table('order_product_map').where({ order_id: orderId, }).del()
    await db.table('orders').where({ id: orderId, }).del()
    
} catch (error) {
    console.error(error)
}
}