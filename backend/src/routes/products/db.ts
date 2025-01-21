import db from "../../database/knex";

export async function getProductsDB() {
    try {
        const result = await db.table('products').select('*')
        return result
    } catch (error) {
        throw new Error(`Error at addOrders: ${error}`)
    }
}
