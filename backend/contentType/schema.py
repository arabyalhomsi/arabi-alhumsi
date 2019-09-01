import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
from contentType.models import Field as FieldModel
from contentType.models import Type as TypeModel
import mongoengine

mongoengine.connect('arabi_web_nosql',
                    host='db-mongo',
                    port=27017,
                    username='arabi_root',
                    password='root')

class Field(MongoengineObjectType):
    class Meta:
        model = FieldModel


class Type(MongoengineObjectType):
    class Meta:
        model = TypeModel


class Query(graphene.ObjectType):

    types = graphene.List(Type)

    def resolve_types(self, info, **kwargs):
        return TypeModel.objects

schema = graphene.Schema(query=Query, types=[Field, Type])