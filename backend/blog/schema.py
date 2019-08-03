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
    title = graphene.String()
    content = graphene.String()
    pub_date = graphene.Date()

class CommentInput(graphene.InputObjectType):
    content = graphene.String()
    post = graphene.ID()

class CreatePost(graphene.Mutation):
    class Arguments:
        input = PostInput(required=True)

    ok = graphene.Boolean()
    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, info, input=None):
        pub_date = input.pub_date or None
        
        # if pub_date is not None:
        ok = True
        post_instance = Post(title=input.title, content=input.content)
        post_instance.save()
        return CreatePost(ok=ok, post=post_instance)

        
        # return None

class UpdatePost(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = PostInput(required=True)

    ok = graphene.Boolean()
    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = False
        post_instance = Post.objects.get(pk=id)
        if post_instance:
            ok = True
            post_instance.title = input.title
            post_instance.content = input.content
            post_instance.pub_date = input.pub_date
            post_instance.save()
            return UpdatePost(ok=ok, post=post_instance)
        return UpdatePost(ok=ok, post=None)

class Mutation(graphene.ObjectType):
    create_post = CreatePost.Field()
    update_post = UpdatePost.Field()


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


schema = graphene.Schema(query=Query, mutation=Mutation)  