from rest_framework import viewsets
from .serialiser import *


# Declared classes connect django models to the rest framework view
class Matches(viewsets.ModelViewSet):
    serializer_class = Match
    queryset = Games.objects.all()

