import graphene  
from graphene_django.types import DjangoObjectType, ObjectType  
from timeline.models import TimelineEntry
import logging

class TimelineType(DjangoObjectType):
    class Meta:
        model = TimelineEntry


class TimelineInput(graphene.InputObjectType):
    title = graphene.String()
    content = graphene.String()
    date = graphene.Date()

class Query(ObjectType):
    timelineEntry = graphene.Field(TimelineType, id=graphene.Int())
    timelineEntries = graphene.List(TimelineType)
    
    def resolve_timelineEntry(self, info, **kwargs):
        id = kwargs.id('id')

        if id is not None:
            return TimelineEntry.objects.get(pk=id)

        return None

    def resolve_timelineEntries(self, info, **kwargs):
        return TimelineEntry.objects.all()




schema = graphene.Schema(query=Query)