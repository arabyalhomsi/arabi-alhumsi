import graphene, logging 
from graphene_django.types import DjangoObjectType, ObjectType 
from settings.models import SettingPoint

class SettingPointType(DjangoObjectType):
    class Meta:
        model = SettingPoint

class SettingPointInput(graphene.InputObjectType):
    key = graphene.String()
    value = graphene.String()

class CreateSettingPoint(graphene.Mutation):
    class Arguments:
        input = SettingPointInput()

    ok = graphene.Boolean()
    settingPoint = graphene.Field(SettingPointType)

    def mutate(root, info, input=None):
        ok = False

        if input.key is not None:
            ok = True
            settingPointInstance = SettingPoint(key=input.key, value=input.value)
            settingPointInstance.save()
            return CreateSettingPoint(ok=ok, settingPoint=settingPointInstance)
        
        return CreateSettingPoint(ok=ok, settingPoint=None)


class UpdateSettingPoint(graphene.Mutation):
    class Arguments:
        input = SettingPointInput(required=True)

    ok = graphene.Boolean()
    settingPoint = graphene.Field(SettingPointType)

    def mutate(root, info, input=None):
        ok = False

        settingPointInstance = SettingPoint.objects.get(key=input.key)
        if settingPointInstance:
            ok = True
            settingPointInstance.key = input.key
            settingPointInstance.value = input.value
            settingPointInstance.save()
            return UpdateSettingPoint(ok=ok, settingPoint=settingPointInstance)

        return UpdateSettingPoint(ok=ok, settingPoint=None)


class Mutation(graphene.ObjectType):
    create_setting_point = CreateSettingPoint.Field()
    update_setting_point = UpdateSettingPoint.Field()

class Query(graphene.ObjectType):
    settingPoint = graphene.Field(SettingPointType, key=graphene.String())
    settingPoints = graphene.List(SettingPointType)

    def resolve_settingPoint(self, info, **kwargs):
        key = kwargs.get('key')

        if key is not None:
            return SettingPoint.objects.get(key=key)

        return None

    def resolve_settingPoints(self, info, **kwargs):
        return SettingPoint.objects.all()

schema = graphene.Schema(query=Query, mutation=Mutation)  