from django.db import models


# creating class models for the various tables in my database with their names and data types
class Games(models.Model):

    GAMES_STATUS_CHOICES =[
        ("LIVE", 'live'),
        ("ENDED", 'ended'),
        ("LATER", 'later')
    ]

    match = models.CharField(max_length=200)
    leagues = models.CharField(max_length=200)
    matchDate = models.DateTimeField()
    homeLogo = models.CharField(max_length=500)
    awayLogo = models.CharField(max_length=500)
    match_type = models.CharField(max_length=5, choices=GAMES_STATUS_CHOICES)

    def __str__(self):
        return f'{self.match} on {self.matchDate}'
