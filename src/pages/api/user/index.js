import connect from '../../../db/db'
import User from '../../../model/user'
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
            const user = await User.create(req.body)
            console.log('CREATED DOCUMENT')
            res.json({user})
        }
        catch(e){
            console.log(e)
            res.json({e})
        }
    }else if(req.method ==='GET'){
        await connect()
        const user = await User.find()
        res.json(user)
    }
  }