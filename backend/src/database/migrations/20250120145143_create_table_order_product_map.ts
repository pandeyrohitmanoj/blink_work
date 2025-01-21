import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS order_product_map(
            id SERIAL PRIMARY KEY,                  
            order_id INT, 
            product_id INT,
            FOREIGN KEY (order_id)  references orders(id),
            FOREIGN KEY (product_id) references products(id)
            )
        `)
    
}


export async function down(knex: Knex): Promise<void> {
    await knex.raw(`
        DROP TABLE IF EXISTS order_product_map
        `)
}

