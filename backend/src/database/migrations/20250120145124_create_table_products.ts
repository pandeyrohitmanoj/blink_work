import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.raw(`
        CREATE TABLE IF NOT EXISTS products(
            id INT PRIMARY KEY,                  
            product_name VARCHAR(100) NOT NULL, 
            product_description TEXT 
            )
        `)
    
}


export async function down(knex: Knex): Promise<void> {
    await knex.raw(`
        DROP TABLE IF EXISTS products
        `)
}

