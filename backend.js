const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser'); 
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var nextId = 3;
var serverData = {
    "list": [
        {"id": 0, "text" : "Sample Item 1", "edit" : false, "editText" : ""},
        {"id": 1, "text" : "Sample Item 2", "edit" : false, "editText" : ""},
        {"id": 2, "text" : "Sample Item 3", "edit" : false, "editText" : ""}
]};

app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write(JSON.stringify(serverData));
    res.end();
});

app.post('/item', (req, res) => {
    if (req.body.text == null || req.body.text == undefined || req.body.text == ""){
        res.writeHead(400, {
            'Content-Type': 'text/html'
        });
        res.write("Error Bad Request");
        res.end();
    } else {
        var addText = req.body.text;
        serverData.list.push({
            "id" : nextId,
            "text" : addText,
            "edit" : false,
            "editText" : ""
        });
        nextId++;
    
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify(serverData));
        res.end();
    }
});

app.put('/item/:id', (req, res) => {    
    if (req.body.text == null || req.body.text == undefined || req.body.text == "" || 
        req.params.id == null || req.params.id == undefined || req.params.id == ""){
        
        res.writeHead(400, {
            'Content-Type': 'text/html'
        });
        res.write("Error Bad Request");
        res.end();
    } else {
        var itemID = req.params.id;
        var updateText = req.body.text;

        for(var i = 0; i < serverData.list.length; i++){
            if (serverData.list[i].id == itemID){
            serverData.list[i].text = updateText;
            }
        }

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify(serverData));
        res.end();
    }
});

app.delete('/item/:id', (req, res) => {
    if (req.params.id == null || req.params.id == undefined || req.params.id == ""){
        res.writeHead(400, {
            'Content-Type': 'text/html'
        });
        res.write("Error Bad Request");
        res.end();
    } else {    
        var itemID = req.params.id;

        for(var i = 0; i < serverData.list.length; i++){
            if (serverData.list[i].id == itemID){
                serverData.list.splice(i, 1);
            }
        }

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify(serverData));
        res.end();
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));

