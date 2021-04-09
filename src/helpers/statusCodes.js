const status = (code) => (res,msg) => {
  return res.status(code).json(msg);
};

module.exports.Code400 = status(400);
module.exports.Code201 = status(201);
