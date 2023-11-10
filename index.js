
const express = require('express')
const app = express()
const port = 5050
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

//routes utama dengan method GET
app.use(bodyParser.json())

app.get("/", (req,res) => {
  response(200,"Api web1 ready to go", "Succes", res)
})
app.get('/mahasiswa', (req, res) => {
  const sql = 'SELECT * FROM tbl_mhs'
    db.query(sql, (err, fields) =>{
        //hasil data dari mysql 
        if (err) throw err
           response(200, fields, "get all data from tbl_mhs", res)
    })

 
})
app.post('/mahasiswa', (req, res) => {
  const { nim , nama_mhs , alamat } = req.body;

  // Query SQL untuk mengecek apakah data sudah ada dalam database
  const sql = `SELECT * FROM  tbl_mhs WHERE nim = '${nim}' AND nama_mhs = '${nama_mhs}'`;

  db.query(sql , (err, result) => {
    if (err) {
      console.error('Error saat melakukan query: ' + err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Periksa apakah data sudah ada dalam database
    if (result.length > 0) {
      res.status(400).send('Error: Data sudah ada dalam database');
    } else {
      // Jika data belum ada, lakukan proses penyimpanan data
      const insertQuery = `INSERT INTO tbl_mhs (nim,nama_mhs, alamat) VALUES ('${nim}', '${nama_mhs}', '${alamat}')`;

      db.query(insertQuery, (err, fields) => {
        if (err) {
          console.error('Error saat menyimpan data: ' + err);
          res.status(500).send('Internal Server Error');
          return;
        }

        response(200,fields, "Data berhasil disimpan",res);
      });
    }
  });
});
app.put('/mahasiswa', (req, res) => {
  
  const { nim, nama_mhs ,alamat} = req.body;
  console.log(req.body)
    
      const updateQuery = `UPDATE tbl_mhs SET nim = '${nim}', nama_mhs = '${nama_mhs}', 
      alamat = '${alamat}' WHERE nim = ${nim}`;

      db.query(updateQuery, (err, fields) => {
        if (err) {
          console.error('Error saat melakukan update: ' + err);
          res.status(500).send('Internal Server Error');
          return;
        }

        response(200,fields, "Data berhasil diupdate",res);
      });
});

app.delete('/mahasiswa', (req, res) => {
  const {nim} = req.body
  const deleteQuery = `DELETE FROM tbl_mhs WHERE nim = ${nim}`;

  db.query(deleteQuery, (err, fields) => {
    if (err) {
      console.error('Error saat melakukan delete: ' + err);
      res.status(500).send('Internal Server Error');
      return;
    }

    response(200,fields, "Data berhasil dihapus",res);
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})