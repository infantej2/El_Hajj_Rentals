# Generated by Django 4.1.1 on 2022-11-24 03:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='rental',
            name='customerID',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
