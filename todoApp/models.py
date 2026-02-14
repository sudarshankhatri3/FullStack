from django.db import models
from django.utils.text import slugify
from django.utils import timezone


priority_choice = [
    ('HIGH', 'High'),
    ('MEDIUM', 'Medium'),
    ('LOW', 'Low'),
]


# Create your models here.
class todoData(models.Model):
    slug=models.SlugField(unique=True,null=False)
    title=models.CharField(max_length=1000,null=False)
    priority=models.CharField(max_length=30,choices=priority_choice,default='MEDIUM')
    completed=models.BooleanField(default=False)
    final_date=models.DateTimeField(null=False)
    due_date=models.DateTimeField(null=False)
    is_important=models.BooleanField(default=False)
    description=models.CharField(max_length=100,null=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)



    def save(self,*args,**kwargs):
        if not self.slug:
            self.slug=slugify(self.title)
        if timezone.now()>self.final_date:
            self.completed=True
        return super().save(*args,**kwargs)

    def __str__(self):
        return self.title
