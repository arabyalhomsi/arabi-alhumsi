import json, logging

menu_items = {
  "Home": "/",
  "Timeline": "/timeline",
  "Projects": "/projects",
  "Services": "/services",
  "Blog": "/blog",
  "About": "/about"
}

initialSettings = [
    {
    "model": "settings.settingPoint",
    "fields": {
      "key": "main_title",
      "value": "Arabi Alhumsi"
    }
  },
  {
    "model": "settings.settingPoint",
    "fields": {
      "key": "menu_items",
      "value": menu_items
    }
  }
]


initialSettingsJSON = json.dumps(initialSettings)
f = open("../fixtures/initialSettings.json", "w")
f.write(initialSettingsJSON)
f.close()