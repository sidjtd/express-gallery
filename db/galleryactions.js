module.exports = (function(){

  const picInfo = [];

  function prepareData (reqBody){
    picInfo.push(reqBody.author);
    picInfo.push(reqBody.link);
    picInfo.push(reqBody.description);
    return productDB;
  }

  function _all(reqBody){

  }

  function _byId(reqBody){
  }

  function _new(reqBody){
    let postData = prepareData(reqBody);
    return db.query('INSERT INTO products VALUES (DEFAULT, $1, $2, $3)', postData);
  }

  function _post(reqBody){
    let postData = prepareData(reqBody);
  }

  function _edit(reqBody){

  }

  function _put(reqBody){
  }

  function _delete(reqBody){
  }
  return {
    all : _all,
    byId : _byId,
    new : _new,
    post : _post,
    edit : _edit,
    put : _put,
    delete : _delete,
  };



})();
