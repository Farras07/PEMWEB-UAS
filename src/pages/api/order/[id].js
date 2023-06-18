import connect from '../../../db/db'
import Order from '../../../model/order'
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
    if(req.method === 'GET'){
        try{
            await connect()
            // console.log('id')
            // console.log(`id = ${req}`)
            const order = await Order.findById(req.query.id)
            res.json(order)

        }
        catch(e){
            console.log(e)
            res.json({e})
        }
    }
    else if(req.method === 'PUT'){
        await connect()
        
        const updateStatus = await Order.findOneAndUpdate(
            { _id: req.query.id }, // Filter by ID
            { $set: {processStatus: req.body.processStatus} }, // Update the ispinned field to false
            { new: true } // Return the updated document
          );
        res.status(200).json({ success: true, data:updateStatus })
    }
  }
//   export default async function handler(req, res) {
//     if(req.method === 'POST'){
//         try{
//             console.log('CONNECTING TO MONGO')
//             await connect()
//             console.log('CONNECTED TO MONGO')
        
//             console.log('CREATING DOCUMENT')
//             const product = await Product.create(req.body)
//             console.log('CREATED DOCUMENT')
        
//             res.json({product})
//         }
//         catch(e){
//             console.log(e)
//             res.json({e})
//         }
//     }else if(req.method ==='GET'){
//         await connect()
      
//         const result = await Product.find()
//         res.status(201).json({
//             post: result,
//             message: 'All Product'
//         })


//     }
//   }