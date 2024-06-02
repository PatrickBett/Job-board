from .views import JobListAPIView
from django.urls import path

urlpatterns = [
    path('jobs/', JobListAPIView.as_view(), name='jobs'),
]