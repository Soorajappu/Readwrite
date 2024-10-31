from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model
User=get_user_model()

class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()
    
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret.pop('password', None)
        return ret
    

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password','profile_image']
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
    
class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['profile_image']
        
        
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = ['id','auther_name','book_name', 'description', 'created_at', 'published','genres','no_of_pages', 'language','background_image']
        
    def create(self, validated_data):
        background_image = validated_data.pop('background_image', None)
        book = Books.objects.create(**validated_data)
        if background_image:
            book.background_image.save(background_image.name, background_image)
        return book
    

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pages
        fields = ['id', 'book','title', 'content', 'page_number', 'published']
