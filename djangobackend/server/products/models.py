from django.db import models

# Create your models here.


class Product(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=True, blank=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=False, blank=False)
    description = models.TextField()
    category = models.CharField(max_length=100, null=True, blank=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
    


# if you want to upload files then run this command
# step 1: first you create a folder named uploads/files in your project directory
# step 2: then uncomment the below code
# files = models.FileField(upload_to='uploads/files')