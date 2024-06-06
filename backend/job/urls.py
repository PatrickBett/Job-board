from .views import JobListAPIView, PostCreateListAPIView
from django.urls import path

urlpatterns = [
    path('jobs/', JobListAPIView.as_view(), name='jobs'),
    path('posts/', PostCreateListAPIView.as_view(), name='posts'),
]