from django.shortcuts import render
from rest_framework import viewsets,permissions,status
from .serializers import *
from .models import *
from rest_framework.response import Response
from knox.models import AuthToken
from rest_framework.parsers import MultiPartParser, FormParser
import base64
from django.core.files.base import ContentFile
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model,authenticate
User = get_user_model()



class ProfileImageViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]
    serializer_class = RegisterSerializer
    queryset = User.objects.all()


    def create(self, request, *args, **kwargs):
        print("request.data", request.data)
        if not request.user.is_authenticated:
            return Response({'error': 'User is not authenticated'}, status=status.HTTP_401_UNAUTHORIZED)

        if 'profile_image' not in request.data:
            return Response({'error': 'No image provided'}, status=status.HTTP_400_BAD_REQUEST)

        user_profile = request.user
        format, imgstr = request.data['profile_image'].split(';base64,')
        ext = format.split('/')[-1]
        data = ContentFile(base64.b64decode(imgstr), name=f'{user_profile.username}.{ext}')
        user_profile.profile_image = data
        user_profile.save()

        return Response({
            'message': 'Profile image uploaded successfully',
            'profile_image': user_profile.profile_image.url
        }, status=status.HTTP_200_OK)



class LoginViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    # queryset = User.objects.all()
    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            
            user = authenticate(request, email=email, password=password)
            
            if user:
                _, token = AuthToken.objects.create(user)
                return Response({
                    'user': self.serializer_class(user).data,
                    'token': token,
                    'username': user.username
                })
            else:
                return Response({"error": "Invalid credentials"}, status=401)
            
        else:
            return Response(serializer.errors, status=400)


class RegisterViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
    
class UserViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
    def list(self, request):
        queryset = User.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
    
    

class BookViewSet(viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BookSerializer
    permission_classes = [permissions.AllowAny]
    parser_classes = [MultiPartParser, FormParser]

    def create(self, request, *args, **kwargs):
        user = self.request.user
        data = request.data.copy()  # Make a mutable copy of request data
        # data['author'] = user.id
        data['auther_name'] = user.username  # Corrected typo in 'author_name'

       # Check if 'background_image' is in the request data
        if 'background_image' in data:
            background_image = data['background_image']

            if isinstance(background_image, str) and ';base64,' in background_image:
                # Handle base64 image data
                user_profile = request.user
                format, imgstr = background_image.split(';base64,')
                ext = format.split('/')[-1]
                image = ContentFile(base64.b64decode(imgstr), name=f'{user_profile.username}.{ext}')
                data['background_image'] = image
            else:
                # If it's not a base64 string, it should be an uploaded file, and no further action is needed
                pass

        serializer = BookSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PageViewSet(viewsets.ModelViewSet):
    queryset = Pages.objects.all()
    serializer_class = PageSerializer
    permission_classes = [permissions.AllowAny]
    def add_page(request):
        serializer = PageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
