import type { LoaderFunction } from "remix";
import fs from 'fs/promises';
import path from 'path';

// Resource route for downloading a spreadsheet, there is only a loader, no default export

export const loader: LoaderFunction = async () => {
    const productsExcel = await fs.readFile(
        path.join(__dirname, "..", "public/assets/products.xlsx")
    );
    return new Response(productsExcel, {
        status: 200,
        headers: {
            "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        }
    });
};