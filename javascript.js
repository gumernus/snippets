{
	"console.log()": {
		"prefix": ".console",
		"body": [
		  "console.log($1);"
		],
		"description": "console.log()"
	  },

	  "express prebuild": {
		"prefix": ".express",
		"body": [
		  "const express = require(\"express\");",
		  "const app = express();",
		  "var path = require('path');",
		  "const port = 3000;",
		  "",
		  "app.use(express.static('public'))",
		  "",
		  "app.get(\"/\", (req, res) => {",
		  "    console.log(\"hh\");",
		  "    //res.sendFile(path.join(__dirname + '/public/index.html'));",
		  "});",
		  "",
		  "app.listen(port, () => {",
		  "    console.log(`Server runing on port`, port);",
		  "  });"
		],
		"description": "express prebuild"
	  },

	  "app get": {
		"prefix": ".app-get",
		"body": [
		  "app.get(\"$1\", (req, res) => {",
		  "    $2",
		  "});"
		],
		"description": "app get"
	  },

	  "loop": {
		"prefix": ".loop",
		"body": [
			"for (var i = 1; i <= 100; i++){",
			"    $1",
			"}"
		],
		"description": "loop"
	  }

}
