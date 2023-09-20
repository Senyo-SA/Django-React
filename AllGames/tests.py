from django.test import TestCase
from .models import Games


class GamesTestCase(TestCase):
    def setUp(self):
        Games.objects.create(match='chelsea - arsenal',
                             leagues='EPL',
                             matchDate='2023-09-20T00:00:00Z',
                             homeLogo='chels',
                             awayLogo='arsn',
                             match_type='ENDED'
        )

        Games.objects.create(match='barcelona - wolves',
                             leagues='UCL',
                             matchDate='2022-07-20T00:00:00Z',
                             homeLogo='barc',
                             awayLogo='wolv',
                             match_type='LATER'
                             )

        def test_return_data_correct(self):
            """The right data is fetched perfectly"""
            matchA = Games.objects.get(match='chelsea - arsenal')
            matchB = Games.objects.get(match='barcelona - wolves')
            self.assertEqual(matchA.show(), 'the match is "chelsea - arsenal" ')
            self.assertEqual(matchB.show(), 'the match is "barcelona - wolves" ')
