from datetime import datetime
from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import (
    DateTimeField, ReferenceField, StringField, EmbeddedDocumentListField
)



class Field(EmbeddedDocument):
    meta = {'collection': 'field'}
    type = StringField()
    value = StringField()

class Type(Document):
    meta = {'collection': 'type'}
    name = StringField()
    fields = EmbeddedDocumentListField(Field)

# TODO: content type manager


# python manage.py migrate --database=nosql
# mongo "mongodb://root:root@localhost:27017"

# {
#   "type_name": "post",
#   "type_fields": [
#       {
#           field_type: "title",
#           field_value: "arabi alhumsi"  
#       },
#       {
#           field_type: "main_image",
#           field_value: ".img"  
#       },
#       {
#           field_type: "content",
#           field_value: "lorem ipsum"  
#       },
#   ]
# }
#
#
#