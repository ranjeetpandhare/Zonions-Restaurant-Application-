
module.exports = {

  //Submiting the Restaurtant form and save the data in DB

  create: async function (req, res) {
    try {

      let { RestaurtantName, Address, Phone, MenuImage, OpenTime, CloseTime, LastUpdatedTime, isActive } = req.allParams();
      console.log(req.allParams());
      // if (!RestaurtantName) {
      //   return res.badRequest({ err: 'Restaurtant Name field is required' });
      // }

      const create_restaurtant_details = await Restaurtant.create({
        RestaurtantName: RestaurtantName,
        Address: Address,
        Phone: Phone,
        MenuImage: MenuImage,
        OpenTime: OpenTime,
        CloseTime: CloseTime,
        LastUpdatedTime: LastUpdatedTime,
        isActive: isActive,


      }).fetch()

      return res.ok(create_restaurtant_details)
    }
    catch (err) {
      res.serverError(err)
    }

  },
  //collecting current Restaurtant details
  find: async function (req, res) {
    try {
      const find_restaurtant = await Restaurtant.find({})
      return res.ok(find_restaurtant);
    }
    catch (err) {
      return res.serverError(err);
    }

  },

  //deleteing the Restaurtant
  delete: async function (req, res) {
    try {
      const delete_restaurtant = await Restaurtant.destroy({
        id: req.params.id
      })
      res.ok(delete_restaurtant);
    }
    catch (err) {
      res.serverError(err)
    }
  },
  //updating Restaurtant information
  update: async function (req, res) {
    try {

      let param = req.allParams();
      let attribute = {};
      if (param.RestaurtantName)
        attribute.RestaurtantName = param.RestaurtantName;

      if (param.Address)
        attribute.Address = param.Address;

      if (param.Phone)
        attribute.Phone = param.Phone;

      if (param.MenuImage)
        attribute.MenuImage = param.MenuImage;

      if (param.OpenTime)
        attribute.OpenTime = param.OpenTime;

      if (param.CloseTime)
        attribute.CloseTime = param.CloseTime;

      if (param.LastUpdatedTime)
        attribute.description = param.description;

      if (param.isActive)
        attribute.isActive = param.isActive;

      const update_restaurtant = await Restaurtant.update({
        id: req.params.id
      }, attribute);
      return res.ok(update_restaurtant)
    }
    catch (err) {
      res.serverError(err);
    }

  },

  //collect information  current Restaurtant by id 
  findById: async function (req, res) {
    try {
      console.log("find one", req.params.id)
      const findbyid = await Restaurtant.findOne({
        id: req.params.id
      });
      return res.ok(findbyid);
    }
    catch (err) {
      return res.serverError(err);
    }
  }

};

