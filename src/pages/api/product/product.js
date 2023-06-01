import connect from '../../../db/db'
import Product from '../../../model/product'
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
    try{
        console.log('CONNECTING TO MONGO')
        await connect()
        console.log('CONNECTED TO MONGO')
    
        console.log('CREATING DOCUMENT')
        const product = await Product.create(req.body)
        console.log('CREATED DOCUMENT')
    
        res.json({product})
    }
    catch(e){
        console.log(e)
        res.json({e})

    }
  }