# Generated by Django 4.1.2 on 2023-03-16 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MitosApp', '0003_mitos_precio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mitos',
            name='Dioses',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='mitos',
            name='Facciones',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='mitos',
            name='Titulo',
            field=models.CharField(max_length=120, null=True),
        ),
    ]
