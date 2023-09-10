from rest_framework import serializers
from .models import *


# The serializers classes pass the models created into rest framework form to be used in the views
class Live(serializers.ModelSerializer):
    class Meta:
        model = LiveGames
        fields = '__all__'


class Ended(serializers.ModelSerializer):
    class Meta:
        model = EndedGames
        fields = '__all__'


class Later(serializers.ModelSerializer):
    class Meta:
        model = LaterGames
        fields = '__all__'
