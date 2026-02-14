from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=150)
    isbn = models.CharField(max_length=20, unique=True)
    total_copies = models.PositiveIntegerField()
    available_copies = models.PositiveIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
