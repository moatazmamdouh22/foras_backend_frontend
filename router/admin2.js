const express = require('express');
const router = express.Router();
const employeeObj = require('../Models/employee2');
const nationalityObj = require('../Models/nationality');
const scientificSpecializationObj = require('../Models/scientificSpecialization');
const graduationUniversityObj = require('../Models/graduationUniversity');
const generalDataObj = require('../Models/generalData');
const cityObj = require('../Models/city2');
const experienceObj = require('../Models/experience');
const languageObj = require('../Models/language');
const yearsExperienceObj = require('../Models/yearsExperience');
const specializedCertificatesObj = require('../Models/specializedCertificates');
const idLevelObj = require('../Models/idLevel');
const contactUSObj = require('../Models/contactUs2');
const setting2Obj = require('../Models/setting2');
const clients2Obj = require('../Models/clients2');
var fs = require('fs-extra');
var nodemailer = require('nodemailer');
var formidable = require('formidable');
var path = require('path');
// var FCM = require('fcm-node');
// var serverKey = 'AAAAJzby3mE:APA91bFj9xARC9_qg7USwc_iBFBmw1z1xZ43gtUAIYcdxjO40WvqRKRVieoFlCXyJHS94nj5FIw4UUsj0o73B-dhHPmn9FgU9thbFpHP8eIB5m2_RghXIDophgdaYpAolMmp_lM679pR'; //put your server key here
// var fcm = new FCM(serverKey);
// upload file to server .

router.get('/clients', function (req, res, next) {
  clients2Obj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.put('/clients/:id', function (req, res, next) {
  clients2Obj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      clients2Obj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});
router.post('/clients', function (req, res, next) {
  clients2Obj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});

router.get('/clientsByID', function (req, res, next) {
  clients2Obj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});


router.get('/websiteSettings', function (req, res, next) {
  setting2Obj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.put('/websiteSettings/:id', function (req, res, next) {
  setting2Obj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      setting2Obj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});
router.post('/websiteSettings', function (req, res, next) {
  setting2Obj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});
router.post('/specializedCertificates', function (req, res, next) {
  specializedCertificatesObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});
router.get('/specializedCertificates', function (req, res, next) {
  specializedCertificatesObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.get('/specializedCertificatesByID', function (req, res, next) {
  specializedCertificatesObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});
router.put('/specializedCertificates/:id', function (req, res, next) {
  specializedCertificatesObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      specializedCertificatesObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});


router.get('/websiteSettingsByID', function (req, res, next) {
  setting2Obj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});



router.get('/contactUs', function (req, res, next) {
  contactUSObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.put('/contactUs/:id', function (req, res, next) {
  contactUSObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      contactUSObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});
router.post('/contactUs', function (req, res, next) {
  contactUSObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});

router.get('/totalCvs', function (req, res, next) {
  generalDataObj.find({ status: 1 }, {})
    .then(function (data) {
      var generalData = data.length;
      res.status(200).send({ 'message': generalData });
    });
});
router.get('/totalCompanies', function (req, res, next) {
  contactUSObj.find({ status: 1 }, {})
    .then(function (data) {
      var generalData = data.length;
      res.status(200).send({ 'message': generalData });
    });
});

router.get('/totalemployee', function (req, res, next) {
  employeeObj.find({}, {})
    .then(function (data) {
      var totalemployee = data.length;
      res.status(200).send({ 'message': totalemployee });
    });
});
router.get('/totalnationality', function (req, res, next) {
  nationalityObj.find({}, {})
    .then(function (data) {
      var nationality = data.length;
      res.status(200).send({ 'message': nationality });
    });
});
router.get('/totalcity', function (req, res, next) {
  cityObj.find({}, {})
    .then(function (data) {
      var totalcity = data.length;
      res.status(200).send({ 'message': totalcity });
    });
});


router.get('/login', function (req, res, next) {
  var data = {
    email: req.query.val
  }
  var data2 = {
    mobile: req.query.val
  }
  employeeObj.findOne(data, {})
    .then(function (user) {
      if (user == null) {
        employeeObj.findOne(data2, {})
          .then(function (user2) {
            if (user2 == null) {
              console.log('user not found');
              res.status(401).json({ message: 'Authentication failed. User not found.' });
            }
            else if (user2) {
              if (user2.password != req.query.password) {
                console.log('password worng !!!');
                res.status(401).json({ message: 'Authentication failed. Wrong password.' });
              }

              else {
                if (user2.status == 2) {
                  console.log("user suspend");
                  res.status(401).json({ message: 'this account is suspend !!!' });
                }
                else {
                  console.log(user2);
                  res.status(200).send(user2);
                  //return res.json({token: jwt.sign({ email: user.email, fullName: user.fullname, _id: user._id}, 'RestApi')});
                }
              }
            }
          }).catch(next);
        // console.log('user not found');
        // res.status(401).json({ message: 'Authen  tication failed. User not found.' });
      } else if (user) {
        // if (!user.comparePassword(req.query.password)) {
        if (user.password != req.query.password) {
          console.log('worng password !!!!');

          res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }
        else {
          if (user.status == 2) {
            console.log("user suspend");
            res.status(401).json({ message: 'this account is suspend !!!' });
          }
          else {
            console.log(user);
            res.status(200).send(user);
          }
        }
      }
    }).catch(next);
});
router.get('/getAllEmployee', function (req, res, next) {
  employeeObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});

router.get('/employeeByID', function (req, res, next) {
  employeeObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});

router.post('/generalData', function (req, res, next) {
  generalDataObj.find({}, {})
    .then(function (data) {
      var x = data.length + 1;
      const IdNum = "00" + x;
      var x = req.body
      x.order = IdNum
      generalDataObj.create(x).then(function (data) {
        res.status(200).send(data);
      }).catch(next);

    }).catch(next);

});
router.put('/generalData/:id', function (req, res, next) {
  generalDataObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      generalDataObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});
router.get('/generalDataByID', function (req, res, next) {
  generalDataObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});

router.post('/langLevel', function (req, res, next) {
  idLevelObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});

router.post('/employee', function (req, res, next) {
  employeeObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});

router.post('/addGraduationUniversity', function (req, res, next) {
  graduationUniversityObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});
router.get('/getAllGraduationUniversity', function (req, res, next) {
  graduationUniversityObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.put('/graduationUniversity/:id', function (req, res, next) {
  graduationUniversityObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      graduationUniversityObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});

router.post('/yearsExperience', function (req, res, next) {
  yearsExperienceObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});
router.put('/yearsExperience/:id', function (req, res, next) {
  yearsExperienceObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      yearsExperienceObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});

router.put('/idLevel/:id', function (req, res, next) {
  idLevelObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      idLevelObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});

router.get('/getAllyearsExperience', function (req, res, next) {
  yearsExperienceObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.get('/yearsExperiencebyID', function (req, res, next) {
  yearsExperienceObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});



router.post('/language', function (req, res, next) {
  languageObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});
router.put('/language/:id', function (req, res, next) {
  languageObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      languageObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});
router.get('/getAlllanguage', function (req, res, next) {
  languageObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});

router.get('/getAllgeneralData', function (req, res, next) {
  generalDataObj.find({}, {})
    .populate({ path: 'cityID' })
    .populate({ path: 'nationalityID' })
    .populate({ path: 'scientificSpecializationID' })
    .populate({ path: 'graduationUniversityID' })
    .populate({ path: 'experienceID' })
    .populate({ path: 'yearsExperienceID' })
    .populate({ path: 'mostExperienceID' })
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.post('/findData', function (req, res, next) {
  if (req.body.dateFrom && !req.body.dateTo) {
    req.body.createdAt = {
      $gte: req.body.dateFrom
    }
    delete req.body.dateFrom;
  }
  if (!req.body.dateFrom && req.body.dateTo) {
    req.body.createdAt = {
      $lt: req.body.dateTo
    }
    delete req.body.dateTo;
  }
  if (req.body.dateFrom && req.body.dateTo) {
    req.body.createdAt = {
      $gte: req.body.dateFrom, $lt: req.body.dateTo
    }
    delete req.body.dateFrom;
    delete req.body.dateTo;
  }
  if (req.body.level) {
    var level33 = req.body.level
    delete req.body.level;
  }

  if (req.body.firstName) {
    req.body.firstName = {
      $regex: "^" + req.body.firstName, $options: 'i'
    }
  }
  if (req.body.lastName) {
    req.body.lastName = {
      $regex: "^" + req.body.lastName, $options: 'i'
    }
  }
  if (req.body.phoneNumber) {
    req.body.phoneNumber = {
      $regex: "^" + req.body.phoneNumber, $options: 'i'
    }
  }
  if (req.body.email) {
    req.body.email = {
      $regex: "^" + req.body.email, $options: 'i'
    }
  }


  generalDataObj.find(req.body, {})
    .populate({ path: 'cityID' })
    .populate({ path: 'nationalityID' })
    .populate({ path: 'scientificSpecializationID' })
    .populate({ path: 'specializedCertificatesID' })
    .populate({ path: 'graduationUniversityID' })
    .populate({ path: 'experienceID' })
    .populate({ path: 'yearsExperienceID' })
    .populate({ path: 'mostExperienceID' })

    .then(async function (data) {
      console.log(data);
      console.log(req.body);
      console.log("req.body,",level33);

      if (level33 != null) {
        let arr = []
       for (let index = 0; index < data.length; index++) {
        await idLevelObj.findOne({generalDataID:data[index]._id, languageID: "5e722ff48b043b64ad7a77d5", level: level33 }, {})
        .populate({ path: 'generalDataID' })
            .then(function (dataLevel) {
              console.log("dataLevel",dataLevel);
              console.log("arr before",arr);
              if (dataLevel != null){
                arr.push(data[index]);
                console.log("arr after",arr);
              }
            });
            if ((index == data.length - 1)) {
              console.log("arr send",arr);
              res.status(200).send(arr);
            }
        }
      } else {
        res.status(200).send(data);
      }
    });
  // }
});

router.get('/getCVsByDate', function (req, res, next) {
  generalDataObj.find({ createdAt: { $gte: req.query.dateFrom, $lt: req.query.dateTo } }, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.get('/getContactUSByDate', function (req, res, next) {
  contactUSObj.find({ createdAt: { $gte: req.query.dateFrom, $lt: req.query.dateTo } }, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});


router.get('/getLangLevelByData', function (req, res, next) {
  idLevelObj.find({ generalDataID: req.query.generalDataID }, {})
    .populate({ path: 'languageID' })
    .populate({ path: 'generalDataID', select: 'firstName lastName' })
    .then(function (data) {
      res.status(200).send(data);
    });
});


router.get('/languagebyID', function (req, res, next) {
  languageObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});

router.post('/experience', function (req, res, next) {
  experienceObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});
router.put('/experience/:id', function (req, res, next) {
  experienceObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      experienceObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});
router.get('/getAllexperience', function (req, res, next) {
  experienceObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.get('/experiencebyID', function (req, res, next) {
  experienceObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});

router.post('/city', function (req, res, next) {
  cityObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});
router.put('/city/:id', function (req, res, next) {
  cityObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      cityObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});
router.get('/getAllcities', function (req, res, next) {
  cityObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.get('/citybyID', function (req, res, next) {
  cityObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});

router.post('/addScientificSp', function (req, res, next) {
  scientificSpecializationObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});
router.get('/getAllScientificSps', function (req, res, next) {
  scientificSpecializationObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});
router.put('/ScientificSp/:id', function (req, res, next) {
  scientificSpecializationObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      scientificSpecializationObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});

router.post('/addNationality', function (req, res, next) {
  nationalityObj.create(req.body).then(function (data) {
    res.status(200).send(data);
  }).catch(next);
});

router.get('/getAllNationality', function (req, res, next) {
  nationalityObj.find({}, {})
    .then(function (data) {
      res.status(200).send(data);
    });
});

router.put('/nationality/:id', function (req, res, next) {
  nationalityObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      nationalityObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});
router.get('/nationalityByID', function (req, res, next) {
  nationalityObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});
router.get('/scientificSpByID', function (req, res, next) {
  scientificSpecializationObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});
router.get('/graduationUniversitybyID', function (req, res, next) {
  graduationUniversityObj.findOne({ _id: req.query.id }, {})
    .then(function (data) {
      res.status(200).send(data)
    }).catch(next);
});



router.put('/employee/:id', function (req, res, next) {
  employeeObj.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function (data) {
      employeeObj.findOne({ _id: req.params.id }).then(function (data2) {
        console.log(data2);
        return res.status(200).send(data2);
      }).catch(next);
    });
});

router.post('/uploadFile', function (req, res, next) {
  var form = new formidable.IncomingForm();
  //Formidable uploads to operating systems tmp dir by default
  form.uploadDir = "./public/uploadFiles";       //set upload directory
  form.keepExtensions = true;     //keep file extension

  form.parse(req, function (err, fields, files) {
    console.log("file uploaded Completely ");
    var fileUploaded = files[Object.keys(files)[0]];

    res.send("http://" + req.headers.host + "/uploadFiles/" + path.basename(fileUploaded.path));
  });
});

module.exports = router;