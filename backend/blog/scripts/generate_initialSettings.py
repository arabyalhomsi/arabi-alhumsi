import json, logging, os

initialSettings = [
    {
    "model": "blog.post",
    "fields": {
      "title": "Post 1",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsum nam repellat reiciendis aut fugiat cumque deserunt, temporibus ea explicabo, perferendis quos quam possimus omnis. Dolorum, quos? Necessitatibus, quo delectus!",
      "pub_date": "2018-03-04"
    }
  },
  {
    "model": "blog.post",
    "fields": {
      "title": "Post 2",
      "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsum nam repellat reiciendis aut fugiat cumque deserunt, temporibus ea explicabo, perferendis quos quam possimus omnis. Dolorum, quos? Necessitatibus, quo delectus!",
      "pub_date": "2018-02-04"
    }
  }
]


initialSettingsJSON = json.dumps(initialSettings)

if not os.path.exists('../fixtures'):
  os.mkdir('../fixtures')

f = open("../fixtures/initialSettingsBlog.json", "w+")
f.write(initialSettingsJSON)
f.close()