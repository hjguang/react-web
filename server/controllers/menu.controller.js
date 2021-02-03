const MenuModel = require('../models/menu.model');

const saveMenu = async (req,res)=>{
  let menu = new MenuModel(req.body)
  try{
    await menu.save()
    return res.status(200).json({
      message:"保存成功"
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  saveMenu
}
