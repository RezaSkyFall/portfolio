import dbConnect from '../../lib/dbConnect'
import General from '../../models/General'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
          
        let _general = await General.findOne();
        if(_general == null){
          _general = new General()
        }else{
          _general.visitCounts =await General.updateOne({},{visitCounts :(_general.visitCounts +1)}) ;

        }
        
        
        res.status(200).json(_general)
      } catch (error) {
        res.status(400).json({ success: false,err:error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}