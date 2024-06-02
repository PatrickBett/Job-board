from .models import Job
from .serializer import JobSerializer, UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
# Create your views here.

class JobListAPIView(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     user = self.request.user
    #     return Job.objects.filter(author = user)


    

class UserCreateAPIView (generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [AllowAny]
