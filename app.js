import express from 'express';
import multer from 'multer';
import path from 'path';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({storage: storage});

const app = express();

app.use(express.static('public'));

app.post('/profile', upload.single('avatar'), (req, res, next)=> {
  res.send({
    err: null,
    filePath: 'uploads/' + path.basename(req.file.path)
  });
});

app.listen(3000, ()=> {
  console.log('Server start at http://localhost:3000');
});