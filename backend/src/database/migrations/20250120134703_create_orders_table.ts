import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS orders(
            id SERIAL PRIMARY KEY,                  
            order_description VARCHAR(100) NOT NULL, 
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL 
            )
        `)
    
}


export async function down(knex: Knex): Promise<void> {
    await knex.raw(`
        DROP TABLE IF EXISTS orders
        `)
}

