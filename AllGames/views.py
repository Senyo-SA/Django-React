from rest_framework import viewsets
from .serialiser import *


# Declared classes connect django models to the rest framework view
class LiveMatches(viewsets.ModelViewSet):
    serializer_class = Live
    queryset = LiveGames.objects.all()


class EndedMatches(viewsets.ModelViewSet):
    serializer_class = Ended
    queryset = EndedGames.objects.all()


class LaterMatches(viewsets.ModelViewSet):
    serializer_class = Later
    queryset = LaterGames.objects.all()
