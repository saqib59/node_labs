const express = require('express')
const app = express()
const port = 3000
const path = require('path')
// app.use(express.static('public/car.jpg'))

// app.use('/static', express.static('public'))
//create server
 app.get('/', (req, res) => {
 res.send('Hello World!')
 })

//Dynamic Image and Not Found Error
app.get('/dynamicimage', (req, res) => {
  //console.log(req.query.imagename)
 
  //res.sendFile(path.join(__dirname, req.query.imagename))
  ImageName = req.query.imagename
  let ImagePath = path.join(__dirname, ImageName);
  if(ImageName =='car.jpg')
  {
    let ImagePath = path.join(__dirname, ImageName);
    res.sendFile(ImagePath)
  }
  else{
    res.send('Image Not Found')
  }
 // res.sendFile(ImagePath)
})

// app.get('/car', (req, res) => {
//   let imagepath = path.join(__dirname, 'ironman.jpg');
//   res.sendFile(imagepath)
// })

//Render Image
app.get('/pic', (req, res) => {
  let ImagePath = path.join(__dirname,'car.jpg');
  res.sendFile(ImagePath)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


