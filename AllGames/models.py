from django.db import models


# creating class models for the various tables in my database with their names and data types
class LiveGames(models.Model):
    match = models.CharField(max_length=200)
    leagues = models.CharField(max_length=200)
    matchDate = models.DateTimeField()
    homeLogo = models.CharField(max_length=500)
    awayLogo = models.CharField(max_length=500)

    def __str__(self):
        return f'{self.match} on {self.matchDate}'


class EndedGames(models.Model):
    match = models.CharField(max_length=200)
    leagues = models.CharField(max_length=200)
    matchDate = models.DateTimeField()
    homeLogo = models.CharField(max_length=500)
    awayLogo = models.CharField(max_length=500)

    def __str__(self):
        return f'{self.match} on {self.matchDate}'


class LaterGames(models.Model):
    match = models.CharField(max_length=200)
    leagues = models.CharField(max_length=200)
    matchDate = models.DateTimeField()
    homeLogo = models.CharField(max_length=500)
    awayLogo = models.CharField(max_length=500)

    def __str__(self):
        return f'{self.match} on {self.matchDate}'
