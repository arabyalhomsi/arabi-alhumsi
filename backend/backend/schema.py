import graphene  
import blog.schema
import settings.schema

class Query(blog.schema.Query, settings.schema.Query, graphene.ObjectType):  
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

class Mutation(blog.schema.Mutation, settings.schema.Mutation, graphene.ObjectType):  
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)  