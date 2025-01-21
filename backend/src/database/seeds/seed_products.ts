import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("products").del();

    await knex("products").insert([
        { id: 1, product_name: 'HP laptop', product_description:"This is HP laptop", },
        { id: 2, product_name: 'lenovo laptop', product_description:"This is lenovo", },
        { id: 3, product_name: 'Car', product_description:"This is Car",  },
        { id: 4, product_name: 'Bike', product_description:"This is Bike",  }
    ]);
};
