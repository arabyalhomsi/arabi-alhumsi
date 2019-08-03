import json, logging, os


initialSettings = [
  {
    "model": "timeline.TimelineEntry",
    "fields": {
      "title": "Born",
      "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quisquam veniam iusto doloremque, laboriosam laudantium, blanditiis culpa rem dignissimos officia tempora suscipit eaque reprehenderit eligendi aspernatur, dicta voluptates quidem sequi!",
      "date": "1998-03-06"
    }
  },
    {
    "model": "timeline.TimelineEntry",
    "fields": {
      "title": "Born",
      "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quisquam veniam iusto doloremque, laboriosam laudantium, blanditiis culpa rem dignissimos officia tempora suscipit eaque reprehenderit eligendi aspernatur, dicta voluptates quidem sequi!",
      "date": "1998-03-06"
    }
  },
    {
    "model": "timeline.TimelineEntry",
    "fields": {
      "title": "Born",
      "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quisquam veniam iusto doloremque, laboriosam laudantium, blanditiis culpa rem dignissimos officia tempora suscipit eaque reprehenderit eligendi aspernatur, dicta voluptates quidem sequi!",
      "date": "1998-03-06"
    }
  },
    {
    "model": "timeline.TimelineEntry",
    "fields": {
      "title": "Born",
      "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quisquam veniam iusto doloremque, laboriosam laudantium, blanditiis culpa rem dignissimos officia tempora suscipit eaque reprehenderit eligendi aspernatur, dicta voluptates quidem sequi!",
      "date": "1998-03-06"
    }
  },
    {
    "model": "timeline.TimelineEntry",
    "fields": {
      "title": "Born",
      "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quisquam veniam iusto doloremque, laboriosam laudantium, blanditiis culpa rem dignissimos officia tempora suscipit eaque reprehenderit eligendi aspernatur, dicta voluptates quidem sequi!",
      "date": "1998-03-06"
    }
  }
]

initialSettingsJSON = json.dumps(initialSettings)

if not os.path.exists('../fixtures'):
  os.mkdir('../fixtures')

f = open("../fixtures/initialSettingsTimeline.json", "w+")
f.write(initialSettingsJSON)
f.close()