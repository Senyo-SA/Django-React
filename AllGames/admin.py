from django.contrib import admin
from .models import *

# Register your models here to work with and display on the admin site
admin.site.register(LiveGames)
admin.site.register(EndedGames)
admin.site.register(LaterGames)
