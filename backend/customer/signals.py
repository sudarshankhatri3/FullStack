from django.core.mail import send_mail
from django.db.models.signals import post_save,pre_delete
from .models import ProductOrder
from django.dispatch import receiver




@receiver(post_save,sender=ProductOrder)
def send_Order_mail(sender,instance,created,*args, **kwargs):
    if created:
        send_mail(
            subject='Your order {instance.product.title} confirmed',
            message=f"Hi {instance.product.product_owner}, good news! Your {instance.product.title} officially has a new fan 😎🔥",
            from_email='khatrisudarshan360@gmail.com',
            recipient_list=[instance.product.product_owner],
            fail_silently=False
        )