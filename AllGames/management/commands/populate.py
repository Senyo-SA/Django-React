from ...models import *
from django.core.management import BaseCommand
import requests


# These functions are to get the needed data from the remote web api into the database and rest framework
# The api data is gotten using the imported requests library .get function on the api details
# Then changed to json using the .json function
# The while loop loops through the requested data getting the specific details needed
# Using objects.create method, the information is passed into the django database through the models


class Command(BaseCommand):

    help = 'Get the requested data into database'

    def current(self):
        url = "https://api-football-v1.p.rapidapi.com/v3/fixtures"
        querystring = {"live": "all"}
        headers = {
            "X-RapidAPI-Key": process.env["API_KEY "],
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }

        result = requests.get(url, headers=headers, params=querystring).json()
        count = 0

        while count < len(result):
            home_team = (result['response'][count]['teams']['home']['name'])
            away_team = (result['response'][count]['teams']['away']['name'])
            home_team_goals = (result['response'][count]['goals']['home'])
            away_team_goals = (result['response'][count]['goals']['away'])
            league = (result['response'][count]['league']['name'])
            date = (result['response'][count]['fixture']['date'])

            LiveGames.objects.create(match=f'{home_team} {home_team_goals} - {away_team_goals} {away_team}', leagues=league, matchDate=date)

            count += 1
            # print(f'{home_team} {home_team_goals} - {away_team_goals} {away_team} - {league} - {date}')

    def passed(self):
        url = "https://api-football-v1.p.rapidapi.com/v3/fixtures"

        querystring = {"last": "50"}

        headers = {
            "X-RapidAPI-Key": process.env["API_KEY "],
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }

        result = requests.get(url, headers=headers, params=querystring).json()
        count = 0

        while count < len(result):
            home_team = (result['response'][count]['teams']['home']['name'])
            away_team = (result['response'][count]['teams']['away']['name'])
            home_team_goals = (result['response'][count]['goals']['home'])
            away_team_goals = (result['response'][count]['goals']['away'])
            league = (result['response'][count]['league']['name'])
            date = (result['response'][count]['fixture']['date'])

            EndedGames.objects.create(match=f'{home_team} {home_team_goals} - {away_team_goals} {away_team}', leagues=league, matchDate=date)

            count += 1
            # print(f'{home_team} {home_team_goals} - {away_team_goals} {away_team} - {league} - {date}')

    def future(self):
        url = "https://api-football-v1.p.rapidapi.com/v3/fixtures"

        querystring = {"next": "50"}

        headers = {
            "X-RapidAPI-Key": process.env["API_KEY "],
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }

        result = requests.get(url, headers=headers, params=querystring).json()
        count = 0

        while count < len(result):
            home_team = (result['response'][count]['teams']['home']['name'])
            away_team = (result['response'][count]['teams']['away']['name'])
            league = (result['response'][count]['league']['name'])
            date = (result['response'][count]['fixture']['date'])

            LaterGames.objects.create(match=f'{home_team} - {away_team}', leagues=league, matchDate=date)

            count += 1
            # print(f'{home_team} - {away_team} - {league} - {date}')

    # The below functions get the data from the api into the database and rest framework
    # Uncomment the commented lines for the expected outcome
    # current()
    # passed()
    # future()
