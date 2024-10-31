from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

urlpatterns = [
    path('ckeditor/', include('ckeditor_uploader.urls')),
]

router = DefaultRouter()
router.register('register', RegisterViewSet, basename='register')
router.register('login', LoginViewSet, basename='login')
router.register('users', UserViewSet, basename='users')
router.register('profile_image', ProfileImageViewSet, basename='profile_image')
router.register('create_story', BookViewSet, basename='create_story')
router.register('add_page', PageViewSet, basename='add_page')

urlpatterns = router.urls


from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
