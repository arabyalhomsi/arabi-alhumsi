import graphene  
import blog.schema
import settings.schema
import timeline.schema
import contentType.schema

class Query(
    blog.schema.Query,
    settings.schema.Query,
    timeline.schema.Query,
    contentType.schema.Query,

    graphene.ObjectType):  
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

class Mutation(
    blog.schema.Mutation,
    settings.schema.Mutation,
    # timeline.schema.Mutation,
    
    graphene.ObjectType):  
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)  