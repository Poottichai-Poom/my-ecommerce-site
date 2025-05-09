const express = require('express');

const router = express.Router();

const subject = require('../data/contact_subject.json');

router.get('/',(req,res) => {
    // res.end('{"contactSubject": ["Genral Enquiry","Class","Schedule","Instructor","Price","Location","Other","Poom" ,"ggez"]}');
    res.json(subject);
});

module.exports = router;

