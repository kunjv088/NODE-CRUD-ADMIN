const express = require("express")
const route = express.Router()
const ctl = require("../controller/Ctl")

route.get("/",ctl.SignUp)
route.get("/dashbord",ctl.Dashbord)
route.post("/sendData",ctl.SignUpData)
route.get("/login",ctl.Login)
route.post("/loginData",ctl.LoginData)
route.get("/logout",ctl.LogOut)
route.get("/form",ctl.Form)
route.post("/formdata",ctl.FormData)
route.get("/table",ctl.Table)
route.get("/delete",ctl.Delete)
route.get("/edit",ctl.Edit)
route.post("/update",ctl.UpdateData)
module.exports = route