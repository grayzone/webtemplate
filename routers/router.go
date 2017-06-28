package routers

import (
	"github.com/grayzone/webtemplate/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
}
