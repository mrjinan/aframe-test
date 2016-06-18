System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "angular-material": "github:angular/bower-material@1.0.9",
    "github:angular/bower-angular-animate@1.5.7": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:angular/bower-angular-aria@1.5.7": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:angular/bower-material@1.0.9": {
      "angular": "github:angular/bower-angular@1.5.7",
      "angular-animate": "github:angular/bower-angular-animate@1.5.7",
      "angular-aria": "github:angular/bower-angular-aria@1.5.7",
      "css": "github:systemjs/plugin-css@0.1.23"
    }
  }
});
