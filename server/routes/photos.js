var express = require('express');
const multer = require('multer')
var router = express.Router();

const storage =  multer.diskStorage({
  destination: './files',
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const uploader = multer({ storage })

/* GET users listing. */
router.post('/upload', uploader.single('image'), function(req, res, next) {

  const file = req.file
  const meta = req.body
  // デッバグのため、アップしたファイルの名前を表示する
  console.log(file, meta)
  // アップ完了したら200ステータスを送る
  res.status(200).json({msg: 'アップロード完了'})
});

module.exports = router;
