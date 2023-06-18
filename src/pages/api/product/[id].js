import connect from '../../../db/db'
import Product from '../../../model/product'
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
            const product = await Product.findById(req.query.id)
            res.json(product)

        }
        catch(e){
            console.log(e)
            res.json({e})
        }
    }
    else if(req.method === 'DELETE'){
        try{
            await connect()
            const deleteAspiration = await Product.deleteOne({_id: req.query.id})
            res.status(200).json({ success: true, data:deleteAspiration })
        }
        catch(e){
            console.log(e)
            res.json({e})
        }
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