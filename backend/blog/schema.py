import graphene  
from graphene_django.types import DjangoObjectType, ObjectType  
from blog.models import Post, Comment

class PostType(DjangoObjectType):
    class Meta:
        model = Post

class CommentType(DjangoObjectType):
    class Meta:
        model = Comment

class PostInput(graphene.InputObjectType):  
    id = graphene.ID()
    title = graphene.String()

class CommentInput(graphene.InputObjectType):  
    id = graphene.ID()
    content = graphene.String()

class Query(ObjectType):  
    post = graphene.Field(PostType, id=graphene.Int())
    comment = graphene.Field(CommentType, id=graphene.Int())
    posts = graphene.List(PostType)
    comments= graphene.List(CommentType)

    def resolve_post(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Post.objects.get(pk=id)

        return None

    def resolve_comment(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Comment.objects.get(pk=id)

        return None

    def resolve_posts(self, info, **kwargs):
        return Post.objects.all()

    def resolve_comments(self, info, **kwargs):
        return Comment.objects.all()


schema = graphene.Schema(query=Query)  