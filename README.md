# web-tk1
### TUGAS RESTful API KELOMPOK

### 1. METHOD GET
<details>
<summary> Click to Expand </summary>
<table>
<tr>
<td><b> URL </b></td>
<td> <b style="color🍏">{{baseurl}}/mahasiswa </td>
</tr>
<tr>
<td><b> Method </b></td>
<td> GET </td>
</tr>
<tr>
<td><b> Body </b></td>
<td>
	
``` json

    {
        "payload": [
            {
                "nim": 1001,
                "nama_mhs": "M.daniel ilyasa",
                "alamat": "bekasi"
            },
            {
                "nim": 1002,
                "nama_mhs": "dwi apriansyah",
                "alamat": "bogor"
            },
            {
                "nim": 1003,
                "nama_mhs": "m.irgi ",
                "alamat": "bogor"
            },
            {
                "nim": 1004,
                "nama_mhs": "irpan syahputra",
                "alamat": "palembang"
            }
            
        ],
        "message": "get all data from tbl_mhs",
        "metadata": {
            "prev": "",
            "next": "",
            "max": ""
        }
    }

```

</td>
</table>
</details>

***

### 2. METHOD POST
<details>
<summary> Click to Expand </summary>
<table>
<tr>
<td><b> URL </b></td>
<td> <b style="color🍏">{{baseurl}}/mahasiswa </td>
</tr>
<tr>
<td><b> Method </b></td>
<td> POST </td>
</tr>
<tr>
<td><b> Body </b></td>
<td>

``` json
{
    "nim":1006,
    "namaMhs": "andi",
    "alamat" :"jepang"
}
```
</td>
</tr>
<tr>
<td><b> Success Response </b></td>
<td>
	
``` json
{
        "payload": {
            "fieldCount": 0,
            "affectedRows": 1,
            "insertId": 0,
            "serverStatus": 2,
            "warningCount": 0,
            "message": "",
            "protocol41": true,
            "changedRows": 0
        },
        "message": "Data berhasil disimpan",
        "metadata": {
            "prev": "",
            "next": "",
            "max": ""
        }
    }
```

</td>
</tr>
<tr>
<td><b> Failed Response </b></td>
<td>Error: Data sudah ada dalam database</td>





