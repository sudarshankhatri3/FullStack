from django.test import TestCase
from .models import category,products

# Create your tests here.
class CategoryTestCase(TestCase):
    def setup(self):
        category.objects.create(category_title="fufula",image="",description="THis is the category of fufula")



    #get objects
    def set_model_data(self):
        cat=category.objects.get()


