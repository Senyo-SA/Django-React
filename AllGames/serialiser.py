from rest_framework import serializers
from .models import *


# The serializers classes pass the models created into rest framework form to be used in the views
class Match(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = '__all__'
