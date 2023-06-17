import connect from '../../../db/db'
import Order from '../../../model/order'
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
    if(req.method === 'POST'){
        try{
            console.log('CONNECTING TO MONGO')
            await connect()
            console.log('CONNECTED TO MONGO')
        
            console.log('CREATING DOCUMENT')
            const order = await Order.create(req.body)
            console.log('CREATED DOCUMENT')
            res.json({order})
        }
        catch(e){
            console.log(e)
            res.json({e})
        }
    }else if(req.method ==='GET'){
        await connect()
        const order = await Order.find()
        res.json(order)
    }
  }