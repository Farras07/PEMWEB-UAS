import connect from '../../../db/db'
import Credit from '../../../model/creditCard'
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
            const credit = await Credit.create(req.body)
            console.log('CREATED DOCUMENT')
            res.json({credit})
        }
        catch(e){
            console.log(e)
            res.json({e})
        }
    }else if(req.method ==='GET'){
        await connect()
        const credit = await Credit.find()
        res.json(credit)
    }
  }