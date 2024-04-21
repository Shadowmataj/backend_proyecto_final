import * as url from "url"

const config = {
    PORT: 8080,
    DIRNAME: url.fileURLToPath(new URL(".", import.meta.url)),
    // función getter
    get UPLOAD_DIR(){ return `${this.DIRNAME}/public/img`},
    THIS_PATH_PRODUCTS: "./src/products.json",
    THIS_PATH_CARTS: "./src/carts.json",
}

export default config